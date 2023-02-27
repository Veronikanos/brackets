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
    const currentBracket = str[i];
    if (openBrackets.includes(currentBracket)) {
      const closingBracket = objPairsBrackets[currentBracket];
      if (closingBracket !== currentBracket) {
        stack.push(closingBracket);
      } else if (
        stack.length > 0 &&
        stack[stack.length - 1] === currentBracket
      ) {
        stack.pop();
      } else {
        stack.push(currentBracket);
      }
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1] === currentBracket
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (!stack.length) return true;
  return false;
};
