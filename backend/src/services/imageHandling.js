import supabase from '../config/supabaseClient.js'

async function HandleImages([]) {
    await supabase.storage
    .from("rethread")
    .upload()
}

export default HandleImages