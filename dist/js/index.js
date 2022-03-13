const content = document.querySelector("div");

content.textContent = 
"Jajaja";





// ACTUAL EXERCISE



//starting info

const family = [
    {first: "Andrea", last: "Sanchez", year: 2000, death: 3000},
    {first: "Ivan", last: "Cordones", year: 1995, death: 2023},
    {first: "Pilar", last: "Serrano", year: 1967, death: 2045},
    {first: "Antonio", last: "Plasta", year: 1966, death: 2030},
    {first: "Isi", last: "Ramirez", year: 1930, death: 2022}, 
    {first: "Coco", last: "Coquin", year: 2006, death: 2018},
    {first: "Chispa", last: "Chispina", year: 2010, death: 2033}
];

const people = ["Sanchez, Ivan", "Sanchez, Andrea", "Sanchez, Antonio,", "Sanchez, Mari", "Sanchez, Santi", "Cordones, Pilar", "Cordones, Chari", "Cordones, Juani", "Serrano, Isi", "Cordones, Manuel", "Guijarro, Antonia", "Sanchez, Eulogio"];

const composed = ["Ivan de Cul", "Andrea de Poll", "Mama de Mier", "Padre de Cojone", "Abu de Choch", "Chispa der Waals", "Coco Cocon", "Mari Maria", "Santi Santo", "Chari Charo", "Juani Juana"];




// const born21 = family.filter(function(member) {
//     if (member.year > 1999) {
//         return true;
//     }
// });
// console.table(born21);

const born21 = family.filter(member => member.year > 1999);
console.table(born21);



// const firstLast = family.map(function(member) {
//     return member.first + " " + member.last;
// });
// console.table(firstLast);

const firstLast = family.map(member => member.first + " " + member.last);
console.table(firstLast);



// const oldToYoung = family.sort(function(first, second) {
//     if (first.year > second.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.table(oldToYoung);

const oldToYoung = family.sort((first, second) => first.year > second.year ? 1 : -1);
console.table(oldToYoung);



// const totalYears = family.reduce(function(total, next) {
//     return total + (next.death - next.year);
// }, 0);
// console.table(totalYears);

const totalYears = family.reduce((total, next) => {return total + (next.death - next.year)}, 0);
console.table(totalYears);



// const yearsLived = family.sort(function(first, second) {
//     // if (first.death - first.year > second.death - second.year) { // this line replaces next three
//     const aLived = first.death - first.year;
//     const bLived = second.death - second.year;
//     if (aLived > bLived) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.table(yearsLived);

const yearsLived = family.sort((first, second) => {
    const aLived = first.death - first.year;
    const bLived = second.death - second.year;
    return aLived > bLived ? 1 : -1;
});
console.table(yearsLived);