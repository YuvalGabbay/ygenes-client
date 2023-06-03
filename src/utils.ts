import { Population, PopulationType } from "./types";

const populationTypes: PopulationType = {
  AFR_EUR: "Africans vs. Europeans",
  AFR_ASIA: "Africans vs. Asians",
  EUR_ASIA: "Europeans vs. Asians",
};

export function formatPopulation(data: Population[]): string[] {
  return data.map((population) => populationTypes[population.population_type]);
}
