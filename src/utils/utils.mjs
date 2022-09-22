import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const reactSvgComponentToMarkupString = (component, props) =>
`data:image/svg+xml,${encodeURIComponent(
  renderToStaticMarkup(createElement(component, props))
)}`;
