"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

type Notification = {
  message: string;
  type: "success" | "error";
};

export function LampDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState<Notification | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    try {
      await emailjs.send('service_nfxx7nc', 'template_zfonytk', formData, 'r6ocoKLtKYrV5SFfP');
      setNotification({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setNotification({ message: 'Failed to send the message, please try again later.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  // Automatically hide the notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <BackgroundBeamsWithCollision>
      {/* Notification Pop-up */}
      {notification && (
        <div
          role="alert"
          aria-live="assertive"
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded shadow-lg transition-transform transform ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          } animate-slide-in`}
        >
          <span>{notification.message}</span>
        </div>
      )}

      <div className="flex flex-col items-center mt-24 mb-40 px-4 sm:px-6 lg:px-8 relative z-20">
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-2xl sm:text-3xl md:text-7xl font-medium tracking-tight text-transparent">
          Contact Me
        </h1>

        {/* Updated "Get in touch" Heading */}
        <p className="text-gray-300 sm:text-2xl md:text-3xl lg:text-7xl font-bold relative z-30 
                      bg-gradient-to-b from-neutral-200 to-neutral-500 
                      bg-clip-text py-4 text-center mt-4 sm:mt-8 md:mt-12 
                      md:text-transparent md:bg-clip-text">
          Get in touch
        </p>

        <div className="mt-8 sm:mt-12 w-full max-w-lg bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md mx-auto z-30 relative">
          <form className="space-y-4 sm:space-y-6" onSubmit={sendEmail}>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>

        <div className="pb-32 sm:pb-40 lg:pb-48"></div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}