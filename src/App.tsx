import { useState, useEffect } from "react";
import "./App.css";
import { DiseasePicker } from "./diseasePicker";
import { PopulationPicker } from "./populationPicker";
import { Button } from "@mui/material";

function App() {
  const [selectedDisease, setSelectedDisease] = useState<string>("");
  const [selectedPopulation, setSelectedPopulation] = useState<string>("");

  function onDiseaseChange(event: any) {
    setSelectedDisease(event.target.value);
  }

  function onPopulationChange(event: any) {
    setSelectedPopulation(event.target.value);
  }

  return (
    <div>
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
      <div>
        <Button disabled={!selectedDisease || !selectedPopulation}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
