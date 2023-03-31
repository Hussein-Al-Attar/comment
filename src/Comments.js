import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
const Todo = () => {
  const [Comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Comment"), {
        Comment: Comment,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "Comment")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setComments(newData);
      console.log(comments, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="container ">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Comment
        </label>
        <div class="row">
          <div class="col-1 center">
            <button
              type="button"
              class="btn btn-outline-primary m-3"
              onClick={addComment}
            >
              submit
            </button>
          </div>
          <div class="col">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Comment"
              rows="2"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      {comments.map((c, i) => (
        <>
          <div key={i} className="card m-2">
            <div class="card-body ">{c.Comment}</div>
          </div>
        </>
      ))}
    </section>
  );
};

export default Todo;
