
 export function searching(){
   
  return new Promise((resolve) => {
    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let searching = document.getElementById("search-input").value;
        console.log(searching);
        resolve(searching);
    });
});
}

export async function compareAndReplace(letter) {
    let searchWord = await searching();
    let newText = letter.replace(searchWord, "letter");
    console.log(newText);
    newText.use

    return newText;
}
