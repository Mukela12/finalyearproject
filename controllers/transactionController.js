// controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    try {
      const { type, amount } = req.body;
      const userId = req.user.id; // Assuming you have user information in the request (e.g., from authentication middleware)
  
      const newTransaction = new Transaction({ user: userId, type, amount });
      await newTransaction.save();
      res.status(201).json({ message: 'Transaction added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
