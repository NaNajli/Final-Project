const p = document.createElement('p');
const newmesa = document.querySelector('.root').appendChild(p);
newmesa.innerText = 'API Marvel'

const baseURL = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7'

fetch(baseURL)
  .then(response => response.json())
  .then(data => console.log(data));
 // for (const character of json.data.results) {
 //  let herourl = data.results[0].characters
  
    
  