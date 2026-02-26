let language = prompt("Enter a language code (es, de, en, fr):");

if (language === "fr") {
    alert("Hello World translated in French is: Bonjour le monde");
    // console.log("Hello World translated in French is: Bonjour le monde");
} 
else if (language === "es") {
    alert("Hello World translated in Spanish is: Hola Mundo");
    // console.log("Hello World translated in Spanish is: Hola Mundo");
} 
else if (language === "de") {
    alert("Hello World translated in German is: Hallo Welt");
    // console.log("Hello World translated in German is: Hallo Welt");
} 
else {
    alert("Hello World translated in English is: Hello World");
    // console.log("Hello World translated in English is: Hello World");
}