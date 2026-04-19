import React, { useContext, useState } from "react";
import styles from "./Comments.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function Comments() {
    const { darkMode } = useContext(ThemeContext)
    const [input, setInput] = useState("");
    const [comments, setComments] = useState([
        "Very tasty!",
        "My favorite drink.",
    ]);

    const addComment = () => {
        if (input.trim() === "") return;

        setComments([...comments, input]);
        setInput("");
    };
    return (
        <div className={darkMode ? `${styles.comments} ${styles.dark}` : styles.comments}>
            <h2 className={styles.title}>Comments</h2>

            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="Write your comment..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={styles.input}
                />
                <button onClick={addComment} className={styles.addBtn}>
                    Add
                </button>
            </div>

            <div className={styles.list}>
                {comments.map((comment, index) => (
                    <div key={index} className={styles.commentItem}>
                        <p>{comment}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Comments;