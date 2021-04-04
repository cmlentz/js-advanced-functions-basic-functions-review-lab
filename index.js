// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
};

let wrapAdjective = function(wrapper="*") {
  return function(adjective="special") {
    return `You are ${wrapper}${adjective}${wrapper}!`
  };
};

let Calculator = {
  add: function add(num1, num2) {
    const adder = num1 + num2;
    return adder;
  },
  subtract: function subtract(num1, num2) {
     const adder = num1 - num2;
     return adder;
  },
  multiply: function multiply(num1, num2) {
    const adder = num1 * num2;
    return adder;
  },
  divide: function divide(num1, num2) {
    const adder = num1 / num2;
    return adder;
  }
};

let actionApplyer = function(num1, funcArray) {
  let result = num1;
  for (let i = 0; i < funcArray.length; i++ ){
    result = funcArray[i](result);
  };
  return result;
};