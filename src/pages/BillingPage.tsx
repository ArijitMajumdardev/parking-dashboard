import { useState, type FormEvent } from "react";
import ReceiptCard from "../components/ReceiptCard";
import { calculateFee } from "../utils/calculateFee";
import { useParkingContext } from "../context/ParkingContext";

const BillingPage = () => {
  const [billingRegNumber, setBillingRegNumber] = useState<string>("");
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [billingError, setBillingError] = useState<string>("");

  const { parkingLayout, setParkingLayout, setTotalRevenue } =
    useParkingContext();

  const handleGenerateReceipt = (e: FormEvent) => {
    e.preventDefault();
    setReceipt(null);
    setBillingError("");
    const occupiedSlot = parkingLayout.find(
      (slot) =>
        slot.isOccupied &&
        slot.carRegistration === billingRegNumber.toUpperCase()
    );

    if (occupiedSlot && occupiedSlot.entryTime) {
      const exitTime = Date.now();
      const totalAmount = calculateFee(occupiedSlot.entryTime, exitTime);
      const durationInSeconds = Math.floor(
        (exitTime - occupiedSlot.entryTime) / 1000
      );
      const initialFee = 5;
      const additionalTime =
        durationInSeconds > 30 ? durationInSeconds - 30 : 0;
      const additionalIntervals = Math.ceil(additionalTime / 10);
      const additionalFee = additionalIntervals;

      setReceipt({
        slotId: occupiedSlot.id,
        registrationNumber: occupiedSlot.carRegistration!,
        entryTime: occupiedSlot.entryTime,
        exitTime,
        duration: durationInSeconds,
        initialFee,
        additionalFee,
        totalAmount,
      });
    } else {
      setBillingError("Car not found or not currently parked.");
    }
  };

  const handleCloseParking = () => {
    if (receipt) {
      const newLayout = parkingLayout.map((slot) =>
        slot.id === receipt.slotId
          ? {
              ...slot,
              isOccupied: false,
              carRegistration: undefined,
              entryTime: undefined,
            }
          : slot
      );
      setParkingLayout(newLayout);
      setTotalRevenue((prevRevenue) => prevRevenue + receipt.totalAmount);
      setReceipt(null);
      setBillingRegNumber("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start gap-6 p-8 bg-gray-100 min-h-screen font-inter">
      <div className="w-full max-w-2xl  rounded-lg shadow-md p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Generate Receipt
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Car Registration Number
          </h3>
          <form onSubmit={handleGenerateReceipt} className="flex space-x-2">
            <input
              type="text"
              value={billingRegNumber}
              onChange={(e) => setBillingRegNumber(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter car registration number"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800"
            >
              Generate
            </button>
          </form>
          {billingError && (
            <p className="mt-2 text-red-500 text-sm">{billingError}</p>
          )}
        </div>
      </div>

      {receipt && (
        <ReceiptCard
          receipt={receipt}
          handleCloseParking={handleCloseParking}
        />
      )}
    </div>
  );
};

export default BillingPage;
