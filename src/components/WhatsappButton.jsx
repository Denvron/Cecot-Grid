// import React from "react";
// import { FaWhatsapp } from "react-icons/fa6";

// const WhatsappButton = () => {
//   const handleWhatsAppClick = () => {
//     const businessWhatsApp = "94776462433";
//     const welcomeMessage = "Hello! Welcome to our service. How can we help you today?";
//     const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(welcomeMessage)}`;

//     window.open(whatsappUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="fixed bottom-5 right-5">
//       <button
//         onClick={handleWhatsAppClick}
//         className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
//       >
//         <FaWhatsapp />
//       </button>
//     </div>
//   );
// };

// export default WhatsappButton;

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = ({ formData = {}, phoneNumber = '94776462433' }) => {
  const {
    name = '',
    contact = '',
    whatsapp = '',
    pickup = '',
    dropoff = '',
    date = '',
    time = '',
    passengers = '',
    message = '',
  } = formData;

  const welcomeNote =
    'Hello! I need to get some information on your service';
  const text =
    `${welcomeNote}\n\n` +
    // `*New Booking Request*%0A%0A` +
    // `*Name:* ${name}%0A` +
    // `*Contact:* ${contact}%0A` +
    // `*WhatsApp/Viber:* ${whatsapp}%0A` +
    // `*Pickup:* ${pickup}%0A` +
    // `*Drop-off:* ${dropoff}%0A` +
    // `*Date:* ${date}%0A` +
    // `*Time:* ${time}%0A` +
    // `*Passengers:* ${passengers}%0A` +
    // `*Message:* ${message || 'N/A'}%0A%0A` +
    `Please contact me back soon.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  const handleClick = (e) => {
    const form = e.currentTarget.closest('form');
    if (form && !form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-4 rounded-full text-sm font-medium transition-colors duration-200 shadow-lg cursor-pointer"
      data-testid="whatsapp-link"
      aria-label="Open WhatsApp chat"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;

