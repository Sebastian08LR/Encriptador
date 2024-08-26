class Encryptor {
    constructor() {
      this.formData = {
        chain: ''
      };
      this.action = '';
      this.outputMessage = '';
    }
  
    /**
     * Sets the form data chain property.
     *
     * @param {string} chain - The chain value to be set in the form data.
     *
     * @returns {void} This method does not return any value.
     */
    setFormData(chain) {
      this.formData.chain = chain;
    }
    /**
     * Sets the action property of the Encryptor instance.
     *
     * @param {string} action - The action to be performed by the Encryptor instance.
     *                          It can be either 'encrypt' or 'decrypt'.
     *
     * @returns {void} This method does not return any value.
     */
    setAction(action) {
    this.action = action;
    }
  
    /**
     * Handles the submission of the form by encrypting or decrypting the chain based on the action property.
     *
     * @returns {string} The output message after performing the encryption or decryption.
     */
    handleSubmit() {
    if (this.action === 'encrypt') {
        this.outputMessage = this.encrypt(this.formData);
    } else if (this.action === 'decrypt') {
        this.outputMessage = this.decrypt(this.formData);
    }
    return this.outputMessage;
    }
  
    /**
     * Encrypts a given chain of text by replacing specific characters with their corresponding words.
     *
     * @param {Object} object - The object containing the chain to be encrypted.
     * @param {string} object.chain - The chain of text to be encrypted.
     *
     * @returns {string} The encrypted chain of text.
     *
     * @example
     * const encryptor = new Encryptor();
     * encryptor.setFormData('hello world');
     * encryptor.setAction('encrypt');
     * const encryptedChain = encryptor.handleSubmit();
     * console.log(encryptedChain); // Output: 'hello enter world'
     */
    encrypt(object) {
    let word = object.chain.split(" ");
    let convertion = word.map((value) => {
        value = value.split('');
        return value.map((caracter) => {
        if (caracter == "e") return "enter"
        else if (caracter == "i") return "imes"
        else if (caracter == "a") return "ai"
        else if (caracter == "o") return "ober"
        else if (caracter == "u") return "ufat"
        else return caracter
        }).join("")
    }).join(" ");
    return convertion;
    }
  
    /**
     * Decrypts a given chain of text by replacing specific words with their corresponding characters.
     *
     * @param {Object} object - The object containing the chain to be decrypted.
     * @param {string} object.chain - The chain of text to be decrypted.
     *
     * @returns {string} The decrypted chain of text.
     *
     * @example
     * const encryptor = new Encryptor();
     * encryptor.setFormData('hello enter world');
     * encryptor.setAction('decrypt');
     * const decryptedChain = encryptor.handleSubmit();
     * console.log(decryptedChain); // Output: 'hello world'
     */
    decrypt(object) {
    let word = object.chain.split(" ");
    let convertion = word.map((value) => {
        value = value.replace(/enter/gi, "e");
        value = value.replace(/imes/gi, "i");
        value = value.replace(/ai/gi, "a");
        value = value.replace(/ober/gi, "o");
        value = value.replace(/ufat/gi, "u");
        return value;
    }).join(" ");
    return convertion;
    }
}
  
  module.exports = Encryptor;