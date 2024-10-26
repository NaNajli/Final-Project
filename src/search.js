
 export function searching(){
   
  //  document.getElementById("search-form").addEventListener("submit", 
  //  function(event) {
  //  event.preventDefault(); 
  //  let searching = document.getElementById("search-input").value;
  //  console.log(searching)
  //  return searching;
    
    
  //  })}

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
    let newText = letter.replace(new RegExp(searchWord, 'g'), 'nuevaPalabra');
    console.log(newText);
    return newText;
}
