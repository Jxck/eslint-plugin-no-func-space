'use strict';

var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);


var valid = [
  'var a = function(){}',
  'var a = function() {}',
  '(function() {})()',
  '(function() {}())',
];

var message = 'no space between "function" and "()"';

var invalid = [
  'var a = function (){}',
  'var a = function () {}',
  '(function () {})()',
  '(function () {}())',
].map(function(code) {
  return { code: code, errors: [{ message: message }] };
});

eslintTester.addRuleTest('./lib/rules/no-func-space', {
  valid: valid,
  invalid: invalid
});
