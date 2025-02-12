import { useState } from "react";

export const Notifications = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Agar component hide ho gaya toh kuch return mat karo

  return (
    <div className="absolute z-10 w-[500px] h-[700px] lg:-translate-y-28 left-96 ml-20 lg:translate-x-96 p-4">
      {/* Close button */}
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute top-2 right-2 text-white text-xl font-bold"
      >
        ✖
      </button>

      <h1 className="text-3xl">Notification</h1>
    </div>
  );
};

export default Notifications;
