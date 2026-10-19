const marvelHeroes = ["thor", "ironman", "hulk"];
const dcHeroes = ["batman", "superman", "flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
const allHeros = marvelHeroes.concat(dcHeroes)
// console.log(allHeros);
const allNewHeros = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeros);
const jumbleArray = [1, 2, 3, 4, [5, 6, 7], 8, [2, 8, 21, [5, 7, 9]] ]
const solveJumbleArray = jumbleArray.flat(Infinity);
// console.log(solveJumbleArray);
console.log(Array.isArray("Vipin Rawat"))
console.log(Array.from("Vipin Rawat"))
console.log(Array.from({name: "soniya"}))