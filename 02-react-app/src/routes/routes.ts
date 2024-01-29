import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const Lazy1 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
	{
		path: "lazy1",
		to: "/lazy1",
		Component: Lazy1,
		name: "lazy1",
	},
	{
		path: "lazy2",
		to: "/lazy2",
		Component: Lazy2,
		name: "lazy2",
	},
	{
		path: "lazy3",
		to: "/lazy3",
		Component: Lazy3,
		name: "lazy3",
	},
];
