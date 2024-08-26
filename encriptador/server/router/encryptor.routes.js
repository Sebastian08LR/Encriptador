
const { query, body, param, validationResult } = require('express-validator');
const express = require('express');
const appEncryptor = express.Router();
const Encryptor = require('../module/encryptor.js');

appEncryptor.get('/api/v1', [
    query("text").notEmpty(),
    query("action").isIn(['encrypt', 'decrypt']).withMessage('Action must be either "encrypt" or "decrypt"')
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: "Envie un texto y una acción válida para realizar la operación" });
    }
  
    const { text, action } = req.query;
    
    let encryptor = new Encryptor();
    encryptor.setFormData(text);
    encryptor.setAction(action);
    
    const result = encryptor.handleSubmit();
    
    res.json({ result });
  });

module.exports = appEncryptor;
