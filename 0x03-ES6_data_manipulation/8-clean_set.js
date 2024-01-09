export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string') {
    return '';
  }
  let string = '';
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      string += `${item.slice(startString.length)}-`;
    }
  }
  return string.slice(0, string.length - 1);
}