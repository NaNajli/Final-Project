export function events() {
  const search = "h"
  const URL = `https://gateway.marvel.com:443/v1/public/events?nameStartsWith=${search}&ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

const myList = document.querySelector(".event-description");
     
for (const items of data.data.results) {
  
  const listItem = document.createElement("li");
  listItem.appendChild(document.createElement("p")).textContent =
  items.start;
  listItem.appendChild(document.createElement("p")).textContent =
  items.end;
  listItem.append(`${items.description}`);
  listItem.append(`${items.title}`)
  let urlImg = `${items.thumbnail.path}.${items.thumbnail.extension}`;
  listItem.appendChild(document.createElement("img")).src = urlImg.replace("http", "https");
  myList.appendChild(listItem);
  
  events()
 
}
})
.catch(console.error);
}


