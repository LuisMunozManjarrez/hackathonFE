export class ChatMessageModel {
    constructor(user, message,dateCreated){
        this.user = user;
        this.message = message;
        this.dateCreated = dateCreated;
    }
}