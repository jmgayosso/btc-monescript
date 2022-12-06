module.exports = {

  formattedAmount: function(v){
    let value = v == null || v.toFixed == null ? 0.00 : v.toPrecision(8);
    // return parseFloat(value).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })
    const result = `${value} BTC`;
    return result
  },
};