import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitSignUp(e) {
    e.preventDefault();

    // console.log(email, password)
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })
    console.log(data.user?.id)
    if (error) {
      alert(error["message"]);
    }
    if (data.length > 0) {
      alert("Revise su correo para completar su registro")
      const { data2, error2 } = await supabase
        .from('user')
        .insert([
          { username: email.split('@')[0], uuid: data.user?.id },
        ])
      if (error2) {
        alert(error2["message"]);
      }
      if (data2.length > 0) {
        alert("Usuario registrado correctamente")
      }
    }
  }

  async function handleSubmitSignIn(e) {
    e.preventDefault();

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (error) {
      alert(error["message"]);
    }
  }

  return (
    <div className="rounded-md flex flex-col items-center justify-center h-full w-full gap-4 bg-gray-600 px-8 py-10 font-semibold">
      <h2 className="w-full text-[1.6rem] text-center font-bold">Accede para poder participar en el Chat</h2>
      <form className="flex flex-col items-center justify-center h-1/2 w-full gap-4 bg-slate-300 rounded-md">
        <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} className="bg-slate-200 max-w-[15rem] w-full min-h-[45px] rounded-md hover:bg-slate-300 px-4" />
        <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} className="bg-slate-200 max-w-[15rem] w-full min-h-[45px] rounded-md hover:bg-slate-300 px-4" />
        <input type="submit" className="bg-slate-800 max-w-[15rem] w-full min-h-[45px] rounded-md hover:bg-slate-700" onClick={handleSubmitSignIn} value="Iniciar Sesión" />
      </form>
      <div className="w-full bg-slate-800 h-[4px]" />
      <form className="flex flex-col items-center justify-center h-1/2 w-full gap-4 bg-slate-300 rounded-md">
        <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} className="bg-slate-200 max-w-[15rem] w-full min-h-[45px] rounded-md hover:bg-slate-300 px-4" />
        <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} className="bg-slate-200 max-w-[15rem] w-full min-h-[45px] rounded-md hover:bg-slate-300 px-4" />
        <input type="submit" className="bg-slate-800 max-w-[15rem] w-full min-h-[45px] rounded-md hover:bg-slate-700" onClick={handleSubmitSignUp} value="Registrate" />
      </form>
    </div>
  );
}
