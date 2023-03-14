import { describe, expect, test } from "@jest/globals"
import { twoSum } from "../master-the-coding-interview-big-tech-faang-interviews/two-sum"

describe("TwoSum function", () => {
  test("TwoSum should return Array type", () => {
    const returnValue = twoSum([1, 2, 3], 10)
    expect(returnValue).toBeInstanceOf(Array)
  })

  test("If no posible sum exists return null", () => {
    const returnValue = twoSum([1, 2, 3], 100000)
    expect(returnValue).toBeInstanceOf(null)
  })
})
