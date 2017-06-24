'use strict';

module.exports = function(Product) {
  /**
    * Buy this product
    * @param {number} quantity Number of products to buy
    * @param {Function(Error, object)} callback
    */
    const isQuantity = quantity => Boolean(quantity > 0)

  /*
    * Return true if input is > 0
    * @param {number} quantity Number to validate
    */
    Product.prototype.buy = function(quantity, callback) {
      if(!isQuantity(quantity)) {
        return callback(`Invalid quantity ${quantity}`)
      }
      const result = {
        status: `Great!, You bought ${quantity} products`
      };
      callback(null, result);
    };

    // Validate min length of the name
    Product.validatesLengthOf('name', {
      min: 3,
      message: {
        min: 'Name should be at least 3 chars'
      }
    })

    // Validate the name to be unique
    Product.validatesUniquenessOf('name')

    const positiveInt = /^[0-9]*$/;

    const validatesPositiveInt = function(err){
      if(!positiveInt.test(this.price)) {
        err()
      }
    }

    Product.validate('price', validatesPositiveInt, {
      message: 'Price should be a positive number'
    })
};
