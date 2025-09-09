import React, { createContext, useContext, useEffect, useState } from "react";

export const ParkingContext = createContext<ParkingContextType | null>(null);

const initialParkingLayout: ParkingSlot[] = Array.from(
  { length: 24 },
  (_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 6));
    const col = (i % 6) + 1;
    return { id: `${row}${col}`, isOccupied: false };
  }
);

function ParkingProvider({ children }: { children: React.ReactNode }) {
  const [parkingLayout, setParkingLayout] = useState<ParkingSlot[]>(() => {
    const savedLayout = localStorage.getItem("parkingLayout");
    return savedLayout ? JSON.parse(savedLayout) : initialParkingLayout;
  });

  const [totalRevenue, setTotalRevenue] = useState<number>(() => {
    const saved = localStorage.getItem("totalRevenue");
    return saved ? parseFloat(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("parkingLayout", JSON.stringify(parkingLayout));
    localStorage.setItem("totalRevenue", totalRevenue.toString());
  }, [parkingLayout, totalRevenue]);

  return (
    <ParkingContext.Provider
      value={{ setParkingLayout, parkingLayout, totalRevenue, setTotalRevenue }}
    >
      {children}
    </ParkingContext.Provider>
  );
}

export const useParkingContext = () => {
  const context = useContext(ParkingContext);
  if (!context) {
    throw new Error("useParkingContext must be used within a ParkingProvider");
  }
  return context;
};

export default ParkingProvider;
