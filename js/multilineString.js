
export function multilineStringES5() {
    var paragraph = "My name is Rupesh"
     + "I am currently working at Rakuten"
     + "My expertise are mobile application development and front end engineering.";
    console.log("es5", paragraph);
    return paragraph;
};

export function multilineStringES6() {
    var paragraph = `My name is Rupesh
                     I am currently working at Rakuten
                     My expertise are mobile application
                     development and front end engineering.`;
    console.log("es5", paragraph);
    return paragraph;
};
