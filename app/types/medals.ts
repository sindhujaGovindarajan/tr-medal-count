export interface MedalData {
  code: string; //flagCode
  gold: number;
  silver: number;
  bronze: number;
}

export interface MedalDataWithTotal extends MedalData {
  total: number;
}

export type SortType = "gold" | "silver" | "bronze" | "total";
