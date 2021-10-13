import { elementsCounter } from "../modules/tools";

const mockArray = [
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0}
];

test('elements counter should return 6', () => {
    expect(elementsCounter(mockArray)).toBe(6);
  });
