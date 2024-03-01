import { BEAKPOINTS } from '../constants/breakpoint';

export function jsonParse(data: any) {
  const txt = JSON.stringify(data);
  return JSON.parse(txt);
}

export function sliceArray(items: any, amount: number) {
  return items.slice(0, amount)
}

export function isScreenSmall() {
  return window.innerWidth < BEAKPOINTS.SMALL;
}

export function isScreenLarge() {
  return window.innerWidth < BEAKPOINTS.LARGE;
}

export function aosDelay(max: number) {
  let item = 0;
  let arr = [item];

  for(let i = 1; i < max; i++) {
    item += 50;
    arr.push(item);
  }

  return arr;
}

