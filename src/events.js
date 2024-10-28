
export function events() {
  const URL = `https://gateway.marvel.com:443/v1/public/events?&ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

const myList = document.querySelector(".event-description");
const h1 = document.createElement("h1");
h1.textContent = "Events"
document.querySelector(".events").appendChild(h1);
     
for (const items of data.data.results) {

  const listItem = document.createElement("li");
  let urlImg = `${items.thumbnail.path}.${items.thumbnail.extension}`;
  listItem.appendChild(document.createElement("img")).src = urlImg.replace("http", "https");
  let dateSart = listItem.appendChild(document.createElement("p"));
  dateSart.textContent =`Start: ${items.start.replace("00:00:00","")}`
  let dateEnd = listItem.appendChild(document.createElement("p"))
  dateEnd.textContent = ` End: ${items.end.replace("00:00:00","")}`
  let description = listItem.appendChild(document.createElement("p"))
  description.textContent = `Description ${items.description}`
  description.className = "descriptionE ";

  
  
  myList.appendChild(listItem);
  
}
})
.catch(console.error);
}


