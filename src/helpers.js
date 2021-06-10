/* Returns a random index given the length of an array of objects **/

function getRandomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length) + 1;
  return arr[index];
}

export default getRandomIndex;
