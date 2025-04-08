"use client";
import React, { useMemo } from "react";

interface FlagIconProps {
  countryCode: string;
  alt?: string;
}

/**
 * Renders a country flag based on the country code
 * Uses the flags.png sprite sheet to display the appropriate flag
 */
const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, alt = "" }) => {
  // map country codes to positions in the sprite sheet
  // sprite sheet approach - position calculated based on country code
  const flagWidth = 28;
  const flagHeight = 17;
  const position = useMemo(() => {
    // Country code to index mapping - based on image order
    const countryIndexMap: { [key: string]: number } = {
      AUT: 0, // Austria
      BLR: 1, // Belarus
      CAN: 2, // Canada
      CHN: 3, // China
      FRA: 4, // France
      GER: 5, // Germany
      ITA: 6, // Italy
      NED: 7, // Netherlands
      NOR: 8, // Norway
      RUS: 9, // Russia
      SUI: 10, // Switzerland
      SWE: 11, // Sweden
      USA: 12, // USA
    };

    const index = countryIndexMap[countryCode];

    if (index === undefined) {
      console.warn(
        `Flag for countryCode "${countryCode}" not found in mapping!`
      );
      return { x: 0, y: 0, index: 0 }; // Default pos
    }

    const y = -(index * flagHeight);
    return { x: 0, y, index };
  }, [countryCode]);

  return (
    <div
      className="inline-block bg-no-repeat"
      style={{
        backgroundImage: "url('/flags.png')",
        backgroundPosition: `0px ${position.y}px`,
        width: `${flagWidth}px`,
        height: `${flagHeight}px`,
      }}
      aria-label={alt} //flag is purely decorative; thus empty alt attribute
      role="img"
    />
  );
};

export default FlagIcon;
