const { RuleTester } = require("eslint");
const requirePreventDefaultRule = require("../src/require-prevent-default.js");
const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
});
ruleTester.run("require-prevent-default", requirePreventDefaultRule, {
  valid: [
    {
      code: "<a onClick={(e) => {e.preventDefault();}}></a>",
    },
  ],
  invalid: [
    {
      code: "<a onClick={(e) => {}}></a>",
      errors: [{ messageId: "noPreventDefault" }],
    },
    {
      code: "<a onClick={() => {}}></a>",
      errors: [{ messageId: "noPreventDefaultArgs" }],
    },
  ],
});
