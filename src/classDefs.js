
export class Message {
  constructor(user, time, message) {
    this.content = message
    this.userID = user
    this.time = time
  }
}

export class Chat {
  constructor(chatName) {
    this.chatName = chatName
    /**@type {Array<Message>} */
    this.messages = []
  }
}
