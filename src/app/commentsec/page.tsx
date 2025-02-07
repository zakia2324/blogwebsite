"use client"
import React, { useState, useEffect } from 'react';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const newComment = { name, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setName('');
      setComment('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Comment Section</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          placeholder="Write your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>
      <div>
        {comments.map((c, index) => (
          <div
            key={index}
            className="mb-4 p-3 border rounded-lg shadow-sm bg-gray-50"
          >
            <h4 className="font-bold">{c.name}</h4>
            <p>{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

<CommentSection/>


