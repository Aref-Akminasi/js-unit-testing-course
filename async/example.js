export function generateKey(name, cb) {
  asyncKeyGenerator(name, cb);
}

function asyncKeyGenerator(name, cb) {
  setTimeout(() => {
    const randomNum = Math.random();
    const key = name + randomNum;
    cb(key);
  }, 2000);
}
