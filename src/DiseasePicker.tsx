import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Disease } from "./types";
import "./DiseasePicker.css";

type Props = {
  onDiseaseChange: (event: any) => void;
  selectedDisease: number;
};

export function DiseasePicker({ onDiseaseChange, selectedDisease }: Props) {
  // save disease list
  const [diseases, setDiseases] = useState<Disease[]>([]);
  useEffect(() => {
    fetch("https://elnasi.com:3020/diseases/list")
      .then((res) => res.json())
      .then((data) => {
        setDiseases(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={"diseasePicker"}>
      <div className={"label"}>Disease</div>
      <ToggleButtonGroup
        color="primary"
        value={selectedDisease}
        exclusive
        onChange={onDiseaseChange}
        aria-label="Platform"
      >
        {diseases.map((disease) => (
          <ToggleButton key={disease.disease_name} value={disease.disease_id}>
            {disease.disease_name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
