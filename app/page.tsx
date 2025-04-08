import React from "react";
import MedalTable from "./components/MedalTable";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Olympic Medal Count
        </h1>
        <MedalTable />
      </div>
    </main>
  );
}
