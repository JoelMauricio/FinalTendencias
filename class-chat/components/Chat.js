import { supabase } from './../lib/supabaseClient';
import ChatsList from './ChatsList';

export default function Chat() {
    const channel = supabase.channel('messages:*');

    return (
        <div className=" rounded-md flex items-center justify-center min-w-full min-h-[40rem] h-full bg-slate-600">
            <div className='w-1/4 min-h-[40rem] p-4 '>
                <ChatsList />

            </div>
            <div className=" rounded-md flex items-center justify-center w-3/4 min-h-full gap-4  bg-gray-100">
                <h1 className="text-3xl font-bold">Chat</h1>
            </div>
        </div>
    )
}