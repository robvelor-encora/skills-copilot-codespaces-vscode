// Create web server
// http://localhost:3000/comments

const express = require('express');
const app = express();
const port = 3000;

// Get comments
app.get('/comments', (req, res) => {
  res.send('Get comments');
});

// Create comment
app.post('/comments', (req, res) => {
  res.send('Create comment');
});

// Update comment
app.put('/comments/:id', (req, res) => {
  res.send('Update comment');
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete comment');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Run this code
// node comments.js
// Open browser
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/1?name=John
// http://localhost:3000/comments/1?name=John&age=30
// http://localhost:3000/comments/1?name=John&age=30&city=Bangkok
// http://localhost:3000/comments/1?name=John&age=30&city=Bangkok&country=Thailand
// http://localhost:3000/comments/1?name=John&age=30&city=Bangkok&country=Thailand&phone=0812345678
// http://localhost: