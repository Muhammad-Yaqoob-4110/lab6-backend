const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    invoiceNo: Number,
    invoiceDate: Date,
    dueDate: Date,
    totalAmount: Number,
    paymentStatus: String,
    paymentTerms: String,
  },
  { timestamps: true } // created at and updated at will be managed automatically
);

module.exports = mongoose.model("Invoices", invoiceSchema); // table name & schema
