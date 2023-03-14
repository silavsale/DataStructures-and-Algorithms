// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15],
  target = 9

interface MyObject {
  [key: number]: number
}

export const twoSum = (arr: number[], target: number): number[] | null => {
  let map: MyObject = {}

  if (target < 2 || arr.length < 2) {
    return null
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = i
    }

    if (map[target - arr[i]] !== undefined) {
      return [map[target - arr[i]], i]
    }
  }

  return null
}

twoSum(nums, target)
