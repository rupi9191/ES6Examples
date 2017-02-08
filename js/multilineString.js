
export default function multilineString() {

    var paragraph1 = "My name is Rupesh"
       + "I am currently working at Rakuten"
       + "My expertise are mobile application development and front end engineering.";
    var paragraph2 = `My name is Rupesh
                       I am currently working at Rakuten
                       My expertise are mobile application
                       development and front end engineering.`;
    console.log("es5",paragraph1);
    console.log("es6",paragraph2);

}
