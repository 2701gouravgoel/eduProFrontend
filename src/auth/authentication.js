
import { useState, useEffect } from 'react'
import { firebase } from '../configuration/FirebaseConfig';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // firebase.auth().currentUser?.getIdToken().then((token) => {
  //   console.log('++++++++++++++++++++++++', token)
  // })
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const authStateChanged = async (authState) => {
    if (!authState) {
      console.log(authState, 'authstate .................')
      setAuthUser(null)
      setLoading(false)
      return;
    }
    setLoading(true)
      var formattedUser = formatAuthUser(authState);
      console.log(formattedUser)
      setAuthUser(formattedUser);
      setLoading(false);
  };
  const signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () =>
    firebase.auth().signOut().then(clear);

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  };
}