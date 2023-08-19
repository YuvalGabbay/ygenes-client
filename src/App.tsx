import { useRef, useState } from "react";
import styles from "./App.module.css";
import { DiseasePicker } from "./DiseasePicker";
import { Button, Card, IconButton, Tooltip, Typography } from "@mui/material";
import { PopulationPicker } from "./PopulationPicker";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
import { buildDataForChart, getPopulatiomImage } from "./utils";
import { getElementAtEvent, Scatter } from "react-chartjs-2";
import { CaseControl } from "./types";
import { Help } from "@mui/icons-material";
import enricherLogo from "./images/EnricherKG_logo.png";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { SERVER_URL } from "./constants";

ChartJS.register(LinearScale, PointElement, LineElement, Legend);

function App() {
  const [selectedDisease, setSelectedDisease] = useState<number>(0);
  const [selectedPopulation, setSelectedPopulation] = useState<number>(0);
  const [dataForChart, setDataForChart] = useState<any>();
  const [dataShowCaseControl, setDataShowCaseControl] =
    useState<CaseControl[]>();

  const chartRef = useRef();
  const onClick = (event: any) => {
    if (chartRef.current) {
      const currenElement: any = getElementAtEvent(chartRef.current, event);
      if (!currenElement[0]) {
        console.warn("Clicked on unknown point");
        return;
      }
      const currentGeneName = dataForChart.labels[currenElement[0].index];

      window.open(
        `https://www.genecards.org/cgi-bin/carddisp.pl?gene=${currentGeneName}`,
        "_blank",
        "noreferrer"
      );
    }
  };

  function onDiseaseChange(event: any) {
    setSelectedDisease(Number.parseInt(event.target.value));
  }

  function onPopulationChange(event: any) {
    setSelectedPopulation(Number.parseInt(event.target.value));
  }

  function getGeneData() {
    fetchGeneData(selectedDisease, selectedPopulation);
  }

  function fetchGeneData(selectedDisease: number, selectedPopulation: number) {
    fetch(
      `${SERVER_URL}/genes/gene-distances?diseaseId=${selectedDisease}&populationKey=${selectedPopulation}`
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = buildDataForChart(data.geneDistances);
        const caseControlData = data.caseControl;
        setDataForChart(formattedData);
        setDataShowCaseControl(caseControlData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  console.log("new!");

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <section className={styles.buttonLine}>
          <div>
            <DiseasePicker
              onDiseaseChange={onDiseaseChange}
              selectedDisease={selectedDisease}
            />
          </div>
          <div>
            <PopulationPicker
              onPopulationChange={onPopulationChange}
              selectedPopulation={selectedPopulation}
            />
          </div>
          <div className={styles.submitButton}>
            <Button
              disabled={!selectedDisease || !selectedPopulation}
              onClick={getGeneData}
            >
              Submit
            </Button>
          </div>
        </section>
      </div>
      <div className={styles.dataDisplaySection}>
        {!!dataForChart && (
          <Card variant="outlined" className={styles.scatterCard}>
            <Typography gutterBottom variant="h6" component="div">
              Genes by Distances
              <Tooltip
                title=" The higher the distance, the greater the difference in
                    allele frequencies for this gene.You can click on gene dot to obtain full information
                        about it."
              >
                <IconButton>
                  <Help />
                </IconButton>
              </Tooltip>
            </Typography>

            <Scatter
              data={dataForChart}
              ref={chartRef}
              onClick={onClick}
              options={{
                scales: {
                  y: { title: { text: "Gene Distance", display: true } },
                },
              }}
            />
          </Card>
        )}
        {!!dataShowCaseControl && (
          <Card variant="outlined" className={styles.caseControlDisplay}>
            <Typography gutterBottom variant="h6" component="div">
              Sample Sizes in Genome-Wide Association Studies (GWAS)
            </Typography>
            <div className={styles.caseControlPopulations}>
              {dataShowCaseControl.map((caseControl) => (
                <div>
                  <div className={styles.populationItem}>
                    <img
                      className={styles.populationLogo}
                      src={getPopulatiomImage(caseControl.sub_population)}
                    />
                    <div>
                      <b>{caseControl.sub_population}</b>
                      <div>Case: {caseControl.case_amount}</div>
                      <div>Control: {caseControl.control_amount}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.titleEnricher}>
                <b>
                  Connect genes to cells, tissues and diseases using
                  Enricher-KG:
                </b>
              </p>
              <Link to={`https://maayanlab.cloud/enrichr-kg`}>
                <img className={styles.enricherLogo} src={enricherLogo} />
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
