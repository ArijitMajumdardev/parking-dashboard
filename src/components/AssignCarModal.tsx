import React from "react";

const AssignCarModal: React.FC<AssignCarModalProps> = ({
  selectedSlot,
  carRegistration,
  setCarRegistration,
  handleAssignCar,
  handleCloseModal,
  error,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/20 bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-xl font-bold mb-4">Add Car Registration</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Parking Slot
          </label>
          <input
            type="text"
            value={selectedSlot.id}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 p-2"
          />
        </div>
        <form onSubmit={handleAssignCar}>
          <div className="mb-4">
            <label
              htmlFor="regNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Car Registration Number
            </label>
            <input
              id="regNumber"
              type="text"
              value={carRegistration}
              onChange={(e) => setCarRegistration(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter registration number"
              required
            />
            {error ? (
              <div className="text-left text-red-500 ">
                <p>Enter a differ car registration number</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Assign Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignCarModal;
