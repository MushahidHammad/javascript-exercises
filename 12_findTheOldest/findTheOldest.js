const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // Get birth and death year, assuming living people die in the current year
        const currentYear = new Date().getFullYear();
        const personDeathYear = person.yearOfDeath || currentYear;
        const personAge = personDeathYear - person.yearOfBirth;

        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        // Return the older person
        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
