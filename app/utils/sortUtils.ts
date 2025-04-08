import { MedalDataWithTotal, SortType } from "../types/medals";

/**
 * Sorts medal data according to specified sort type with appropriate tiebreakers
 */
export const sortMedalData = (
  data: MedalDataWithTotal[],
  sortType: SortType
): MedalDataWithTotal[] => {
  return [...data].sort((a, b) => {
    // Primary sort by the specified medal type
    if (a[sortType] !== b[sortType]) {
      return b[sortType] - a[sortType];
    }

    // tiebreaker rules based on sort type
    if (
      sortType === "total" ||
      sortType === "silver" ||
      sortType === "bronze"
    ) {
      // Ties are broken by most gold
      return b.gold - a.gold;
    } else if (sortType === "gold") {
      // Ties are broken by most silver
      return b.silver - a.silver;
    }

    return 0;
  });
};

/**
 * Validates and ensures sort type is one of the allowed values
 */
export const validateSortType = (sortType: string | null): SortType => {
  const validSortTypes: SortType[] = ["gold", "silver", "bronze", "total"];
  return sortType && validSortTypes.includes(sortType as SortType)
    ? (sortType as SortType)
    : "gold"; // Default to gold if invalid or not provided
};
