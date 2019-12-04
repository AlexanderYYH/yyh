import {toDouble} from "./format";

export default class Check {
  static isEmpty(val: string | number): boolean {
    if (val) {
      return true;
    }
    return false;
  }

  static isEmail(val: string): boolean {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (reg.test(val.toLowerCase())) {
      return true;
    }
    return false;
  }

  static isBlank(val: string): boolean {
    const reg = /^\s*$/
    if (reg.test(val)) {
      return true;
    }
    return false;
  }

  static hasBlank(val: string): boolean {
    const reg = /\s/
    if (reg.test(val)) {
      return true;
    }
    return false;
  }

  static len(val: string, len: number): boolean {
    if (val && val.length === len) {
      return true;
    }
    return false;
  }

  static min(val: string, len: number): boolean {
    if (val && val.length >= len) {
      return true;
    }
    return false;
  }

  static max(val: string, len: number): boolean {
    if (val && val.length <= len) {
      return true;
    }
    return false;
  }

  static toNumber(val: string | number, opt?: string): number | string {
    if (typeof val === "number") {
      val = String(val)
    }
    return opt === 'string' ? String(Number(val.replace(/[^\d]+/g, ''))) : Number(val.replace(/[^\d]+/g, ''))
  }

  static toPointNumber(val: string | number, opt?: string): number | string {
    val = parseFloat(val)
    return opt === 'string' ? toDouble(val) : Number(toDouble(val))
  }

  static toPrice(price: string) : string {
    const arr = ['0','1','2','3','4','5','6','7','8','9', '.']
    let result = ''
    if(Array.from(price).filter(i => i === '.').length >=2) return
    for (let i = 0; i < price.length; i++) {
      if(arr.includes(price[i])) {
        result+=price[i]
      }
    }
    return result
  }
}
