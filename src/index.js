import { characters } from "./characters";
import { getData } from "./utils";

const p = document.createElement('p');
const newmesa = document.querySelector('.root').appendChild(p);
newmesa.innerText = 'API Marvel'

characters();