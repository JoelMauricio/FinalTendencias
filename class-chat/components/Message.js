export default function CurrentChat({ message, date }) {

    return (<>
        <div className='flex flex-col '>
            <div className='rounded-lg w-fit max-w-[50%] h-fit flex flex-col-reverse p-2 bg-green-700 text-justify' >
                {message}
            </div>
            <span className="text-[0.8rem]">
                {date}
            </span>
        </div>
    </>)
}