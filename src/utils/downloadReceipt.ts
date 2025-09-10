import jsPDF from "jspdf";

const downloadReceipt = (receipt: Receipt) => {
  const doc = new jsPDF();
  const leftMargin = 20;
  const contentWidth = doc.internal.pageSize.getWidth() - 2 * leftMargin;
  let yPosition = 20;

  // Title: "Parking Receipt"
  doc.setFontSize(18);
  doc.text("Parking Receipt", doc.internal.pageSize.getWidth() / 2, yPosition, {
    align: "center",
  });
  yPosition += 20;

  // Horizontal Line
  doc.setDrawColor(200, 200, 200);
  doc.line(leftMargin, yPosition, leftMargin + contentWidth, yPosition);
  yPosition += 10;

  doc.setFontSize(12);

  // Registration Number
  doc.setFont("helvetica", "bold");
  doc.text("Registration Number:", leftMargin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(receipt.registrationNumber, leftMargin + contentWidth, yPosition, {
    align: "right",
  });
  yPosition += 8;

  // Parking Slot
  doc.setFont("helvetica", "bold");
  doc.text("Parking Slot:", leftMargin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(receipt.slotId, leftMargin + contentWidth, yPosition, {
    align: "right",
  });
  yPosition += 8;

  // Entry Time
  doc.setFont("helvetica", "bold");
  doc.text("Entry Time:", leftMargin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(
    new Date(receipt.entryTime).toLocaleString(),
    leftMargin + contentWidth,
    yPosition,
    { align: "right" }
  );
  yPosition += 8;

  // Exit Time
  doc.setFont("helvetica", "bold");
  doc.text("Exit Time:", leftMargin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(
    new Date(receipt.exitTime).toLocaleString(),
    leftMargin + contentWidth,
    yPosition,
    { align: "right" }
  );
  yPosition += 8;

  // Duration
  doc.setFont("helvetica", "bold");
  doc.text("Duration:", leftMargin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(
    `${(receipt.duration / 60).toFixed(2)} minutes`,
    leftMargin + contentWidth,
    yPosition,
    { align: "right" }
  );
  yPosition += 15;

  // Fee Details
  doc.setDrawColor(200, 200, 200);
  doc.line(leftMargin, yPosition, leftMargin + contentWidth, yPosition);
  yPosition += 10;

  // Initial Fee
  doc.text("Initial 30 seconds:", leftMargin, yPosition);
  doc.text(
    `$${receipt.initialFee.toFixed(2)}`,
    leftMargin + contentWidth,
    yPosition,
    { align: "right" }
  );
  yPosition += 8;

  // Additional Fee
  doc.text("Additional time:", leftMargin, yPosition);
  doc.text(
    `$${receipt.additionalFee.toFixed(2)}`,
    leftMargin + contentWidth,
    yPosition,
    { align: "right" }
  );
  yPosition += 10;

  // Total Amount Due
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Total Amount Due:", leftMargin, yPosition);
  doc.text(
    `$${receipt.totalAmount.toFixed(2)}`,
    leftMargin + contentWidth,
    yPosition,
    { align: "right" }
  );
  yPosition += 15;

  // Horizontal Line
  doc.setDrawColor(200, 200, 200);
  doc.line(leftMargin, yPosition, leftMargin + contentWidth, yPosition);
  yPosition += 15;

  // Footer
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Thank you for parking with us!",
    doc.internal.pageSize.getWidth() / 2,
    yPosition,
    { align: "center" }
  );
  yPosition += 8;
  doc.text(
    `Receipt generated on ${new Date().toDateString()}`,
    doc.internal.pageSize.getWidth() / 2,
    yPosition,
    { align: "center" }
  );

  doc.save(`receipt_${receipt.slotId}.pdf`);
};

export default downloadReceipt;
