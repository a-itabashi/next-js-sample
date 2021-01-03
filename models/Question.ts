// import firestore from "../node_modules/firebase";
// import firestore from "firebase/firestore";
import firebase from "firebase/app";

export interface Question {
  id: string;
  senderUid: string;
  receiverUid: string;
  body: string;
  isReplied: boolean;
  createdAt: firebase.firestore.Timestamp;
}
