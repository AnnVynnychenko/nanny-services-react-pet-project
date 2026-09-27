import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { authFirebase } from '../firebase/config';
import { getFirebaseErrorMessage } from '../firebase/errorCode';

const handleAuthError = err => {
  const friendlyMessage = getFirebaseErrorMessage(
    err?.code || err || 'auth/unknown-error'
  );
  throw new Error(friendlyMessage);
};

export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authFirebase,
      email,
      password
    );

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });

    return authFirebase.currentUser;
  } catch (err) {
    handleAuthError(err);
  }
};

export const logInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      authFirebase,
      email,
      password
    );
    const user = userCredential.user;

    return user;
  } catch (err) {
    handleAuthError(err);
  }
};
