import React from "react";
import { MedalDataWithTotal } from "../types/medals";
import FlagIcon from "./FlagIcon";

interface CountryRowProps {
  country: MedalDataWithTotal;
  rank: number;
}

/**
 * Renders row in the medal table
 */
const CountryRow: React.FC<CountryRowProps> = ({ country, rank }) => {
  return (
    <tr className={rank % 2 === 0 ? "bg-gray-50" : "bg-white"}>
      <td className="px-4 py-2 text-center">{rank}</td>
      <td className="px-4 py-2">
        <div className="flex items-center">
          <FlagIcon countryCode={country.code} />
          &nbsp;
          <span>{country.code}</span>
        </div>
      </td>
      <td className="px-4 py-2 text-center font-medium">{country.gold}</td>
      <td className="px-4 py-2 text-center font-medium">{country.silver}</td>
      <td className="px-4 py-2 text-center font-medium">{country.bronze}</td>
      <td className="px-4 py-2 text-center font-medium">{country.total}</td>
    </tr>
  );
};

export default CountryRow;
