// import { supabase } from "../lib/supabaseClient";

// async function fetchMessages() {
//     if (messages.length === 0) {
//         const { data, error } = await supabase.from("message").select("*");
//         if (error) {
//             console.log(error);
//         } else {
//             return data;
//             // console.log(data);
//         }
//     }
// }
const sum = (a, b) => a + b;
module.exports = { sum };