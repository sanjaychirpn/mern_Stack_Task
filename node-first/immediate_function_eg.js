// These are immedidately invoked or self-invoked methods, which are executed right after they are defined.

var g_var = "Global Varibale";
(function () {
  var pri_var = "Private Variable";
  console.log(g_var);
  console.log(pri_var);
})();

// console.log(pri_var); // Access denied as the variable is private, Since everything inside a self-invoked funtion is private scoped.
