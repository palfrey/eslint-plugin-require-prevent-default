function checkFunction(context, func) {
  if (typeof func.params === "undefined") {
    context.report({ node: func, messageId: "noPreventDefaultArgs" });
    return;
  }
  if (func.params.length == 0) {
    context.report({ node: func.body, messageId: "noPreventDefaultArgs" });
    return;
  }
  const eventArg = func.params[0].name;
  for (const statement of func.body.body) {
    if (
      statement.type == "ExpressionStatement" &&
      statement.expression.type == "CallExpression"
    ) {
      const callee = statement.expression.callee;
      if (
        callee.type == "MemberExpression" &&
        callee.object.type == "Identifier" &&
        callee.object.name == eventArg &&
        callee.property.type == "Identifier" &&
        callee.property.name == "preventDefault"
      ) {
        return;
      }
    }
  }
  context.report({ node: func.body, messageId: "noPreventDefault" });
}

module.exports = {
  meta: {
    messages: {
      noPreventDefault: "Require event.preventDefault in onClick methods",
      noPreventDefaultArgs:
        "Require preventDefault in onClick methods (missing event arg)",
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        for (const attr of node.attributes) {
          if (attr.name.name == "onClick") {
            checkFunction(context, attr.value.expression);
          }
        }
      },
    };
  },
};
