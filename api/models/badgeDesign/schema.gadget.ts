import { FieldType, GadgetModel } from "gadget-server";

export const schema: GadgetModel = {
  type: "gadget/model/v1",
  name: "badgeDesign",
  fields: {
    // Basic design data
    designData: {
      type: FieldType.JSON,
      required: true,
      description: "Complete badge design data including lines, colors, fonts, etc."
    },
    
    // Shop association (multi-tenant)
    shopId: {
      type: FieldType.String,
      required: true,
      description: "Associated Shopify shop ID for multi-tenant data isolation"
    },
    
    // Product association
    productId: {
      type: FieldType.String,
      required: false,
      description: "Associated Shopify product ID"
    },
    
    // Design metadata
    designId: {
      type: FieldType.String,
      required: true,
      unique: true,
      description: "Unique design identifier"
    },
    
    // User association (if authenticated)
    userId: {
      type: FieldType.String,
      required: false,
      description: "User who created the design"
    },
    
    // Design status
    status: {
      type: FieldType.Enum,
      required: true,
      default: "draft",
      options: ["draft", "saved", "ordered", "archived"],
      description: "Current status of the design"
    },
    
    // Pricing information
    basePrice: {
      type: FieldType.Number,
      required: true,
      default: 9.99,
      description: "Base price for the badge"
    },
    
    backingPrice: {
      type: FieldType.Number,
      required: true,
      default: 0,
      description: "Additional price for backing type"
    },
    
    totalPrice: {
      type: FieldType.Number,
      required: true,
      description: "Total calculated price"
    },
    
    // Design summary for quick reference
    textLines: {
      type: FieldType.JSON,
      required: false,
      description: "Array of text lines for quick reference"
    },
    
    backgroundColor: {
      type: FieldType.String,
      required: false,
      description: "Background color of the badge"
    },
    
    backingType: {
      type: FieldType.String,
      required: false,
      description: "Backing type (pin, magnetic, adhesive)"
    },
    
    // Timestamps
    createdAt: {
      type: FieldType.DateTime,
      required: true,
      default: "now",
      description: "When the design was created"
    },
    
    updatedAt: {
      type: FieldType.DateTime,
      required: true,
      default: "now",
      description: "When the design was last updated"
    }
  },
  
  // Permissions
  permissions: {
    read: {
      type: "gadget/permission/v1",
      roles: ["everyone"],
      scopes: ["read"]
    },
    create: {
      type: "gadget/permission/v1",
      roles: ["everyone"],
      scopes: ["create"]
    },
    update: {
      type: "gadget/permission/v1",
      roles: ["everyone"],
      scopes: ["update"]
    },
    delete: {
      type: "gadget/permission/v1",
      roles: ["everyone"],
      scopes: ["delete"]
    }
  }
}; 