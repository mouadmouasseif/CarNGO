"use client";

import { useState } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";

export default function WhatsappChat() {
  const [open, setOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/212691145520?text=Bonjour%2C%20j'ai%20des%20questions%20concernant%20votre%20site.";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="bg-white text-black rounded-2xl shadow-lg p-4 w-80 relative border border-gray-200">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          >
            <X size={18} />
          </button>

          <div className="flex items-center mb-3">
            <div className="bg-yellow-500 p-2 rounded-full mr-3">
              <MessageCircle className="text-white" />
            </div>
            <p className="text-sm font-medium">
              I checked the website, and I have a few questions to ask
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-yellow-600"
          >
            <span className="flex items-center gap-2">
              <img src="images/chat.png" alt="whatsapp" className="w-6 h-6" />
              Chat With Us
            </span>
            <ChevronRight size={18} />
          </a>

          <p className="text-[10px] text-center mt-3 text-gray-500">
            ⚡ Powered by <strong>MM.Service</strong>
          </p>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-500 p-4 rounded-full shadow-xl hover:bg-yellow-600"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="text-white" />
        </button>
      )}
    </div>
  );
}
