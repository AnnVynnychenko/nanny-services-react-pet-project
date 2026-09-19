import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { authFirebase } from '../firebase/config';
import { getFirebaseErrorMessage } from '../firebase/errorCode';

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

    toast.success(`Welcome ${name}! Your account has been created.`);

    return user;
  } catch (error) {
    const friendlyMessage = getFirebaseErrorMessage(error.code);
    toast.error(friendlyMessage);
    throw new Error(friendlyMessage);
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

    toast.success(`Welcome back, ${user.displayName || 'User'}!`);
    return user;
  } catch (err) {
    const friendlyMessage = getFirebaseErrorMessage(err.code);
    toast.error(friendlyMessage);
    throw err;
  }
};
