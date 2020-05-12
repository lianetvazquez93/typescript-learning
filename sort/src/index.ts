import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const collection = new NumbersCollection([10, 5, 20]);

const sorter = new Sorter(collection);

sorter.sort();
console.log(collection.data);
