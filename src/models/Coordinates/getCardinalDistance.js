/** @typedef {import('../Coordinates').default} Coordinates */

/**
 * @typedef GetCardinalDistanceParams
 * @prop {Coordinates[]} coordinates The coordinates to compare
 */

/**
 * Takes two coordinates and returns the longest cardinal distance between them
 *
 * @param {GetCardinalDistanceParams} params
 */
const getCardinalDistance = (params) => {
  const {coordinates} = params;

  const xDistance = Math.abs(coordinates[0].x - coordinates[1].x);
  const yDistance = Math.abs(coordinates[0].y - coordinates[1].y);

  return xDistance > yDistance ? xDistance : yDistance;
};

export default getCardinalDistance;
