export default function CurrentChat({ message, date, user = true }) {

    return (<>
        <div className={`grid grid-cols-1 ${user ? 'justify-items-end' : ''}`}>
            <div className={`rounded-lg w-fit max-w-[50%] h-fit p-2 ${user ? 'bg-green-700' : 'bg-indigo-600'} text-justify`}>
                {message}
            </div>
            <span className="text-[0.8rem]">
                {date}
            </span>
        </div>
    </>)
}