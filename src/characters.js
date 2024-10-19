
export function characters(data){
       
//const baseURL = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7'
const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7'

const div = document.getElementById('.characters');
const myList = document.querySelector('.list-characters');
myList.append(div);
myList.appendChild(document.createElement('h1')).textContent = `Characters`;

const myRequest = new Request(url);

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    for (const charact of  data.data.results) {
  
     const listItem = document.createElement("li");
     listItem.appendChild(document.createElement('h2')).textContent = charact.name;
     listItem.append(``);
     listItem.appendChild(document.createElement("img")).src= `${charact.thumbnail.path}.${charact.thumbnail.extension}`;
     myList.appendChild(listItem);
   
  }
  }
)
  .catch(console.error);
}