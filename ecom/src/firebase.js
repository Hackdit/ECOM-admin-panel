import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxVi4I3WFTmZbQeNIFhlqxrq63nHP6068",
  authDomain: "ecom-dev-e1e6c.firebaseapp.com",
  projectId: "ecom-dev-e1e6c",
  storageBucket: "ecom-dev-e1e6c.appspot.com",
  messagingSenderId: "1001208880104",
  appId: "1:1001208880104:web:acdfc821baeb1bdd9ba25d",
});

export const auth = app.auth();
export default app;
