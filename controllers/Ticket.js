const Ticket = require("../model/ticket");

exports.getAllTicket = async (req, res) => {
  try {
    const allTicket = await Ticket.find({});
    res.status(201).json(allTicket);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getTicketbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateTicket = async (req, res) => {
  const id = req.params.id;
  const { title, description, status } = req.body;

  try {
    const ticket = await Ticket.findOne({ id });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    ticket.title = title || ticket.title;
    ticket.description = description || ticket.description;
    ticket.status = status || ticket.status;
    ticket.updated_at = new Date();
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findOne({ id });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    await ticket.remove();
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.CreateNewTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }
    const ticket = new Ticket({
      id: uuidv4(),
      title,
      description,
      status: "open",
      created_at: new Date(),
      updated_at: new Date(),
    });
    await ticket.save();
    res.status(200).json({ success: true, data: ticket });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
