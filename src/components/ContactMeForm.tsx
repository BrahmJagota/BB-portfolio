import { useState } from "react";
import { ConciergeBell } from "lucide-react";

const ContactMeForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // You can add your email sending logic here (emailjs, backend API, etc.)
      setIsSubmitted(true);
      // Optional: Play bell sound
      const audio = new Audio('/bell-sound.mp3'); // make sure to have a bell sound file
      audio.play();
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center relative px-4">
        {/* Hector's silhouette background */}
        <div className="absolute inset-0 opacity-5 bg-[url('/hector-silhouette.png')] bg-center bg-no-repeat bg-contain"></div>
  
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md z-10">
          {isSubmitted ? (
            <div className="text-center text-white space-y-4">
              <ConciergeBell size={40} className="mx-auto text-[#FFD700]" />
              <h2 className="text-2xl font-bold">Message Sent!</h2>
              <p className="text-gray-400">The bell has been rung. Wait for the response...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <ConciergeBell size={40} className="mx-auto text-[#FFD700] animate-pulse" />
                <h2 className="text-2xl font-bold text-white mt-2">Ring to Connect</h2>
              </div>
  
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#1F1F1F] text-white placeholder-[#CCCCCC] border border-transparent focus:border-[#FFD700] rounded-lg p-3 w-full transition-all"
              />
  
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#1F1F1F] text-white placeholder-[#CCCCCC] border border-transparent focus:border-[#FFD700] rounded-lg p-3 w-full transition-all"
              />
  
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="bg-[#1F1F1F] text-white placeholder-[#CCCCCC] border border-transparent focus:border-[#FFD700] rounded-lg p-3 w-full transition-all resize-none"
              />
  
              <button
                type="submit"
                className="bg-[#DA0037] hover:bg-[#FF5733] text-white font-semibold rounded-lg p-3 w-full mt-4 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <ConciergeBell className="text-[#FFD700]" />
                Send the Signal
              </button>
            </form>
          )}
        </div>
      </div>
    );
  };

export default ContactMeForm;
