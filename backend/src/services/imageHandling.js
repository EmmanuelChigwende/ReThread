import supabase from "../config/supabaseClient.js";

async function HandleImages(file) {
  console.log("handle image fucntion was called")
  const url =  await supabase.storage.from("rethread").upload('/userUploadedImgaes',file,{contentType:"image.png"});
  // when returning return url.data
  
}

export default HandleImages;
