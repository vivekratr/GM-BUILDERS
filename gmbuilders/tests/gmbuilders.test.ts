import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BlogCreated } from "../generated/schema"
import { BlogCreated as BlogCreatedEvent } from "../generated/Gmbuilders/Gmbuilders"
import { handleBlogCreated } from "../src/gmbuilders"
import { createBlogCreatedEvent } from "./gmbuilders-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let blogId = BigInt.fromI32(234)
    let blogLink = "Example string value"
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let categories = ["Example string value"]
    let newBlogCreatedEvent = createBlogCreatedEvent(
      blogId,
      blogLink,
      owner,
      categories
    )
    handleBlogCreated(newBlogCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BlogCreated created and stored", () => {
    assert.entityCount("BlogCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BlogCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "blogId",
      "234"
    )
    assert.fieldEquals(
      "BlogCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "blogLink",
      "Example string value"
    )
    assert.fieldEquals(
      "BlogCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BlogCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "categories",
      "[Example string value]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
