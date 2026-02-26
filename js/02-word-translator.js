let language = prompt("Enter a language code (es, de, en, fr):");

if (language === "fr") {
    console.log("Hello World translated in French is: Bonjour le monde");
} 
else if (language === "es") {
    console.log("Hello World translated in Spanish is: Hola Mundo");
} 
else if (language === "de") {
    console.log("Hello World translated in German is: Hallo Welt");
} 
else {
    console.log("Hello World translated in English is: Hello World");
}