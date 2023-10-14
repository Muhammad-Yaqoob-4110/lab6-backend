const PurchaseHistory = require("../models/purchaseHistory");

// Create a Purchase
async function createPurchase(req, res) {
  try {
    console.log(req.body);
    const newPurchase = await PurchaseHistory.create(req.body);
    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// Update Purchase by Id
async function updatePurchase(req, res) {
  try {
    const { id } = req.params;
    const updatedPurchase = await PurchaseHistory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedPurchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all products
async function getAllPurchases(req, res) {
  try {
    const purchaseHistory = await PurchaseHistory.find();
    res.json(purchaseHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete Purchase History by Id
async function deletePurchaseHistory(req, res) {
  try {
    const { id } = req.params;
    const deletedRecord = await PurchaseHistory.findByIdAndRemove(id);
    if (deletedRecord) {
      res
        .status(200)
        .json({ message: "Purchase history deleted successfully" });
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createPurchase,
  updatePurchase,
  getAllPurchases,
  deletePurchaseHistory,
};
