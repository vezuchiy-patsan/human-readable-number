module.exports = function toReadable (number) {
  function recNum(num) {
    let numRet, left,right;
    const numStr = num.toString().split('').reverse().join('');
    if (num == 20) {
      console.log(numStr, num%10);
    }
    if(num < 20) {
      num == 18 ? numRet = "eighteen" : numRet = easyTO[numStr[0]] + "teen";
      return numRet;
    }
    if(num % 10 == 0){
        return easyTO[num];
    } 
    
    for(const key of easyTO.keys()){
      if(key < num && (key+1) == num){
        console.log("key < num", key)
       for (let i = key; i <= key; i--) {
        if(i % 10 == 0){
          left = i;
          right = left + 10;
          numRet = easyTO[left] + " " + easyTO[numStr[0]];
          break;
        }
        
       }
       break; 
      }
    }
    return numRet;
  }
  const easyTO = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  easyTO["13"] = "thirteen";
  easyTO["14"] = "fourteen";
  easyTO["15"] = "fifteen";

for(let i = 20; i <= 100; i = i+10){
  switch (i) {
    case 20:
      easyTO[`${i}`] = "twenty";
      break;
    case 30:
      easyTO[`${i}`] = "thirty";
      break;
    case 40:
      easyTO[`${i}`] = "forty";
      break;
    case 50:
      easyTO[`${i}`] = "fifty";
      break;
    case 80:
      easyTO[`${i}`] = "eighty"
      break;
    case 100:
      easyTO[`${i}`] = "hundred";
      break;
    default:
      easyTO[`${i}`] = easyTO[i/10] + "ty";
      break;
  }
}
// есть мысля рекурсивно асё это дело крутануть, тут максимум 3 вложенности получиться
let word_num;
String(number).length < 2 || number < 16 ? word_num = easyTO[number] : word_num = recNum(number);

return word_num;
}
