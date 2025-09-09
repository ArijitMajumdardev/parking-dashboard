import React from "react";


interface ReceiptCardProps {
  receipt: Receipt;
  handleCloseParking: () => void;
}

const ReceiptCard: React.FC<ReceiptCardProps> = ({ receipt, handleCloseParking }) => {
  return (
    <div className="mt-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-xl font-bold text-center mb-4">Parking Receipt</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <p><strong>Registration Number:</strong></p>
        <p>{receipt.registrationNumber}</p>
        <p><strong>Parking Slot:</strong></p>
        <p>{receipt.slotId}</p>
        <p><strong>Entry Time:</strong></p>
        <p>{new Date(receipt.entryTime).toLocaleString()}</p>
        <p><strong>Exit Time:</strong></p>
        <p>{new Date(receipt.exitTime).toLocaleString()}</p>
        <p><strong>Duration:</strong></p>
        <p>{(receipt.duration / 60).toFixed(2)} minutes</p>
      </div>
      <div className="mt-4 border-t border-gray-300 pt-4">
        <p className="flex justify-between">
          <span>Initial 30 seconds:</span>
          <span>${receipt.initialFee.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Additional time:</span>
          <span>${receipt.additionalFee.toFixed(2)}</span>
        </p>
        <p className="flex justify-between font-bold text-lg mt-2">
          <span>Total Amount Due:</span>
          <span>${receipt.totalAmount.toFixed(2)}</span>
        </p>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={handleCloseParking}
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Close Parking
        </button>
      </div>
    </div>
  );
};

export default ReceiptCard;
