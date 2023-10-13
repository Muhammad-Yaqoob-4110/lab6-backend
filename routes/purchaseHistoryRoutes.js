const express = require("express");
const router = express.Router();
const purchaseHistoryController = require("../controllers/purchaseHistoryController");

// Create Purchase History
router.post("/purchases", purchaseHistoryController.createPurchase);

// update an purchases
router.put("/purchases/:id", purchaseHistoryController.updatePurchase);

// get all purchases
router.get("/purchases", purchaseHistoryController.getAllPurchases);

// delete an purchases by id
router.delete(
  "/purchases/:id",
  purchaseHistoryController.deletePurchaseHistory
);

module.exports = router;
