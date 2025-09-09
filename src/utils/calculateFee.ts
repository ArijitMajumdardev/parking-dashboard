export const calculateFee = (entryTime: number, exitTime: number): number => {
  const durationInSeconds = Math.floor((exitTime - entryTime) / 1000);
  let totalFee = 0;

  if (durationInSeconds > 0) {
    totalFee += 5;
  }

  if (durationInSeconds > 30) {
    const additionalTime = durationInSeconds - 30;
    const additionalIntervals = Math.ceil(additionalTime / 10);
    totalFee += additionalIntervals;
  }

  return totalFee;
};
