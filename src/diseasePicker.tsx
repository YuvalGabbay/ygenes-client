import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Disease } from "./types";

type Props = {
  onDiseaseChange: (event: any) => void;
  selectedDisease: string;
};

export function DiseasePicker({ onDiseaseChange, selectedDisease }: Props) {
  // save disease list
  const [diseases, setDiseases] = useState<Disease[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/diseases/list")
      .then((res) => res.json())
      .then((data) => {
        setDiseases(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={selectedDisease}
        exclusive
        onChange={onDiseaseChange}
        aria-label="Platform"
      >
        {diseases.map((disease) => (
          <ToggleButton value={disease.disease_name}>
            {disease.disease_name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
