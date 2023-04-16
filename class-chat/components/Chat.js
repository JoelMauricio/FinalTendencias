import { supabase } from './../lib/supabaseClient';
import ChatsList from './ChatsList';
import { useState } from 'react';
import Message from './Message';

export default function Chat() {
    const channel = supabase.channel('messages:*');
    const [newMessage, setNewMessage] = useState([]);
    const [messages, setMessages] = useState([{ message: 'Hola', date: '10:12', user: 'pedro' }, { message: 'Hola', date: '10:12', user: 'yo' }]);
    const user = 'yo'

    function handleMessage() {
        if (newMessage === '') {
            alert('no puedes enviar un mensaje vacio')
            return
        };
        setMessages([...messages, { message: newMessage, date: '10:12', user: 'yo' }])
        console.log(newMessage);
    }

    return (
        <div className=" rounded-md flex justify-center min-w-full min-h-[40rem] h-full bg-slate-600">
            <div className='w-1/4 h-full py-4 overflow-hidden overflow-y-auto'>
                <ChatsList />
            </div>
            <div className=" rounded-md flex flex-col justify-center w-3/4 min-h-full bg-gray-800">
                <div className='w-full h-full flex flex-col pt-4 px-4 overflow-hidden overflow-y-auto gap-1'>
                    {messages.map((message, index) => <Message key={index} message={message.message} date={message.date} isUser={message.user == user} user={message.user} />)}
                </div>
                <div className='w-full flex p-4  '>
                    <input
                        type='text'
                        className='appearance-none  border-gray-950 leading-tight focus:outline-none
                     focus:bg-gray-300 focus:shadow-outline rounded-l-md py-2 px-4 max-h-[45px] w-full text-black border-l-2 border-y-2'
                        placeholder='Ingrese su mensaje...'
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className=' border-2 border-gray-950 max-h-[45px] max-w-[45px] w-[4rem] bg-slate-600 rounded-r-md p-2'
                        onClick={handleMessage}
                    >
                        <span className='h-full w-fullmax-w-[45px]  fill-white stroke-white'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"></path> </g></svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}