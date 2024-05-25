import {
  BlogCreated as BlogCreatedEvent,
  BlogTipped as BlogTippedEvent,
  NewsTipped as NewsTippedEvent,
  UserUpdated as UserUpdatedEvent,
  newsCreated as newsCreatedEvent
} from "../generated/Gmbuilders/Gmbuilders"
import {
  BlogCreated,
  BlogTipped,
  NewsTipped,
  UserUpdated,
  newsCreated
} from "../generated/schema"

export function handleBlogCreated(event: BlogCreatedEvent): void {
  let entity = new BlogCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blogId = event.params.blogId
  entity.blogLink = event.params.blogLink
  entity.owner = event.params.owner
  entity.categories = event.params.categories

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlogTipped(event: BlogTippedEvent): void {
  let entity = new BlogTipped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blogId = event.params.blogId
  entity.tipper = event.params.tipper
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewsTipped(event: NewsTippedEvent): void {
  let entity = new NewsTipped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blogId = event.params.blogId
  entity.tipper = event.params.tipper
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserUpdated(event: UserUpdatedEvent): void {
  let entity = new UserUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.name = event.params.name
  entity.username = event.params.username
  entity.interest = event.params.interest
  entity.profileUrl = event.params.profileUrl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenewsCreated(event: newsCreatedEvent): void {
  let entity = new newsCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blogId = event.params.blogId
  entity.blogLink = event.params.blogLink
  entity.categories = event.params.categories

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
