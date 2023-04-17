import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Avatar from "boring-avatars";

export default function ChatsList() {
  const [chats, setChats] = useState([
    { chat_name: "test", member_count: 1 },
    { chat_name: "pruebas", member_count: 2 },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col min-w-full min-h-[40rem] h-full">
      <div className="flex flex-col w-full h-full">
        {chats.map((chat, index) => (
          <button key={index}>
            <div className="flex items-center w-full h-full gap-4 hover:bg-slate-500 font-semibold p-2  ">
              <Avatar className="h-[4rem] w-[4rem]" name={chat.chat_name} />
              <span>{chat.chat_name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
