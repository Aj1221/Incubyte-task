export function add(numbers = "") {
    if (numbers === "") return 0;

    // Check if custom delimiter is provided
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(`[${delimiterMatch[1]}]`);
            numbers = numbers.slice(delimiterMatch[0].length);
        }
    }

  
    return numberArray.reduce((acc, curr) => acc + curr, 0);
}
