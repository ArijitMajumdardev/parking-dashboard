import React from "react";

interface DashboardStatsProps {
  parkingLayout: ParkingSlot[];
  totalRevenue: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ parkingLayout, totalRevenue }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md flex justify-around">
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600">Total Slots</p>
        <p className="text-3xl font-bold text-gray-800">24</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600">Occupied</p>
        <p className="text-3xl font-bold text-red-500">
          {parkingLayout.filter((s) => s.isOccupied).length}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600">Available</p>
        <p className="text-3xl font-bold text-green-500">
          {parkingLayout.filter((s) => !s.isOccupied).length}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600">Total Revenue</p>
        <p className="text-3xl font-bold text-blue-600">
          ${totalRevenue.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default DashboardStats;
