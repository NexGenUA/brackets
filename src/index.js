module.exports = function check(str, bracketsConfig) {
  
  let currentLength = 0;

  const removeBracket = () => {
    
    currentLength = str.length;
    
    bracketsConfig.forEach(el => str = str.replace(el.join(""), ""));

    if (currentLength !== str.length) removeBracket();

  };

  removeBracket();
  
  return !str;
}
