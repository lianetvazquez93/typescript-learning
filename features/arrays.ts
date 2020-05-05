const carMakers = ["ford", "toyota", "chevy"];
//const carMakers: string[] = [];

const dates = [new Date(), new Date()];

const carByMake = [["f150"], ["corolla"], ["camaro"]];
//const carByMake: string[][] = [];

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
