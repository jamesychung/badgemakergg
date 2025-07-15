import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import BadgeDesigner from "../components/BadgeDesigner";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("product");
  
  return json({ productId });
};

// Public layout that doesn't require Shopify authentication
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Badge Designer</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </head>
      <body className="bg-gray-50">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function PublicBadgeDesigner() {
  const { productId } = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <header>
            <h1 className="text-3xl font-bold text-gray-900">Badge Designer</h1>
            <p className="mt-2 text-sm text-gray-600">
              Create and customize your badge design
              {productId && ` for product: ${productId}`}
            </p>
          </header>
          <div className="border-t border-gray-200 pt-6">
            <BadgeDesigner productId={productId} />
          </div>
        </div>
      </div>
    </div>
  );
} 