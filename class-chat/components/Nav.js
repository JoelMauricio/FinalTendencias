import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Login from './login'
import Popup from 'reactjs-popup';

export default function Nav() {
    const [loggingIn, setLoggingIn] = useState(false)

    async function handleClick() {
        setLoggingIn(true)

        // console.log(data)

        const { data, error } = await supabase
            .from('user')
            .select()
        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
    }

    return (<nav className="flex w-full h-fit justify-between px-8">
        <h1 className="text-[1.5rem] font-semibold">ClassChat</h1>
        <div className="flex gap-4">
            <Popup trigger={<button className="text-[1.25rem]">Iniciar Sesion</button>} position="left top center" >
                <Login className='modal' />
            </Popup>
        </div>
    </nav>)
}