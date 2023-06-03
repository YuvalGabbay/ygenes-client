import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { formatPopulation } from "./utils";

type Props = {
  onPopulationChange: (event: any) => void;
  selectedPopulation: string;
};

export function PopulationPicker({
  onPopulationChange,
  selectedPopulation,
}: Props) {
  // save population list
  const [populations, setPopulations] = useState<string[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/populations/population-type")
      .then((res) => res.json())
      .then((data) => {
        const formattedPopulations = formatPopulation(data);
        setPopulations(formattedPopulations);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={selectedPopulation}
        exclusive
        onChange={onPopulationChange}
        aria-label="Platform"
      >
        {populations.map((population) => (
          <ToggleButton value={population}>{population}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
