async function start() {
  return await Promise.resolve("async is working pretty good");
}

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log("Util ID:", Util.id);
