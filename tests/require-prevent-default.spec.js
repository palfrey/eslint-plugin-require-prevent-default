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
    {
      code: "<a onClick={(event) => {event.preventDefault();}}></a>",
    },
    {
      code: `<a onClick={(e) => {
        foo();
        e.preventDefault();
      }}></a>`,
    },
    {
      code: "<button onClick={(e) => {e.preventDefault();}} />",
    },
    {
      code: "<button onClick={(e) => {e.preventDefault();}} />",
    },
    {
      code: "<button onChange={() => {}} />",
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
    {
      code: "<a onClick={(event) => {event.preventDefault;}}></a>",
      errors: [{ messageId: "noPreventDefault" }],
    },
  ],
});
