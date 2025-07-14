import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.4.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2025-07",
        enabledModels: [],
        type: "partner",
        scopes: [
          "read_customers",
          "write_customers",
          "write_orders",
          "read_orders",
          "write_products",
          "read_products",
          "read_checkouts",
          "write_checkouts",
        ],
      },
    },
  },
};
