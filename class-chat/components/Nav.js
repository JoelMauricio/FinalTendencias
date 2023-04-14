export default function Nav() {
    return (<nav className="flex w-full justify-between px-4">
        <h1 className="text-[1.5rem] font-semibold">ClassChat</h1>
        <div className="flex gap-4">
            <button className="text-[1.25rem]">Chats</button>
            <button className="text-[1.25rem]">Iniciar Sesion</button>
        </div>
    </nav>)
}