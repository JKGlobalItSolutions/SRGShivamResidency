// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Smartphone } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import QRCode from "react-qr-code";

// interface PaymentSectionProps {
//   paymentMethod: string;
//   onPaymentMethodChange: (method: string) => void;
//   onMakePayment: () => void;
//   isProcessing: boolean;
//   total: number;
// }

// export const PaymentSection: React.FC<PaymentSectionProps> = ({
//   paymentMethod,
//   onPaymentMethodChange,
//   onMakePayment,
//   isProcessing,
//   total,
// }) => {
//   const [showQr, setShowQr] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // UPI ID for SRG SHIVAM Residency
//   const upiId = "srgshivamresidency@oksbi";

//   const paymentMethods = [
//     {
//       id: "upi",
//       name: "UPI",
//       icon: Smartphone,
//       description: "Pay using UPI apps",
//     },
//   ];

//   const upiLink = `upi://pay?pa=${upiId}&pn=SRG SHIVAM Residency&am=${total}&cu=INR`;

//   useEffect(() => {
//     if (typeof navigator !== "undefined") {
//       setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
//     }
//   }, []);

//   const handlePaymentClick = (methodId: string) => {
//     onPaymentMethodChange(methodId);

//     if (isMobile) {
//       window.location.href = upiLink;
//     } else {
//       setShowQr(true);
//     }
//   };

//   return (
//     <Card className="mb-6">
//       <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
//         <CardTitle className="text-xl font-bold text-primary">Make Payment</CardTitle>
//       </CardHeader>

//       <CardContent className="p-6">
//         <div className="mb-6">
//           <Label className="text-base font-semibold mb-4 block">Select Payment Method</Label>

//           {paymentMethods.map((method) => {
//             const Icon = method.icon;
//             return (
//               <div
//                 key={method.id}
//                 className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
//                 onClick={() => handlePaymentClick(method.id)}
//               >
//                 <Icon className="w-5 h-5 text-muted-foreground" />
//                 <div className="flex-1">
//                   <span className="font-medium">{method.name}</span>
//                   <p className="text-sm text-muted-foreground">{method.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Terms and Conditions */}
//         <div className="space-y-4 mb-6">
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="terms"
//               className="rounded border-gray-300"
//               required
//             />
//             <Label htmlFor="terms" className="text-sm cursor-pointer">
//               I have read and agree to the{" "}
//               <span className="text-primary underline cursor-pointer">
//                 Reservation Policy and Terms & Conditions
//               </span>
//             </Label>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg mb-6">
//           <div className="flex justify-between items-center">
//             <span className="text-lg font-semibold">Total Amount</span>
//             <span className="text-2xl font-bold text-primary">
//               ₹{total.toLocaleString()}
//             </span>
//           </div>
//         </div>

//         <p className="text-xs text-muted-foreground mt-4 text-center">
//           Your payment information is safe and encrypted
//         </p>

//         {/* QR Code Dialog */}
//         <Dialog open={showQr} onOpenChange={setShowQr}>
//           <DialogContent className="max-w-sm mx-auto">
//             <DialogHeader>
//               <DialogTitle>Scan to Pay (UPI)</DialogTitle>
//             </DialogHeader>
//             <div className="flex flex-col items-center gap-4">
//               <QRCode value={upiLink} size={200} />
//               <p className="text-center text-muted-foreground text-sm">
//                 Open your UPI app and scan this QR code to pay.
//               </p>

//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-semibold">{upiId}</span>
//                 <Button
//                   size="sm"
//                   onClick={() => {
//                     navigator.clipboard.writeText(upiId);
//                     alert("UPI ID copied!");
//                   }}
//                 >
//                   Copy UPI ID
//                 </Button>
//               </div>

//               <p className="text-center text-primary text-sm font-semibold">
//                 After payment, please upload your payment proof image in the Guest Information section below.
//               </p>

//               <Button variant="outline" onClick={() => setShowQr(false)}>
//                 Close
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </CardContent>
//     </Card>
//   );
// };
