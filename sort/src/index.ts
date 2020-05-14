import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 5, 20]);
// const sorter = new Sorter(collection);
// sorter.sort();
//console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");

const sorter = new Sorter(charactersCollection);

sorter.sort();

console.log(charactersCollection);
