"use client";

import { useEffect, useState, useRef } from "react";
import io, { Socket } from "socket.io-client";

export default function ChatPage() {
  const socketRef = useRef<Socket | null>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/socket");

    const socket = io({
      path: "/api/socket",
    });

    socketRef.current = socket; // ✅ Referansı kaydet

    socket.on("receive-message", (msg: string) => {
      console.log("receive-message geldi:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!socketRef.current) {
      console.error("Socket henüz hazır değil!");
      return;
    }

    if (input.trim()) {
      socketRef.current.emit("send-message", input);
      setInput("");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">💬 Basit Socket.IO Chat</h1>
      <div className="border p-4 mb-4 h-60 overflow-y-scroll">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Mesaj yaz..."
        className="border px-2 py-1 mr-2"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Gönder
      </button>
    </div>
  );
}
