import  { useCallback, useState } from "react";
import DashboardStats from "../components/DashboardStats";
import ParkingLayout from "../components/ParkingLayout";
import AssignCarModal from "../components/AssignCarModal";
import type { FormEvent } from "react";
import { useParkingContext } from "../context/ParkingContext";

const LayoutPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<ParkingSlot | null>(null);
  const [carRegistration, setCarRegistration] = useState<string>("");

  const { parkingLayout, setParkingLayout, totalRevenue } = useParkingContext();

  const handleOpenModal = useCallback((slot: ParkingSlot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setSelectedSlot(null);
    setCarRegistration("");
  }, []);

  const handleAssignCar = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
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
    },
    [selectedSlot, carRegistration, parkingLayout, handleCloseModal]
  );

  return (
    <>
      <DashboardStats
        parkingLayout={parkingLayout}
        totalRevenue={totalRevenue}
      />
      <ParkingLayout
        parkingLayout={parkingLayout}
        handleOpenModal={handleOpenModal}
      />
      {showModal && selectedSlot && (
        <AssignCarModal
          selectedSlot={selectedSlot}
          carRegistration={carRegistration}
          setCarRegistration={setCarRegistration}
          handleAssignCar={handleAssignCar}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default LayoutPage;
