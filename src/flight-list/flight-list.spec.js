import { flightItinerary } from './flight-list';

describe('Itinerary', () => {
    test('No Initinerary', () => {
        expect(flightItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM')).toEqual(null);
    });

    test('Starting Point', () => {
        expect(flightItinerary([['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']], 'YUL'))
            .toEqual(['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']);
    });

    test('Itinerary Sorted Alphabetically', () => {
        expect(flightItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A'))
            .toEqual(['A', 'B', 'C', 'A', 'C']);
    });

    test('Itinerary Sorted Alphabetically 2', () => {
        expect(flightItinerary([['A', 'C'], ['A', 'B'], ['B', 'C'], ['C', 'A']], 'A'))
            .toEqual(['A', 'B', 'C', 'A', 'C']);
    });

    test('Itinerary Sorted Alphabetically 3', () => {
        expect(flightItinerary([['A', 'D'], ['A', 'B'], ['D', 'C'], ['B', 'C'], ['C', 'A']], 'A'))
            .toEqual(['A', 'B', 'C', 'A', 'D', 'C']);
    });
})