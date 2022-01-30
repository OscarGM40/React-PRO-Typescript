import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


/** 
 * Fijate que es Component y no component
 * Fijate que path es lo mismo que to pero sin el /
 * Y dado que estoy en TS mejor definir una interface
 */
type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  // Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  /* realmeente puedo refactorizar un poco lo de arriba ya que comparten retornar un fc */
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Routes[] = [
  { 
    to: '/lazy1',
    path:'lazy1',
    Component: Lazy1,
    name: 'Lazy-1',
  },
  { 
    to: '/lazy2',
    path:'lazy2',
    Component: Lazy2,
    name: 'Lazy-2',
  },
  { 
    to: '/lazy3',
    path:'lazy3',
    Component: Lazy3,
    name: 'Lazy-3',
  },
]