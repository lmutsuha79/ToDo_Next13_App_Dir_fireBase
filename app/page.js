"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import AddNote from "./components/add-note";
import AppHeader from "./components/app-header";
import { useCallback, useEffect, useState } from "react";
import Footer from "./components/footer";
import NoteList from "./components/note-list";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, initfirebase } from "@/firebase";
import Loading from "./components/loading";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const markAsDone = useCallback(() =>{
    console.log("markAsDone");

    // const docRef = doc(db, "toDos", noteId);
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   // check if the userId in the note is the same ass the userId in the session
    //   if (docSnap.data().userId == user.uid) {
    //     // update the document
    //     await setDoc(docRef, {
    //       ...docSnap.data(),
    //       isDone: true,
    //     });
    //     console.log("marked as done");
    //   } else {
    //   }
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  },[])


  initfirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [isAddNoteShown, setIsAddNoteShown] = useState(false);
  const [notesAreLoading, setNoteAreLoading] = useState(false);
  async function getAllNotes() {
    setNoteAreLoading(true);
    const q = query(collection(db, "toDos"), where("userId", "==", user.uid));

    const querySnapshot = await getDocs(q);
    const toDos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("setting toDos");
    console.log(toDos);
    setNoteList(toDos);
    setNoteAreLoading(false);
  }
  // use use reducer to add the change single note functionality
  useEffect(() => {
    console.log("loaded");

    if (user) {
      console.log("user");
      getAllNotes();
    }
  }, [user, loading]);

  const [notesList, setNoteList] = useState([]);
  const router = useRouter();

  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  }
  async function saveNewNote({ title, description, dueDate }) {
    try {
      await addDoc(collection(db, "toDos"), {
        title: title,
        description: description,
        dueDate: dueDate,
        userId: user.uid,
        isDone: false,
        order: notesList.length + 1,
      });
      console.log("saved");
      getAllNotes();
    } catch (error) {
      console.log("not saved");
      console.log(error);
    }
  }

  if (loading) {
    console.log("Loading");
    return <Loading />;
  }
  if (!user) {
    console.log("user not login");
    router.push("/auth");
  }
  if (user) {
    console.log("user is already logged in");

    return (
      <main>
        <div className="flex items-center justify-center w-screen h-screen font-medium">
          <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
            <div className="relative h-[80vh]  max-w-full px-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
              <AppHeader logout={logout} />

              <div className="h-[80%]">
                {notesAreLoading ? (
                  <p className="text-blue-gray">tasks are loading</p>
                ) : (
                  <NoteList
                    notesList={notesList}
                    setNoteList={(newValue) => setNoteList(newValue)}
                    markAsDone={markAsDone}
                  />
                )}
              </div>

              <Footer trunOnAddForm={() => setIsAddNoteShown(true)} />
            </div>
          </div>
        </div>
        {isAddNoteShown && (
          <AddNote
            saveNewNote={saveNewNote}
            turnOffForm={() => setIsAddNoteShown(false)}
          />
        )}
      </main>
    );
  }

  return <Loading />;
}
