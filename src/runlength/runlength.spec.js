import { runLengthEncode, runLengthDecode } from './runlength';

describe('Edit Distance', () => {
    test('Encode', () => {
        expect(runLengthEncode("AAAABBBCCDAA")).toEqual("4A3B2C1D2A");
    });
    test('Encode 100 Chars', () => {
        expect(runLengthEncode("AAAABBBCCDAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")).toEqual("4A3B2C1D2A100H");
    });
    test('Decode', () => {
        expect(runLengthDecode("4A3B2C1D2A")).toEqual("AAAABBBCCDAA");
    });
    test('Decode Longer', () => {
        expect(runLengthDecode("4A3B2C1D2A9H")).toEqual("AAAABBBCCDAAHHHHHHHHH");
    });
    test('Decode Number Greater Than 10', () => {
        expect(runLengthDecode("4A3B2C1D2A10H")).toEqual("AAAABBBCCDAAHHHHHHHHHH");
    });
    test('Decode Number 100', () => {
        expect(runLengthDecode("4A3B2C1D2A100H")).toEqual("AAAABBBCCDAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    });
});
