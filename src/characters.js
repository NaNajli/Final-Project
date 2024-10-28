
export function characters() {

  const myList = document.querySelector(".list-characters");
  const title = document.querySelector(".characters");
  title.appendChild(document.createElement("h1")).textContent = `Characters`;

 
  document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let letter = event.target.input.value
  console.clear()
  
  let myRequest;
  
  if (letter !== "")
    {

    myRequest =  `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}&ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7` ;
     
    } 
 else if (letter === "" ) {
   
   myRequest = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7`
      }   
   
      fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
      console.log(data);

      for (const charact of data.data.results) {
        const listItem = document.createElement("li");
        listItem.appendChild(document.createElement("h2")).textContent =
        charact.name;
        listItem.appendChild(document.createElement("p")).textContent =
        charact.description;
        listItem.append(``);
        let urlImg = `${charact.thumbnail.path}.${charact.thumbnail.extension}`;
        listItem.appendChild(document.createElement("img")).src =
          urlImg.replace("http", "https");
        myList.appendChild(listItem);
      }
    })
    .catch(console.error);
      }  
  )}  
    