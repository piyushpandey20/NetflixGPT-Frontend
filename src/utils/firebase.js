import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BKT,
  MESSAGE_ID,
  APP_ID,
} from "../../.env";

const firebaseConfig = {
  apiKey: { API_KEY },
  authDomain: { AUTH_DOMAIN },
  projectId: { PROJECT_ID },
  storageBucket: { STORAGE_BKT },
  messagingSenderId: { MESSAGE_ID },
  appId: { APP_ID },
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
