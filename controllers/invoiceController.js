const Invoice = require("../models/invoices");

// Create an Invoice
async function createInvoice(req, res) {
  try {
    console.log(req.body);
    const newInvoice = await Invoice.create(req.body);
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// Update an Invoice by Id
async function updateInvoice(req, res) {
  try {
    const { id } = req.params;
    const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedInvoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all Invocies
async function getAllInvoices(req, res) {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete an Invoice by Id
async function deleteInvoice(req, res) {
  try {
    const { id } = req.params;
    await Invoice.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500).json({ error: err.message });
  }
}

module.exports = {
  createInvoice,
  updateInvoice,
  getAllInvoices,
  deleteInvoice,
};
