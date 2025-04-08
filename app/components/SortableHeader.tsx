// need not mention "use client" as this component can be reused anywhere in the app
import React from "react";
import { SortType } from "../types/medals";

interface SortableHeaderProps {
  title: string;
  sortType: SortType;
  currentSort: SortType;
  onClick: (sortType: SortType) => void;
}

/**
 * Renders a sortable column header for the medal table
 */
const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  sortType,
  currentSort,
  onClick,
}) => {
  const isActive = currentSort === sortType;

  return (
    <th
      className={`px-4 py-2 cursor-pointer select-none ${
        isActive ? "font-bold text-blue-600" : "text-gray-700"
      }`}
      onClick={() => onClick(sortType)}
    >
      <div className="flex items-center justify-center">
        <span>{title}</span>
        {isActive && <>&darr;</>}
      </div>
    </th>
  );
};

export default SortableHeader;
