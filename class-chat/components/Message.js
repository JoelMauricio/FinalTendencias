import Avatar from "boring-avatars"

export default function CurrentChat({ message, date, isUser = true, user }) {

    return (<>
        <div className={`grid  ${isUser ? 'justify-items-end' : ''}`}>
            <div className={`flex gap-2 max-w-[50%] ${isUser ? 'flex-row-reverse' : ''}`}>
                <Avatar variant="beam" className='h-[4rem] w-[4rem]' name={user} />
                <div className="grid grid-cols-1">
                    <div className={`rounded-lg w-fit h-fit p-2 text-[1.05rem] ${isUser ? 'bg-green-700 text-right' : 'bg-indigo-600 text-left'}`}>
                        {message}
                    </div>
                    <span className={`text-[0.75rem] ${isUser ? 'justify-self-end' : ''}`}>
                        {date}
                    </span>
                </div>
            </div>
        </div>
    </>)
}