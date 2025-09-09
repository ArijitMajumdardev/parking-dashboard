import { CarFront, DollarSign, Square, SquareCheck } from "lucide-react";
import React from "react";

interface DashboardStatsProps {
  parkingLayout: ParkingSlot[];
  totalRevenue: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  parkingLayout,
  totalRevenue,
}) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md flex justify-around">
      <div className="text-center ">
        <p className="text-sm font-semibold text-gray-600 flex items-center gap-2 flex-col md:flex-row">
          <CarFront /> Total Slots
        </p>
        <p className="text-lg md:text-3xl font-bold text-gray-800">24</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600 flex items-center gap-2  flex-col md:flex-row">
          <SquareCheck />
          Occupied
        </p>
        <p className="text-lg md:text-3xl font-bold text-red-500">
          {parkingLayout.filter((s) => s.isOccupied).length}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600 flex items-center gap-2 flex-col md:flex-row">
          <Square />
          Available
        </p>
        <p className="text-lg md:text-3xl font-bold text-green-500">
          {parkingLayout.filter((s) => !s.isOccupied).length}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600 flex items-center gap-2 flex-col md:flex-row">
          <DollarSign />
          Total Revenue
        </p>
        <p className="text-lg md:text-3xl font-bold text-blue-600">
          ${totalRevenue.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default DashboardStats;
