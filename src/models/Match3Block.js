/** @typedef {import('./Coordinates').default} Coordinates */

import Coordinates from './Coordinates.js';

class Match3Block {
  /**
   * @type {number}
   * The numeric type of this match 3 block. 0 represents unmovable blocks
   */
  type = null;

  /**
   * @type {Coordinates}
   * The current coordinates of this block
   */
  position = null;

  /**
   * @typedef Match3BlockConstructionParams
   * @prop {number} type The type to give this match 3 block
   * @prop {Coordinates} position The coordinates of the block
   */

  /**
   *
   * @param {Match3BlockConstructionParams} params
   */
  constructor(params) {
    const {type, position} = params;
    this.type = type;
    this.position = new Coordinates(position.x, position.y);
  }
}

export default Match3Block;
