const mongoose = require("mongoose");

const purchaseHistorySchema = mongoose.Schema(
  {
    purchaseDate: Date,
    totalCost: Number,
    vendorContactNo: Number,
  },
  { timestamps: true } // created at and updated at will be managed automatically
);

module.exports = mongoose.model("PurchaseHistory", purchaseHistorySchema); // table name & schema
