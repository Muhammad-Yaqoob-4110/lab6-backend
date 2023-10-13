const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

// Create an Invoice
router.post("/invoices", invoiceController.createInvoice);

// update an Invoice
router.put("/invoices/:id", invoiceController.updateInvoice);

// get all Invoices
router.get("/invoices", invoiceController.getAllInvoices);

// delete an Invoice by id
router.delete("/invoices/:id", invoiceController.deleteInvoice);

module.exports = router;
