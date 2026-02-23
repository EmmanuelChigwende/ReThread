import supabase from "../config/supabaseClient.js";

async function HandleImages(file) {
  await supabase.storage.from("rethread").upload('/userUploadedImgaes',file,{contentType:type.mime});
}

export default HandleImages;
