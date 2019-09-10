const languages = [
    { name: "html" },
    { name: "css" },
    { name: "react" }
];



const addNameToArray = (acc, language) => {
    acc.push(language.name);
    return acc;
}

const frontEndNamesLanguages = languages.reduce(addNameToArray, []);

console.log(frontEndNamesLanguages);