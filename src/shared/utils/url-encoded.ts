export default function URLEncoded(element: any, key: any = null, list: any = null) {
  list = list || [];
  if (typeof element == 'object') {
    for (let index in element) URLEncoded(element[index], key ? key + '[' + index + ']' : index, list);
  } else {
    list.push(key + '=' + encodeURIComponent(element));
  }
  return list.join('&');
}
