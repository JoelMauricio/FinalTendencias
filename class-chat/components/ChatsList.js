import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ChatsList() {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchChats();
    }, []);

    async function fetchChats() {
        try {
            setLoading(true);
            const user = supabase.auth.user();
            const { data: chats, error } = await supabase
                .from('chats')
                .select(`
                    id,
                    name,
                    users (
                        id,
                        email,
                        name
                    )
                `)
                .eq('users.id', user.id);

            if (error) throw error;
            setChats(chats);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-[40rem] h-full bg-gray-100">
            <h1 className="text-3xl font-bold">Chats</h1>
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                {chats.map((chat) => (
                    <div key={chat.id} className="flex flex-col items-center justify-center w-full h-full gap-4">
                        <h1 className="text-2xl font-bold">{chat.name}</h1>
                        <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                            {chat.users.map((user) => (
                                <div key={user.id} className="flex flex-col items-center justify-center w-full h-full gap-4">
                                    <h1 className="text-xl font-bold">{user.name}</h1>
                                    <h1 className="text-lg font-bold">{user.email}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}