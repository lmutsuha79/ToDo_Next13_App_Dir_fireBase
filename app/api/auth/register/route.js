import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function GET(req, res) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, "jiji@hello.com", "passjiji")
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Generate a unique token for authentication
      const token = user.uid;
      await setDoc(doc(db, "users", token), { token: token });
      console.log("ok");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(error);
    });

  return new Response("Hello, Next.js!");
}
