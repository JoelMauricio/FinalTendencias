import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ChatsList() {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetchChats();
    // }, []);

    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-[40rem] h-full">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                {chats.map((chat) => (
                    <div key={chat.id} className="flex flex-col items-center justify-center w-full h-full gap-4">
                        <div className="rounded-full h-[3rem] w-[3rem] bg-red-400"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}