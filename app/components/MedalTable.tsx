"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MedalDataWithTotal, SortType } from "../types/medals";
import { sortMedalData, validateSortType } from "../utils/sortUtils";
import CountryRow from "./CountryRow";
import SortableHeader from "./SortableHeader";
import { useMedalData } from "../hooks/useMedalData";
import dynamic from "next/dynamic";

// Dynamic imports with no SSR to avoid hydration issues
const ErrorMessage = dynamic(() => import("./ErrorMessage"), { ssr: false });
const LoadingState = dynamic(() => import("./LoadingState"), { ssr: false });

const MedalTable: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSortParam = searchParams.get("sort");

  const [sortType, setSortType] = useState<SortType>(
    validateSortType(urlSortParam)
  );
  const { data, isLoading, error } = useMedalData();
  const [sortedData, setSortedData] = useState<MedalDataWithTotal[]>([]);

  useEffect(() => {
    setSortType(validateSortType(urlSortParam));
  }, [urlSortParam]);

  useEffect(() => {
    if (data && data.length > 0) {
      const sorted = sortMedalData(data, sortType);
      setSortedData(sorted.slice(0, 10));
    }
  }, [data, sortType]);

  const handleSort = (newSortType: SortType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSortType);
    router.push(`?${params.toString()}`);
    setSortType(newSortType);
  };

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-gray-700">#</th>
            <th className="px-4 py-2 text-left text-gray-700">Country</th>
            <SortableHeader
              title="Gold"
              sortType="gold"
              currentSort={sortType}
              onClick={handleSort}
            />
            <SortableHeader
              title="Silver"
              sortType="silver"
              currentSort={sortType}
              onClick={handleSort}
            />
            <SortableHeader
              title="Bronze"
              sortType="bronze"
              currentSort={sortType}
              onClick={handleSort}
            />
            <SortableHeader
              title="Total"
              sortType="total"
              currentSort={sortType}
              onClick={handleSort}
            />
          </tr>
        </thead>
        <tbody>
          {sortedData.map((country, index) => (
            <CountryRow key={country.code} country={country} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalTable;
