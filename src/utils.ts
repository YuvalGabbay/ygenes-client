import {
  FormattedGeneDistance,
  GeneDistance,
  Population,
  PopulationType,
} from "./types";
import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import european_logo from "./images/european.png";
import asian_logo from "./images/asian.png";
import african_logo from "./images/african.png";

import React from "react";

export const theme = createTheme({
  palette: {},
});

const populationTypes: PopulationType = {
  AFR_EUR: "Africans vs. Europeans",
  AFR_ASIA: "Africans vs. Asians",
  EUR_ASIA: "Europeans vs. Asians",
};

export function formatPopulation(data: Population[]): void {
  data.forEach((population) => {
    population.name = populationTypes[population.population_type];
  });
}

export function getPopulatiomImage(population: string) {
  switch (population) {
    case "Europeans":
      return european_logo;
    case "Africans":
      return african_logo;
    case "Asians":
      return asian_logo;
  }
}

export function buildDataForChart(data: GeneDistance[]): any {
  const sortedData = data.sort((a, b) =>
    a.ratio_distance > b.ratio_distance ? 1 : -1
  );
  return {
    labels: sortedData.map((geneDistance) => geneDistance.gene),
    datasets: [
      {
        label: "Gene Name",
        backgroundColor: "rgb(255, 99, 132)",
        data: sortedData.map((geneDistance, i) => {
          return {
            x: i,
            y: geneDistance.ratio_distance,
          };
        }),
      },
    ],
  };
}
