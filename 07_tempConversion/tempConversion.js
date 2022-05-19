const ftoc = function (temp) {
  let converted = Math.round((temp - 32) * (5 / 9) * 10) / 10;

  return converted;
};

const ctof = function (temp) {
  let converted = Math.round((temp * (9 / 5) + 32) * 10) / 10;

  return converted;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
