async function play() {
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (!file) {
        alert("No file uploaded.");
        return;
    }
    const formData = new FormData();
    formData.append("image", file)
try{
const res = await fetch("/summarize-image", {
    method: "POST",
    body: formData,
})
const data = await res.json();

document.getElementById("ocrText").textContent = data.extractedText || "No text extracted";
document.getElementById("summary").textContent = data.summary || "No summary available";

}catch(err){
  console.log("error..");
  
}}
