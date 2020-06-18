/*
(Amazon) Run-length encoding is a fast and simple method of encoding strings. The basic idea is to
represent repeated successive characters as a single count and character. For example, the string
"AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
Implement run-length encoding and decoding.
▧ You can assume the string to be encoded have no digits and consists solely of alphabetic characters.
▧ You can assume the string to be decoded is valid.
*/

export const runLengthEncode = (input) => {
    const [encoded] = input.split('').reduce((previous, current, idx, array) =>
        current === array[idx + 1] ?
            [previous[0], previous[1] + 1] :
            [`${previous[0]}${previous[1]}${current}`, 1]
        , ['', 1]);

    return encoded;
}

export const runLengthDecode = (input) => {
    // return input.split('')
    //     .map((i, idx) => idx % 1 === 0 ? i.repeat(input[idx - 1]) : '')
    //     .join('')

    const [decoded] = input.split('').reduce((previous, current) =>
        (current.match(/\d/)) ?
            [previous[0], `${previous[1]}${current}`]
            : [`${previous[0]}${current.repeat(previous[1])}`, 0]
        , ['', 0]);

    return decoded;
}