export function add(numbers = "") {
    if (numbers === "") return 0;

    //This is to Check if custom delimiter is provided
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(`[${delimiterMatch[1]}]`);
            numbers = numbers.slice(delimiterMatch[0].length);
        }
    }

    //This is to Split based on delimiter
    const numberArray = numbers.split(delimiter).map(Number);

    //This is to Check for negative numbers
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.reduce((acc, curr) => acc + curr, 0);
}
