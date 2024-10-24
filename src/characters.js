export function characters() {
  //const baseURL = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7'
  const search = "l"
  const baseURL =`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=b86e0dfc7ac1699752f05c1269c1234e&hash=0b50b7f09f080dcf97546c4e1f97b5b7`;

  const myList = document.querySelector(".list-characters");
  const title = document.querySelector(".characters");

  title.appendChild(document.createElement("h1")).textContent = `Characters`;

  const myRequest = new Request(baseURL);

  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (const charact of data.data.results) {
        const listItem = document.createElement("li");
        listItem.appendChild(document.createElement("h2")).textContent =
          charact.name;
        listItem.append(``);
        let urlImg = `${charact.thumbnail.path}.${charact.thumbnail.extension}`;
        listItem.appendChild(document.createElement("img")).src =
          urlImg.replace("http", "https");
        myList.appendChild(listItem);
      }
    })
    .catch(console.error);
}
