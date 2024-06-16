import Coordinates from '../Coordinates.js';
import getCardinalDistance from './getCardinalDistance.js';

describe('getCardinalDistance', function() {
  it('should get a direct distance of 1', async () => {
    const coordinates = [new Coordinates(0, 0), new Coordinates(0, 1)];
    const distance = getCardinalDistance({coordinates});
    expect(distance).toBe(1);
  });

  it('should get an inverted distance of 1', async () => {
    const coordinates = [new Coordinates(0, 0), new Coordinates(1, 0)];
    const distance = getCardinalDistance({coordinates});
    expect(distance).toBe(1);
  });

  it('should get a diagonal distance of 1', async () => {
    const coordinates = [new Coordinates(0, 0), new Coordinates(1, 1)];
    const distance = getCardinalDistance({coordinates});
    expect(distance).toBe(1);
  });

  it('should get a distance of 0', async () => {
    const coordinates = [new Coordinates(0, 0), new Coordinates(0, 0)];
    const distance = getCardinalDistance({coordinates});
    expect(distance).toBe(0);
  });

  it('should get a distance of 2', async () => {
    const coordinates = [new Coordinates(1, 0), new Coordinates(2, 2)];
    const distance = getCardinalDistance({coordinates});
    expect(distance).toBe(2);
  });
});
