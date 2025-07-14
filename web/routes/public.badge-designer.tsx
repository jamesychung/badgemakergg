import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BadgeDesigner from "../components/BadgeDesigner";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("product");
  
  return json({ productId });
};

export default function PublicBadgeDesigner() {
  const { productId } = useLoaderData<typeof loader>();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Badge Designer</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50">
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
                <BadgeDesigner />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 