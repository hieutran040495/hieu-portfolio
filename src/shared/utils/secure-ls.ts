import SecureLS from 'secure-ls';

export default class Secure {
  private static _ls = new SecureLS({
    encodingType: 'aes',
    isCompression: false,
    encryptionSecret: 'WLVsvGY2zbW1UkW4dUpAa',
  });

  static set(key: string, value: any) {
    return this._ls.set(key, value);
  }

  static remove(key: string) {
    return this._ls.remove(key);
  }

  static get(key: string) {
    return this._ls.get(key);
  }

  static clear() {
    return this._ls.removeAll();
  }
}
