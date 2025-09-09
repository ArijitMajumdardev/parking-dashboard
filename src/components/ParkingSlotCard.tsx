import React from "react";

interface ParkingSlotCardProps {
  slot: ParkingSlot;
  onClick: (slot: ParkingSlot) => void;
}

const ParkingSlotCard: React.FC<ParkingSlotCardProps> = ({ slot, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
        slot.isOccupied ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={() => !slot.isOccupied && onClick(slot)}
    >
      <div className="text-xl font-bold">{slot.id}</div>
      {slot.isOccupied ? (
        <div className="mt-2 text-center text-sm">
          <div className="font-semibold">{slot.carRegistration}</div>
          <div className="text-xs">
            Entry: {slot.entryTime ? new Date(slot.entryTime).toLocaleTimeString() : ""}
          </div>
          <div className="text-xs">
            Time:{" "}
            {slot.entryTime
              ? Math.floor((Date.now() - slot.entryTime) / 1000 / 60) + " min"
              : ""}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-3xl opacity-50">+</div>
      )}
    </div>
  );
};

export default ParkingSlotCard;
