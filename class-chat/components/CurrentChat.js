import { useState, useEffect } from 'react';

export default function CurrentChat() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return (<>
        <div className='w-full h-full flex flex-col-reverse'>
            {messages.map((message) => () => { })}
        </div>
    </>)
}