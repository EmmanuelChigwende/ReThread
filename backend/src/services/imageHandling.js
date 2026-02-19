import supabase from '../config/supabaseClient.js'

async function HandleImages(file) {
    await supabase.storage
    .from("rethread")
    .upload()
}

export default HandleImages