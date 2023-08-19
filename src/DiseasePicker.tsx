import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Disease } from "./types";
import "./DiseasePicker.css";
import { SERVER_URL } from "./constants";

type Props = {
  onDiseaseChange: (event: any) => void;
  selectedDisease: number;
};

export function DiseasePicker({ onDiseaseChange, selectedDisease }: Props) {
  // save disease list
  const [diseases, setDiseases] = useState<Disease[]>([]);
  useEffect(() => {
    fetch(`${SERVER_URL}/diseases/list`)
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
