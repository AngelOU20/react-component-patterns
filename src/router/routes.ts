import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | React.FC | JSXComponent;
  name: string;
}

/* LazyLoad */
const lazyLoad = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const compoundComponent = lazy(() => import("../02-compound-components/pages/ShoppingPage"));
const extensibleStyles = lazy(() => import("../03-extensible-styles/pages/ShoppingPage"));
const controlProps = lazy(() => import("../04-control-props/pages/ShoppingPage"));
const stateInitializer = lazy(() => import("../05-state-initializer/pages/ShoppingPage"));

export const routes: Route[] = [
  {
    to: "/lazy",
    path: "lazy",
    Component: lazyLoad,
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
  {
    to: "/control-props",
    path: "control-props",
    Component: controlProps,
    name: "Control props",
  },
  {
    to: "/state-initializer",
    path: "state-initializer",
    Component: stateInitializer,
    name: "State initializer",
  },
];
