import { nearestPalindrome } from './palindrome';

describe('Palindrome', () => {
    test('Word is palindrome', () => {
        expect(nearestPalindrome('arara')).toEqual('arara');
    });
    test('Bebe', () => {
        expect(nearestPalindrome('bebe')).toEqual('bebeb');
    })
    test('Race', () => {
        expect(nearestPalindrome('race')).toEqual('ecarace');
    });
    test('Google', () => {
        expect(nearestPalindrome('google')).toEqual('elgoogle');
    });
});  