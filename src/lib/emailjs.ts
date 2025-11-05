import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface BookingEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roomType: string;
  roomTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  nights: number;
  roomRate: number;
  taxes: number;
  total: number;
  specialRequests: string;
  paymentMethod: string;
}

export const sendBookingEmail = async (bookingData: BookingEmailData): Promise<void> => {
  try {
    const templateParams = {
      to_name: 'SRG SHIVAM Residency',
      from_name: `${bookingData.firstName} ${bookingData.lastName}`,
      from_email: bookingData.email,
      phone: bookingData.phone,
      room_type: bookingData.roomTitle,
      check_in: bookingData.checkIn,
      check_out: bookingData.checkOut,
      guests: bookingData.guests.toString(),
      rooms: bookingData.rooms.toString(),
      nights: bookingData.nights.toString(),
      room_rate: `₹${bookingData.roomRate}`,
      taxes: `₹${bookingData.taxes}`,
      total_amount: `₹${bookingData.total}`,
      special_requests: bookingData.specialRequests || 'None',
      payment_method: bookingData.paymentMethod,
      booking_date: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (result.status !== 200) {
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully:', result);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send booking confirmation email');
  }
};

export default emailjs;
