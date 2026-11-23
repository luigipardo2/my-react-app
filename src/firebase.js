// Load the function that connects this app to Firebase
import { initializeApp } from "firebase/app";

// Identifies which Firebase project this app belongs to (not secret)
const firebaseConfig = {
  apiKey: "AIzaSyBP3NvOT0WEzQ4nHhPoXsUNQ2f43JxMqfE",
  authDomain: "my-react-app-fe740.firebaseapp.com",
  projectId: "my-react-app-fe740",
  storageBucket: "my-react-app-fe740.firebasestorage.app",
  messagingSenderId: "539068983959",
  appId: "1:539068983959:web:15cc667357e1d1e25997d2",
};

// Connect to Firebase
const app = initializeApp(firebaseConfig);

// Let other files use this connection: import app from "./firebase";
export default app;