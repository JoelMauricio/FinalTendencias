import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  return (
    <div className="">
      <form className="rounded-md flex flex-col items-center justify-center min-h-[500px] min-w-[450px] h-full w-full gap-4 bg-gray-700 px-8 py-10">
        <input type="text" placeholder="Email" onChange={(e) => {}} />
        <input type="password" placeholder="Password" onChange={(e) => {}} />
        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
}
