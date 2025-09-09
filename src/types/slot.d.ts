type Slot = {
  id: string;          // e.g. "A1"
  occupied: boolean;
  regNumber?: string;
  entryTime?: string;  // ISO string
};

 interface ParkingSlot {
  id: string;
  isOccupied: boolean;
  carRegistration?: string;
  entryTime?: number;
}

 interface Receipt {
  slotId: string;
  registrationNumber: string;
  entryTime: number;
  exitTime: number;
  duration: number;
  initialFee: number;
  additionalFee: number;
  totalAmount: number;
}

interface ParkingContextType {
  parkingLayout: ParkingSlot[];
  setParkingLayout: React.Dispatch<React.SetStateAction<ParkingSlot[]>>;
  totalRevenue: number;
  setTotalRevenue: React.Dispatch<React.SetStateAction<number>>;
}