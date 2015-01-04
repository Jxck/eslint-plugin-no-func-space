function noFuncSpace(context) {
  "use strict";

  return {
    'FunctionExpression': function(node) {
      var src = context.getSource(node);
      var fn = src.split('\n')[0];

      var matched = fn.match(/function(\s*)\(/);
      if (matched && matched[1].length > 0) {
        context.report(node, "no space between 'function' and '()'");
      }
    }
  }
}

module.exports = {
  rules: {
    'no-func-space': noFuncSpace
  }
};
