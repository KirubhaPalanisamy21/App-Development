import React, { useState } from "react";
import "./Feedback.css";
import { Link } from "react-router-dom";
import axios from 'axios'; // Import Axios

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitFeedback = () => {
    const data = {
      rating: rating,
      name: name,
      email: email,
      comment: comment,
    };
    axios.post('http://localhost:8081/profile/posting', data)
      .then(response => {
        console.log('Feedback submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h1>Feedback Form</h1>
        <form>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number" // Assuming rating is a number
              id="rating"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows={4}
            ></textarea>
          </div>
          <div>
            <button type="button" onClick={submitFeedback}>
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;