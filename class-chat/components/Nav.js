import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Login from "./login";
import Popup from "reactjs-popup";
import { addRequestMeta } from "next/dist/server/request-meta";
import { useSession } from "@supabase/auth-helpers-react";

export default function Nav() {
  const session = useSession()

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  }

  return (
    <nav className="flex w-full h-fit justify-between px-8">
      <h1 className="text-[1.5rem] font-semibold">ClassChat</h1>
      <div className="flex gap-4">
        {!session ? (<button className="text-[1.25rem]" onClick={handleLogout}>Salir</button>) : (null)}
      </div>
    </nav>
  );
}
