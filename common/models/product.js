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
      // var result = { quantity };
      if(!isQuantity(quantity)) {
        return callback(`Invalid quantity ${quantity}`)
      }
      const result = {
        status: `Great!, You bought ${quantity} products`
      };
      // TODO
      callback(null, result);
    };
};
