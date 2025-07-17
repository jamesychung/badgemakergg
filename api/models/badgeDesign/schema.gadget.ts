import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "badgeDesign" model, go to https://allqualitybadges.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "badgeDesign",
  fields: {
    backgroundColor: {
      type: "string",
      storageKey: "backgroundColor",
    },
    backingPrice: {
      type: "number",
      default: 0,
      storageKey: "backingPrice",
    },
    backingType: { type: "string", storageKey: "backingType" },
    basePrice: {
      type: "number",
      default: 9.99,
      storageKey: "basePrice",
    },
    designData: { type: "json", storageKey: "designData" },
    designId: { type: "string", storageKey: "designId" },
    productId: { type: "string", storageKey: "productId" },
    shopId: { type: "string", storageKey: "shopId" },
    status: {
      type: "enum",
      default: "draft",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["draft", "saved", "ordered", "archived"],
      storageKey: "status",
    },
    textLines: { type: "json", storageKey: "textLines" },
    totalPrice: { type: "number", storageKey: "totalPrice" },
    userId: { type: "string", storageKey: "userId" },
  },
};
 