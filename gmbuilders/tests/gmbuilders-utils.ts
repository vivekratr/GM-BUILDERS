import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BlogCreated,
  BlogTipped,
  NewsTipped,
  UserUpdated,
  newsCreated
} from "../generated/Gmbuilders/Gmbuilders"

export function createBlogCreatedEvent(
  blogId: BigInt,
  blogLink: string,
  owner: Address,
  categories: Array<string>
): BlogCreated {
  let blogCreatedEvent = changetype<BlogCreated>(newMockEvent())

  blogCreatedEvent.parameters = new Array()

  blogCreatedEvent.parameters.push(
    new ethereum.EventParam("blogId", ethereum.Value.fromUnsignedBigInt(blogId))
  )
  blogCreatedEvent.parameters.push(
    new ethereum.EventParam("blogLink", ethereum.Value.fromString(blogLink))
  )
  blogCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  blogCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "categories",
      ethereum.Value.fromStringArray(categories)
    )
  )

  return blogCreatedEvent
}

export function createBlogTippedEvent(
  blogId: BigInt,
  tipper: Address,
  amount: BigInt
): BlogTipped {
  let blogTippedEvent = changetype<BlogTipped>(newMockEvent())

  blogTippedEvent.parameters = new Array()

  blogTippedEvent.parameters.push(
    new ethereum.EventParam("blogId", ethereum.Value.fromUnsignedBigInt(blogId))
  )
  blogTippedEvent.parameters.push(
    new ethereum.EventParam("tipper", ethereum.Value.fromAddress(tipper))
  )
  blogTippedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return blogTippedEvent
}

export function createNewsTippedEvent(
  blogId: BigInt,
  tipper: Address,
  amount: BigInt
): NewsTipped {
  let newsTippedEvent = changetype<NewsTipped>(newMockEvent())

  newsTippedEvent.parameters = new Array()

  newsTippedEvent.parameters.push(
    new ethereum.EventParam("blogId", ethereum.Value.fromUnsignedBigInt(blogId))
  )
  newsTippedEvent.parameters.push(
    new ethereum.EventParam("tipper", ethereum.Value.fromAddress(tipper))
  )
  newsTippedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return newsTippedEvent
}

export function createUserUpdatedEvent(
  userAddress: Address,
  name: string,
  username: string,
  interest: Array<string>,
  profileUrl: string
): UserUpdated {
  let userUpdatedEvent = changetype<UserUpdated>(newMockEvent())

  userUpdatedEvent.parameters = new Array()

  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("username", ethereum.Value.fromString(username))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "interest",
      ethereum.Value.fromStringArray(interest)
    )
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("profileUrl", ethereum.Value.fromString(profileUrl))
  )

  return userUpdatedEvent
}

export function createnewsCreatedEvent(
  blogId: BigInt,
  blogLink: string,
  categories: Array<string>
): newsCreated {
  let newsCreatedEvent = changetype<newsCreated>(newMockEvent())

  newsCreatedEvent.parameters = new Array()

  newsCreatedEvent.parameters.push(
    new ethereum.EventParam("blogId", ethereum.Value.fromUnsignedBigInt(blogId))
  )
  newsCreatedEvent.parameters.push(
    new ethereum.EventParam("blogLink", ethereum.Value.fromString(blogLink))
  )
  newsCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "categories",
      ethereum.Value.fromStringArray(categories)
    )
  )

  return newsCreatedEvent
}
