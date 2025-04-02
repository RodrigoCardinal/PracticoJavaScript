function findTheOldest(people) {
    let names = [];
    let ages = [];

    for (let i = 0; i < people.length; i++) {
        names.push(people[i].name);
        let age = (people[i].yearOfDeath || new Date().getFullYear()) - people[i].yearOfBirth;
        ages.push(age);
    }

    let maxAgeIndex = 0;
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] > ages[maxAgeIndex]) {
            maxAgeIndex = i;
        }
    }

    console.log(`La persona mas vieja es ${names[maxAgeIndex]} con ${ages[maxAgeIndex]} años`); 
}

const people = [
    { name: "Carly", yearOfBirth: 1942, yearOfDeath: 1970 },//28
    { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 },//49
    { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941 }//29
];

findTheOldest(people);  