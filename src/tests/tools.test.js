import { elementsCounter } from "../modules/tools";

const mockArray = [
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0}
];

const mockArray1 = [1,2,3]

test('elements counter should return 6', () => {
    expect(elementsCounter(mockArray)).toBe(6);
});

test('elements counter should return 6', () => {
    expect(elementsCounter(mockArray)).not.toBe(3);
});

test('elements counter should return 3', () => {
    expect(elementsCounter(mockArray1)).toBe(3);
});

test('elements counter should return 3', () => {
    expect(elementsCounter(mockArray1)).not.toBe(6);
});