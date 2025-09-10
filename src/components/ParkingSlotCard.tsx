import React, { useEffect, useState } from "react";

const ParkingSlotCard: React.FC<ParkingSlotCardProps> = ({ slot, onClick }) => {
  const [elasped, setElasped] = useState<number>( Date.now() - slot.entryTime!)
  useEffect(() => {
    if (slot.isOccupied && slot.entryTime) {
      const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTimeInMs = currentTime - slot.entryTime!;
        setElasped(elapsedTimeInMs);
      }, 60000);
  
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [])
  
  return (
    <div
      className={`h-26 md:h-20 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
        slot.isOccupied ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={() => !slot.isOccupied && onClick(slot)}
    >
      <div className="md:text-xl text-sm font-bold">{slot.id}</div>
      {slot.isOccupied ? (
        <div className=" text-center text-sm">
          <div className="font-semibold text-xs">{slot.carRegistration}</div>
          <div className="text-xs">
            Entry: {slot.entryTime ? new Date(slot.entryTime).toLocaleTimeString() : ""}
          </div>
          <div className="text-xs">
            Time:{" "}
            {slot.entryTime
              ? Math.floor(elasped / 1000 / 60) + " min"
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
