import express from 'express';
import albums from '../modules/albums.js';
import posts from '../modules/posts.js';
import comments from '../modules/comments.js';
import todos from '../modules/todos.js';
import photos from '../modules/photos.js';
import users from '../modules/users.js';
const router = express.Router();

router.get('/albums', (req, res) => {
    res.status(200).send({
        status:200,
        message:"Succuess",
        data:albums
    })
});

router.get('/posts', (req, res) => {
    res.status(200).send({
        status:200,
        message:"Succuess",
        data:posts
    })
});

router.get('/comments', (req, res) => {
    res.status(200).send({
        status:200,
        message:"Succuess",
        data:comments
    })
});
router.get('/todos', (req, res) => {
    res.status(200).send({
        status:200,
        message:"succuess",
        data:todos
    })
});

router.get('/photos', (req, res) => {
    res.status(200).send({
        status:200,
        message:"succuess",
        data:photos
    })
});

router.get('/users', (req, res) => {
    res.status(200).send({
        status:200,
        message:"succuess",
        data:users
    })
});



export default router;
