const formatMoney = (price) => (price).toLocaleString('en-US')

const toChinesNum = (num) => {
  if (num <= 0) return '零'
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let unit = ["", "十", "百", "千", "万"];
  num = parseInt(num);
  let getWan = (temp) => {
    let strArr = temp.toString().split("").reverse();
    let newNum = "";
    for (let i = 0; i < strArr.length; i++) {
      newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
    }
    return newNum;
  }
  let overWan = Math.floor(num / 10000);
  let noWan = num % 10000;
  if (noWan.toString().length < 4) noWan = "0" + noWan;
  return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
}

const toDouble = (num) => {
  if (!num) return ''
  return num.toFixed(2)
}


const addWan = (integer, number, mutiple, decimalDigit) => {
  const digit = getDigit(integer)
  if (digit > 3) {
    let remainder = digit % 8
    if (remainder >= 5) { // 十万 百万 千万 显示为万
      remainder = 4
    }
    return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万'
  } else {
    return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit)
  }
}

const getDigit = (integer) => {
  let digit = -1
  while (integer >= 1) {
    digit++
    integer = integer / 10
  }
  return digit
}

/**
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 小数点后最多位数，默认为2
 * @return {string} 加上单位后的数字
 */
const addChineseUnit = (number, decimalDigit) => {
  decimalDigit = decimalDigit == null ? 1 : decimalDigit
  const integer = Math.floor(number)
  const digit = getDigit(integer)
  // ['个', '十', '百', '千', '万', '十万', '百万', '千万']
  let unit = []
  if (digit > 3) {
    const multiple = Math.floor(digit / 8)
    if (multiple <= 1) {
      const tmp = Math.round(integer / Math.pow(10, 8 * multiple))
      unit.push(addWan(tmp, number, 8 * multiple, decimalDigit))
      for (let i = 0; i < multiple; i++) {
        unit.push('亿')
      }
      return unit.join('')
    } else {
      return addWan(integer, number, 0, decimalDigit)
    }
  } else {
    return number
  }
}

export {
  formatMoney,
  toChinesNum,
  toDouble,
  addChineseUnit
}
