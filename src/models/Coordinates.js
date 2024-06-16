import getCardinalDistance from './Coordinates/getCardinalDistance';

/**
 * Represents a set of 2D X/Y coordinates
 */
class Coordinates {
  x = null;
  y = null;

  /**
   * @overload
   * @param {Coordinates} coordinates Coordinates to copy
   */

  /**
   * @overload
   * @param {number} x The X position
   * @param {number} y The Y position
   */

  /**
   * Construct coordinates with the x and y values directly, or use as a copy constructor
   *
   * @param {Coordinates | number} x
   * @param {number} y
   */
  constructor(x, y) {
    if (x instanceof Coordinates) {
      const coordinatesToCopy = x;
      x = coordinatesToCopy.x;
      y = coordinatesToCopy.y;
    }
    this.x = x;
    this.y = y;
  }

  //* -------------- Utility methods --------------
  /**
   * Get the coordinates one unit in the desired direction
   *
   * @param {'up'|'right'|'down'|'left'} dir Direction to get the coordinates of
   */
  getDirection(dir) {
    const dirMap = {
      'up': () => new Coordinates(this.x, this.y+1),
      'right': () => new Coordinates(this.x+1, this.y),
      'down': () => new Coordinates(this.x, this.y-1),
      'left': () => new Coordinates(this.x-1, this.y),
    };

    return dirMap[dir]();
  }

  /**
   * Get the distance between this coordinate and another
   *
   * @param {Coordinates} coord The coordinates to get the distance to
   */
  getDistanceTo(coordinates) {
    return getCardinalDistance({coordinates: [this, coordinates]});
  }
}

export default Coordinates;
