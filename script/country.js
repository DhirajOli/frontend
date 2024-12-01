let countries = [
    { name: "Nepal", code: "Np" },
    { name: "India", code: "In" },
    { name: "Australia", code: "Au" },
    { name: "Japan", code: "Jp" }
];

function checkCountryCode(code) {
   
    const country = countries.find(country => country.code === code);

    
    if (country) {
        return `The country with code ${codes} is ${country.name}.`;
    } else {
        return `Country code ${code} not found.`;
    }
}

// Example usage
console.log(checkCountryCode('Np'));  
console.log(checkCountryCode('In'));  
console.log(checkCountryCode('US'));  