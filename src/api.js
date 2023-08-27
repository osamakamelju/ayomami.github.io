const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hey there! here is AYOMAMI API - GET!');
  });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

app.get('/posts', (req, res) => {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' }
    ];
    res.json(posts);
  });



  app.post('/', (req, res) => {
    res.send('Hey there! here is AYOMAMI API - POST!');
  });


  app.post('/', (req, res) => {
    res.send('Hey there! here is AYOMAMI API - PUT!');
  });




  app.post('/posts', (req, res) => {
    const newPost = {
      id: 4,
      title: req.body.title
    };
    // Add the new post to the list of posts
    res.json(newPost);
  });

  app.put('/', (req, res) => {
    res.send('Hey there! here is AYOMAMI API - PUT!');
  });

  app.put('/posts', (req, res) => {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' }
    ];
    res.json(posts);
  });