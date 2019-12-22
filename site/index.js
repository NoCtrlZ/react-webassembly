const js = import("./node_modules/webassembly-utils/webassembly_utils.js");
js.then(js => {
  js.greet("WebAssembly");
  let n = js.add(2,3);
  console.log(n)
});