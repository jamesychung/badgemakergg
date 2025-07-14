import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import BadgeDesigner from "~/components/BadgeDesigner";

export const meta: MetaFunction = () => {
  return [
    { title: "Badge Designer" },
    { name: "description", content: "Design your custom badges" },
  ];
};

export default function BadgeDesignerRoute() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <header>
            <h1 className="text-3xl font-bold text-gray-900">Badge Designer</h1>
            <p className="mt-2 text-sm text-gray-600">
              Create and customize your badge design
            </p>
          </header>
          <div className="border-t border-gray-200 pt-6">
            <BadgeDesigner />
          </div>
        </div>
      </div>
    </main>
  );
} 