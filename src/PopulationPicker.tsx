import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { formatPopulation } from "./utils";
import { Population } from "./types";
import "./PopulationPicker.css";

type Props = {
  onPopulationChange: (event: any) => void;
  selectedPopulation: number;
};

export function PopulationPicker({
  onPopulationChange,
  selectedPopulation,
}: Props) {
  // save population list
  const [populations, setPopulations] = useState<Population[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/populations/population-type")
      .then((res) => res.json())
      .then((data) => {
        formatPopulation(data);
        setPopulations(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className={"label"}>Populations</div>
      <ToggleButtonGroup
        color="primary"
        value={selectedPopulation}
        exclusive
        onChange={onPopulationChange}
        aria-label="Platform"
      >
        {populations.map((population) => (
          <ToggleButton
            key={population.population_id}
            value={population.population_id}
          >
            {population.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
