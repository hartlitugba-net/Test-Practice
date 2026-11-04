export function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function reverseString(string) {
    return string.split("").reverse().join("");
}
export const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    }
};
export function caesarCipher(string, shift) {
    return string.split("").map((char) => {
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            return String.fromCharCode((code - 65 + shift) % 26 + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode((code - 97 + shift) % 26 + 97);
        }

        return char;
    }).join("");
}
export function analyzeArray(numbers) {
    const sum = numbers.reduce((total, number) => total + number, 0);

    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const length = numbers.length;

    return {
        average,
        min,
        max,
        length
    };
}
