const express = require('express');
const router = express.Router();

const userController = require('../controllers/User')
const ticketController = require('../controllers/Ticket')

const CheckAuth = require ('../middileware/auth')

router.post('/resigtration',userController.registration)
router.post('/login',userController.login)

router.post('/create-ticket' , CheckAuth, ticketController.CreateNewTicket)
router.get('/tickets',ticketController.getAllTicket)
router.get('/ticket/:id',ticketController.getTicketbyId)
router.put('/ticket/:id',CheckAuth, ticketController.updateTicket)
router.delete('/ticket/:id',CheckAuth,ticketController.deleteTicket)

module.exports = router