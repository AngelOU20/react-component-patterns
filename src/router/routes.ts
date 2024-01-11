import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  // Component: React.FC;
  Component: LazyExoticComponent<JSXComponent> | React.FC | JSXComponent;
  name: string;
}

/* LazyLoad */
const lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const compoundComponent = lazy(
  () => import("../02-compound-components/pages/ShoppingPage")
);
const extensibleStyles = lazy(
  () => import("../03-extensible-styles/pages/ShoppingPage")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "Lazy load",
  },
  {
    to: "/compound",
    path: "compound",
    Component: compoundComponent,
    name: "Compound component",
  },
  {
    to: "/extensible-styles",
    path: "extensible-styles",
    Component: extensibleStyles,
    name: "Extensible styles",
  },
];
