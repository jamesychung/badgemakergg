import * as React from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesUrl from "~/tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Badge Designer" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Design and customize your badges" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "stylesheet", href: tailwindStylesUrl },
  ];
};

export default function App() {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <Meta />
        <Links />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js"></script>
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
} 