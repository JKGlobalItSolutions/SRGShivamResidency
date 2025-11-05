import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { rooms } from "../data/hotel-data";
// import { PaymentSection } from "./PaymentSection";
import { sendBookingEmail, BookingEmailData } from "../lib/emailjs";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    specialRequests: "",
    screenshot: null,
  });

  const [bookingSummary, setBookingSummary] = useState({
    nights: 0,
    roomRate: 0,
    taxes: 0,
    total: 0,
  });

  // Set minimum check-in date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    if (!formData.checkIn) {
      setFormData((prev) => ({ ...prev, checkIn: today }));
    }
  }, []);

  // Calculate booking summary
  useEffect(() => {
    if (formData.checkIn && formData.checkOut && formData.roomType) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      const room = rooms.find((r) => r.id === formData.roomType);
      if (room && nights > 0) {
        const roomRate = room.price * nights * formData.rooms;
        const taxes = Math.round(roomRate * 0.15); // 15% tax
        const total = roomRate + taxes;

        setBookingSummary({ nights, roomRate, taxes, total });
      }
    }
  }, [formData.checkIn, formData.checkOut, formData.roomType, formData.rooms]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.roomType) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare email data
      const selectedRoom = rooms.find((r) => r.id === formData.roomType);
      if (!selectedRoom) {
        toast.error("Please select a valid room type");
        setIsSubmitting(false);
        return;
      }

      const emailData: BookingEmailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        roomType: formData.roomType,
        roomTitle: selectedRoom.title,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        rooms: formData.rooms,
        nights: bookingSummary.nights,
        roomRate: bookingSummary.roomRate,
        taxes: bookingSummary.taxes,
        total: bookingSummary.total,
        specialRequests: formData.specialRequests,
        paymentMethod: paymentMethod,
      };

      // Send email using EmailJS
      await sendBookingEmail(emailData);

      toast.success("Booking request submitted successfully!", {
        description: "Our team will contact you shortly to confirm your reservation.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        roomType: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        rooms: 1,
        specialRequests: "",
        screenshot: null,
      });

      setBookingSummary({
        nights: 0,
        roomRate: 0,
        taxes: 0,
        total: 0,
      });
    } catch (error) {
      console.error("Booking submission error:", error);
      toast.error("Failed to submit booking. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, screenshot: file }));
    }
  };

  const selectedRoom = rooms.find((r) => r.id === formData.roomType);

  return (
    <section className="py-12 md:py-20 px-4 bg-muted/5 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Complete Your Booking
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Fill in your details to reserve your perfect stay at SRG SHIVAM Residency
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-center">
          {/* Booking Form */}
          <div className="w-full lg:flex-1 lg:max-w-2xl">
            <Card className="shadow-lg border border-border mx-auto">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Guest Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First + Last Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bookingFirstName">First Name *</Label>
                      <Input
                        id="bookingFirstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="bookingLastName">Last Name *</Label>
                      <Input
                        id="bookingLastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="bookingEmail">Email Address *</Label>
                    <Input
                      id="bookingEmail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="bookingPhone">Phone Number *</Label>
                    <Input
                      id="bookingPhone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                    />
                  </div>

                  <hr className="border-border" />

                  <h3 className="text-xl font-semibold">
                    Reservation Details
                  </h3>

                  {/* Room Selection */}
                  <div>
                    <Label htmlFor="selectedRoom">Selected Room *</Label>
                    <Select
                      value={formData.roomType}
                      onValueChange={(value) =>
                        handleInputChange("roomType", value)
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a room type" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map((room) => (
                          <SelectItem key={room.id} value={room.id}>
                            {room.title} - ₹{room.price}/night
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dates */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkInDate">Check-in Date *</Label>
                      <Input
                        id="checkInDate"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) =>
                          handleInputChange("checkIn", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOutDate">Check-out Date *</Label>
                      <Input
                        id="checkOutDate"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        min={
                          formData.checkIn
                            ? new Date(
                                new Date(formData.checkIn).getTime() + 86400000
                              )
                                .toISOString()
                                .split("T")[0]
                            : undefined
                        }
                        onChange={(e) =>
                          handleInputChange("checkOut", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Guests & Rooms */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="numGuests">Number of Guests *</Label>
                      <Select
                        value={formData.guests.toString()}
                        onValueChange={(value) =>
                          handleInputChange("guests", parseInt(value))
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="numRooms">Number of Rooms</Label>
                      <Select
                        value={formData.rooms.toString()}
                        onValueChange={(value) =>
                          handleInputChange("rooms", parseInt(value))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Room</SelectItem>
                          <SelectItem value="2">2 Rooms</SelectItem>
                          <SelectItem value="3">3 Rooms</SelectItem>
                          <SelectItem value="4">4 Rooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      placeholder="Any special requests or preferences..."
                    />
                  </div>

                  {/* Screenshot Upload */}
                  <div>
                    <Label htmlFor="screenshotUpload">
                      Upload Screenshot (Payment proof)
                    </Label>
                    <Input
                      id="screenshotUpload"
                      name="screenshot"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {formData.screenshot && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Selected: {formData.screenshot.name}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? "Processing..." : "Complete Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary - Mobile First */}
          {formData.roomType && (
            <div className="w-full lg:w-80 mt-6 lg:mt-0">
              <Card className="shadow-lg border border-border sticky top-4 lg:top-24">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-4">
                    Booking Summary
                  </h3>

                  <div className="space-y-3 md:space-y-4">
                    {selectedRoom && (
                      <div className="pb-3 md:pb-4 border-b border-border">
                        <p className="font-medium text-base md:text-lg">
                          {selectedRoom.title}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {selectedRoom.size} • {selectedRoom.maxGuests} guests •{" "}
                          {selectedRoom.view}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2 text-sm md:text-base">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="font-medium">
                          {formData.checkIn
                            ? new Date(formData.checkIn).toLocaleDateString()
                            : "--"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="font-medium">
                          {formData.checkOut
                            ? new Date(formData.checkOut).toLocaleDateString()
                            : "--"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests:</span>
                        <span className="font-medium">{formData.guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Nights:</span>
                        <span className="font-medium">{bookingSummary.nights || "--"}</span>
                      </div>
                    </div>

                    <hr className="border-border" />

                    <div className="space-y-2 text-sm md:text-base">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Room Rate:</span>
                        <span className="font-medium">₹{bookingSummary.roomRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Taxes & Fees:</span>
                        <span className="font-medium">₹{bookingSummary.taxes}</span>
                      </div>
                    </div>

                    <hr className="border-border" />

                    <div className="flex justify-between text-base md:text-lg font-semibold">
                      <span>Total Amount:</span>
                      <span className="text-primary">₹{bookingSummary.total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
