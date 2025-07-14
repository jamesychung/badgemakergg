import { Page } from "@shopify/polaris";
import { BadgeDesigner } from "../components/BadgeDesigner";

export default function BadgeDesignerRoute() {
  return (
    <Page title="Badge Designer">
      <div style={{ padding: "20px" }}>
        <BadgeDesigner />
      </div>
    </Page>
  );
} 