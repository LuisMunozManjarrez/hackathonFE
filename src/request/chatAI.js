import { publicRequest } from "./requestMethods";


async function sendMessage (chatMessage) {
    const res = await publicRequest.post('/question', chatMessage);
    return res;
}

async function sendDocument(fileName){
    const res = await publicRequest.get(`/people/${fileName}`);
    return res;
}