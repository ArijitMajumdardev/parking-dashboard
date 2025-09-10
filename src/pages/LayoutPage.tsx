import { useState } from "react";
import DashboardStats from "../components/DashboardStats";
import ParkingLayout from "../components/ParkingLayout";
import AssignCarModal from "../components/AssignCarModal";
import type { FormEvent } from "react";
import { useParkingContext } from "../context/ParkingContext";

const LayoutPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<ParkingSlot | null>(null);
  const [carRegistration, setCarRegistration] = useState<string>("");
  const [error, setError] = useState(false);
  const { parkingLayout, setParkingLayout, totalRevenue } = useParkingContext();

  const handleOpenModal = (slot: ParkingSlot) => {
    console.log(parkingLayout);
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setError(false);
    setShowModal(false);
    setSelectedSlot(null);
    setCarRegistration("");
  };

  const checkForSameCarId = () => {
    return parkingLayout.some(
      (item) =>
        item.isOccupied &&
        item.carRegistration === carRegistration.toUpperCase()
    );
  };

  const handleAssignCar = (e: FormEvent) => {
    e.preventDefault();

    if (checkForSameCarId()) {
      setError(true);
      return;
    }
    if (selectedSlot && carRegistration) {
      const newLayout = parkingLayout.map((slot) =>
        slot.id === selectedSlot.id
          ? {
              ...slot,
              isOccupied: true,
              carRegistration: carRegistration.toUpperCase(),
              entryTime: Date.now(),
            }
          : slot
      );
      setParkingLayout(newLayout);
      handleCloseModal();
    }
  };

  return (
    <div className="container  mx-auto ">
      <DashboardStats
        parkingLayout={parkingLayout}
        totalRevenue={totalRevenue}
      />
      <div className="  flex justify-center items-center">
        <ParkingLayout
          parkingLayout={parkingLayout}
          handleOpenModal={handleOpenModal}
        />
      </div>
      {showModal && selectedSlot && (
        <AssignCarModal
          selectedSlot={selectedSlot}
          carRegistration={carRegistration}
          setCarRegistration={setCarRegistration}
          handleAssignCar={handleAssignCar}
          handleCloseModal={handleCloseModal}
          error={error}
        />
      )}
    </div>
  );
};

export default LayoutPage;
