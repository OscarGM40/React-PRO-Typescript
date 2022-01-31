import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Routes {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Routes[]
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const routes: Routes[] = [
  { 
    path:'/lazyload',
    Component: LazyLayout,
    name: 'LazyLoading Nested',
  },
  { 
    path:'/no-lazy',
    Component: NoLazy,
    name: 'No Lazy Loading',
  },
]