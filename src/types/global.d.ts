type Slot = {
  id: string;          
  occupied: boolean;
  regNumber?: string;
  entryTime?: string;  
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

interface AssignCarModalProps {
  selectedSlot: ParkingSlot;
  carRegistration: string;
  setCarRegistration: (reg: string) => void;
  handleAssignCar: (e: FormEvent) => void;
    handleCloseModal: () => void;
    error:boolean
}

interface ParkingSlotCardProps {
  slot: ParkingSlot;
  onClick: (slot: ParkingSlot) => void;
}