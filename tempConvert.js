var fahrenheit = parseFloat(prompt("Enter fahrenheit tmp: "));

var celcius = (fahrenheit - 32) * (5 / 9);
document.write("Celcius = " + celcius + "<br/>");
farenheit = celcius * (9 / 5) + 32;
document.write("Fahrenheit = " + fahrenheit);