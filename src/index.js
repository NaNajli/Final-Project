import { characters } from "./characters";

const p = document.createElement('p');
const newmesa = document.querySelector('.root').appendChild(p);
newmesa.innerText = 'API Marvel'

characters();