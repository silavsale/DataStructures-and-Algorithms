// const gain = [-5, 1, 5, 0, -7];
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// const gain = [-4, -3, -2, -1, 4, 3, 2];
const gain = [-5, 1, 5, 0, -7];

function largestAltitude(gain: number[]): number {
  let highestAltitude = 0;
  let height = 0;
  for (let i = 0; i < gain.length; i++) {
    height = height + gain[i];
    if (height > highestAltitude) {
      highestAltitude = height;
    }
  }

  return highestAltitude;
}

largestAltitude(gain);

0 + -5 + 1 + 5 + 0 + -7;
