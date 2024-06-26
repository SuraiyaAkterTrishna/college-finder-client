import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:import.meta.env.GATSBY_apiKey,
  authDomain:import.meta.env.GATSBY_authDomain,
  projectId:import.meta.env.GATSBY_projectId,
  storageBucket:import.meta.env.GATSBY_storageBucket,
  messagingSenderId:import.meta.env.GATSBY_messagingSenderId,
  appId:import.meta.env.GATSBY_appId
};
const app = initializeApp(firebaseConfig);
export default app;