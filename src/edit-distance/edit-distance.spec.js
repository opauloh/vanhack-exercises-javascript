import { editDistance } from './edit-distance';

describe('Edit Distance', () => {
  test('Kitting and Sitting', () => {
    expect(editDistance("kitten", "sitting")).toEqual(3);
  });

  test('Extra strings at the beggining', () => {
    expect(editDistance("abckitten", "sitting")).toEqual(6);
  });

  test('Extra strings at the end', () => {
    expect(editDistance("kitten", "sittingabc")).toEqual(6);
  });

  test('Single Remove Operation', () => {
    expect(editDistance("helli", "elli")).toEqual(1);
  });

  test('Single Add Operation', () => {
    expect(editDistance("elli", "helli")).toEqual(1);
  });

});
