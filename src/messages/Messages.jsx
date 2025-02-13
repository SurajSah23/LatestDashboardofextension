import { useState } from "react";
import { ArrowLeft, Send, MessageCircle, Smile } from "lucide-react";
import Picker from "emoji-picker-react";

function Messages() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Message list ke liye state
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]); // Message list mein add karo
      setMessage(""); // Input field ko clear karo
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden border">
          {/* Header */}
          <div className="bg-black text-white p-3 flex items-center">
            <button className="p-1" onClick={() => setIsOpen(false)}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="ml-3 text-sm font-semibold">Chat Support</div>
          </div>

          {/* Chat Body */}
          <div className="h-52 p-3 text-sm text-gray-600 overflow-y-auto">
            {messages.length === 0 ? (
              <p>How can we assist you?</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="bg-gray-200 p-2 rounded-md mb-2">
                  {msg}
                </div>
              ))
            )}
          </div>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute bottom-16 right-2 z-50 bg-white p-2 border rounded-md shadow-md w-64">
              <div className="h-40 overflow-y-auto">
                <Picker onEmojiClick={addEmoji} disableGroupNames={true} />
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="border-t p-2 bg-gray-50 flex items-center">
            <button
              className="p-2"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <Smile className="w-5 h-5 text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-sm px-3 py-2 border rounded-md focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="p-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Open Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Messages;
