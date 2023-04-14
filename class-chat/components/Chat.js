import { supabase } from './../lib/supabaseClient';

export default function Chat() {
    const channel = supabase.channel('messages:*');

    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-[40rem] h-full bg-gray-100">
            <h1 className="text-3xl font-bold">Chat</h1>
        </div>
    )
}