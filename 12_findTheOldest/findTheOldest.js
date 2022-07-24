// const findTheOldest = function(people) {
//     // compute the ages
//     people.map(person => {
//         if (person.yearOfDeath) {
//             person["age"] = person.yearOfDeath - person.yearOfBirth;
//         } else {
//             person["age"] = new Date().getFullYear() - person.yearOfBirth;
//         }
//     });

//     const sortedPeople = people.sort((a, b) => (a.age < b.age) ? 1 : -1);

//     // first element is oldest
//     return sortedPeople[0];
// };


// write with a reducer
const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    });

    return oldestPerson;
}

const getAge = function(birth, death) {
    if (!death) death = new Date().getFullYear();

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
