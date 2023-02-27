module.exports = function check(str, bracketsConfig) {
  // };

  // function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map((item) => item[0]);
  const closeBrackets = bracketsConfig.map((item) => item[1]);
  let objPairsBrackets = {};
  for (let i = 0; i < openBrackets.length; i++) {
    objPairsBrackets[openBrackets[i]] = closeBrackets[i];
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      if (
        str[i] === objPairsBrackets[str[i]] &&
        stack[stack.length - 1] === str[i]
      ) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if (!stack.length) {
        return false;
      }
      if (objPairsBrackets[str[i]] === stack[stack.length - 1]) {
        stack.pop(str[i]);
      } else {
        return false;
      }
    }
  }
  if (!stack.length) return true;
  return false;
};
