import { lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

// type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.FC;
  // Component: LazyExoticComponent<JSXComponent> | React.FC | JSXComponent;
  name: string;
}

/* LazyLoad */
const lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));

const shoppingPage = lazy(
  () => import("../02-compound-components/pages/ShoppingPage")
);

export const routes: Route[] = [
  {
    to: "/",
    path: "",
    Component: shoppingPage,
    name: "Shopping page",
  },
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "lazy-2",
  },
];
