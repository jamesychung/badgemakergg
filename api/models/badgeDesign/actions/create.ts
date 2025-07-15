import { applyParams, save, ActionOptions } from "gadget-server";

export const run: ActionRun = async ({ params, record, logger, api, connections }) => {
  applyParams(params, record);
  
  // Generate unique design ID if not provided
  if (!record.designId) {
    record.designId = `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  
  // Extract design data and calculate pricing
  const designData = record.designData;
  
  // Calculate pricing based on backing type
  const basePrice = 9.99;
  let backingPrice = 0;
  
  if (designData?.backing === 'magnetic') {
    backingPrice = 2.00;
  } else if (designData?.backing === 'adhesive') {
    backingPrice = 1.00;
  }
  
  const totalPrice = basePrice + backingPrice;
  
  // Set calculated fields
  record.basePrice = basePrice;
  record.backingPrice = backingPrice;
  record.totalPrice = totalPrice;
  
  // Extract summary fields for quick reference
  if (designData?.lines) {
    record.textLines = designData.lines.map((line: any) => ({
      text: line.text,
      size: line.size,
      color: line.color,
      fontFamily: line.fontFamily,
      alignment: line.alignment
    }));
  }
  
  record.backgroundColor = designData?.backgroundColor || '#FFFFFF';
  record.backingType = designData?.backing || 'pin';
  
  // Set status to saved
  record.status = 'saved';
  
  await save(record);
};

export const onSuccess: ActionOnSuccess = async ({ params, record, logger, api, connections }) => {
  // Your logic goes here
};

export const options: ActionOptions = { actionType: "create" }; 