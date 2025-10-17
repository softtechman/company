import { useState } from "react";
import { X } from "lucide-react";

export const ChatWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent w-fit z-20 left-2 right-0 bottom-2">
      <div className="relative box-border caret-transparent">
        <div className="box-border caret-transparent">
          <img
            // alt="offer-gif"
            src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/61.gif"
            className="text-transparent aspect-[auto_300_/_200] box-border max-w-full pointer-events-none w-[300px]"
          />
        </div>
        <div className="absolute items-center bg-black box-border caret-transparent flex justify-center w-fit z-40 rounded-full right-0 top-0">
          <button
            onClick={() => setIsVisible(false)}
            className="text-white bg-transparent caret-transparent block text-center p-1 rounded-full hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
