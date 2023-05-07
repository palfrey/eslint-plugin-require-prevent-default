const { RuleTester } = require("eslint");
const requirePreventDefaultRule = require("../src/require-prevent-default.js");
const ruleTesters = {
  js: new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: { ecmaFeatures: { jsx: true } },
  }),
  ts: new RuleTester({
    parser: require.resolve("@babel/eslint-parser"),
  }),
};
Object.keys(ruleTesters).forEach((rt) => {
  const ruleTester = ruleTesters[rt];
  ruleTester.run(`require-prevent-default (${rt})`, requirePreventDefaultRule, {
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
        code: "<button onChange={() => {}} />",
      },
      {
        code: "function Foo() {return <a onClick={(e) => {e.preventDefault();}}></a>}",
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
        code: "<a onClick={func}></a>",
        errors: [{ messageId: "noPreventDefaultArgs" }],
      },      
      {
        code: "<a onClick={(event) => {event.preventDefault;}}></a>",
        errors: [{ messageId: "noPreventDefault" }],
      },
      {
        code: "<div><a onClick={(e) => {}}></a></div>",
        errors: [{ messageId: "noPreventDefault" }],
      },
      {
        code: "function Foo() {return <a onClick={(e) => {}}></a>}",
        errors: [{ messageId: "noPreventDefault" }],
      },
      {
        code: "function Foo() {var x=false; return <div>{x && <a onClick={(e) => {}}></a>}</div>; }",
        errors: [{ messageId: "noPreventDefault" }],
      },
    ],
  });
});
