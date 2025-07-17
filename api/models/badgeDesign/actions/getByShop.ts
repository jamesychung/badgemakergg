import { applyParams, save, ActionOptions } from "gadget-server";

export const run: ActionRun = async ({ params, record, logger, api, connections }) => {
  // Get the shop ID from params
  const { shopId } = params;
  
  if (!shopId) {
    throw new Error("shopId is required to fetch badge designs");
  }
  
  // Fetch badge designs for the specific shop
  const badgeDesigns = await api.badgeDesign.findMany({
    filter: {
      shopId: { equals: shopId }
    },
    sort: {
      createdAt: "Descending"
    }
  });
  
  return badgeDesigns;
};

export const onSuccess: ActionOnSuccess = async ({ params, record, logger, api, connections }) => {
  // Your logic goes here
};

export const options: ActionOptions = { actionType: "read" }; 