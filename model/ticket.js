const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    status: String,
    created_at: Date,
    updated_at: Date
  });

module.exports = mongoose.model('Ticket',ticketSchema)
