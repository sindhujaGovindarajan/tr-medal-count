"use client";

import { useState, useEffect } from "react";
import { MedalData, MedalDataWithTotal } from "../types/medals";

/**
 * Custom hook to fetch medal data and handle loading/error states
 */
export const useMedalData = () => {
  const [data, setData] = useState<MedalDataWithTotal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only fetch data on the client side
  useEffect(() => {
    if (!isClient) return;

    const fetchMedalData = async () => {
      try {
        const response = await fetch("/api/medals");

        if (!response.ok) {
          throw new Error("Failed to fetch medal data");
        }

        const medalData: MedalData[] = await response.json();

        // Calculate total medals and add to each country's data
        const dataWithTotal: MedalDataWithTotal[] = medalData.map(
          (country) => ({
            ...country,
            total: country.gold + country.silver + country.bronze,
          })
        );

        setData(dataWithTotal);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setIsLoading(false);
      }
    };

    fetchMedalData();
  }, [isClient]);

  return { data, isLoading, error };
};
