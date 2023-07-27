export type Disease = {
  disease_id: number;
  disease_name: string;
};
export type Population = {
  name: string;
  population_id: number;
  population_type: string;
};

export type GeneDistance = {
  gene: string;
  ratio_distance: number;
};

export type FormattedGeneDistance = {
  x: string;
  y: number;
};

export type PopulationType = {
  [key: string]: string;
};

export type CaseControl = {
  disease_id: number;
  population_id: number;
  case_amount: number;
  control_amount: number;
  sub_population: string;
};
