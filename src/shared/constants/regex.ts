export const Regexs = {
  whitespace: /^\S+/,
  name_kana: /^[ァ-・ヽヾ゛゜ー]+$/,
  only_number: /^[0-9]\d*$/,
  only_number_minus: /^[0-9\-]\d*$/,
  number_max_two: /^[1-9]\d{0,1}$/,
  number_max_three: /^[1-9]\d{0,2}$/,
  number_max_three_first_zero: /^[0-9]\d{0,2}$/,
  number_max_four: /^[1-9]\d{0,3}$/,
  number_max_eight: /^[1-9]\d{0,7}$/,
  number_max_fifteen: /^[1-9]\d{0,14}$/,
  email: /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/,
  passwordRegex: /^(?=.*[0-9])(?=.*[a-zA-Z]).+$/,
  phone: /^0\d{9,10}$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\?@%&+~#=-]*)*\/?$/,
  number: /^[0-9]\d{0,25}$/,
  number_price: /^[1-9]\d{0,25}/,
  quantity_one_hundred: /^([1-9]|[1-9][0-9]|100)$/,
  quantity_one_thousand: /^([1-9]|[1-9][0-9]{0,2}|999)$/,
  numericMode: '[0-9]*',
  fullWidthCharacter: /[０１２３４５６７８９]+$/,
  only_alphabet_number: /^[a-zA-Z0-9]*$/,
  only_alphabet_uppcase_number: /^[A-Z0-9]*$/,
};
