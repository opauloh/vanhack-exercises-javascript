// race", you should return "ecarace",
// google - elgoogle

// race - ecarace
// arace
// carace
// ecarace
// race
// ecarace

export const nearestPalindrome = (word) => {
    const output = new Map();
    return buildPalindromeByFewestInsertions(word, output);
}

function buildPalindromeByFewestInsertions(word, output) {
    if (isPalindrome(word)) return word;
    if (output.has(word)) return output.get(word);

    if (word.charAt(0) === word.charAt(word.length - 1)) {
        const palindrome =
            word.charAt(0) +
            nearestPalindrome(word.substring(1, word.length - 1)) +
            word.charAt(word.length - 1);

        output.set(word, palindrome);
        return palindrome;
    }

    const pal1 =
        word.charAt(0) +
        nearestPalindrome(word.substring(1)) +
        word.charAt(0);
    const pal2 =
        word.charAt(word.length - 1) +
        nearestPalindrome(word.substring(0, word.length - 1)) +
        word.charAt(word.length - 1);

    if (pal1.length < pal2.length) {
        output.set(word, pal1);
        return pal1;
    }
    if (pal1.length > pal2.length) {
        output.set(word, pal2);
        return pal2;
    }

    // same length palindromes
    if (pal1.localeCompare(pal2) < 0) {
        output.set(word, pal1);
        return pal1;
    }
    output.set(word, pal2);
    return pal2;
}

function isPalindrome(word) {
    return (
        word ===
        word
            .split('')
            .reverse()
            .join('')
    );
}


// const findPalindromes = (input) => {
//     let output = [];

//     for (let i = 0; i < input.length; i++) {
//         const letter = input[i];
//         for (let j = 0; j < input.length; j++) {

//             let word = input.split('');

//             word[j] = letter;

//             console.log(word.join(''));

//             output.push(word.join(''));
//         }
//     }

//     return output;
// }


// export const nearestPalindrome = (input) => {
//     if (input === input.split('').reverse().join('')) {
//         return input
//     }

//     const palindromes = findPalindromes(input);
//     console.log(palindromes);
    // let interation = 0;

    // const originalInput = input;

    // let palindromes = [];

    // for (let i = (originalInput.length - 1); i > 0; i--) {

    //     input = [input.slice(0, interation), originalInput[i], input.slice(interation)].join('');

    //     const inputReverse = input.split('').reverse().join('');

    //     interation++;

    //     if (input === inputReverse) {
    //         palindromes.push({
    //             word: input,
    //             interation
    //         });
    //     }
    // }

    // console.log(palindromes);

    // const sortWord = palindromes.sort((a, b) => {
    //     return a.interation - b.interation;
    // }).sort((a, b) => {
    //     return a.word - b.word;
    // });
    // console.log(sortWord);

    // return sortWord.word;
// }