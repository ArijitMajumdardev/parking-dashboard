import React from "react";
import ParkingSlotCard from "./ParkingSlotCard";

interface ParkingLayoutProps {
  parkingLayout: ParkingSlot[];
  handleOpenModal: (slot: ParkingSlot) => void;
}

const ParkingLayout: React.FC<ParkingLayoutProps> = ({ parkingLayout, handleOpenModal }) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 bg-white rounded-lg shadow-md">
      {parkingLayout.map((slot) => (
        <ParkingSlotCard key={slot.id} slot={slot} onClick={handleOpenModal} />
      ))}
    </div>
  );
};

export default ParkingLayout;
