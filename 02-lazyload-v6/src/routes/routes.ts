import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";



type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy( () => import(/*webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );


export const routes: Routes[] = [
  { 
    path:'/lazyload/*',
    to: '/lazyload', //no usar '/' al final para que lo detecte props.isActive,si pongo /lazyload/ entonces no lo detecta
    Component: LazyLayout,
    name: 'LazyLayout-Dashboard',
  },
  { 
    path:'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
]