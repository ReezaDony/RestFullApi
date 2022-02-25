const express = require('express');
const router = express.Router();

module.exports = router;

//post method
router.post('/post', (req, res) => {
    res.send('Post API')
 });

//get all method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
});

//get by id method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
});

//update by id method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
});

//delete by id method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
});