export const f2 = str => {
    let i = 0;
    let j = i;
    let subNumber = "";
    let result = [];
    while (i < str.length) {
      subNumber = "";
      if (str[i] === "-" || str[i].match(/[0-9]/)) {
  
        j = i + 1;
        while (i < str.length - 1 && str[j].match(/[0-9,.]/)) {
          j++;
        }
        subNumber = str.substring(i, j);
        !!parseFloat(subNumber) &&   result.push(parseFloat(subNumber));
      }
  
      i += subNumber.length > 0 ? subNumber.length + 1 : 1;
    }
    return result;
  };
  