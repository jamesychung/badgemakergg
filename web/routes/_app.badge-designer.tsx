import { Page } from "@shopify/polaris";
import BadgeDesigner from "../components/BadgeDesigner";
import { useSearchParams } from "@remix-run/react";

export default function BadgeDesignerRoute() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');

  return (
    <Page title="Badge Designer">
      <div style={{ padding: "20px" }}>
        <BadgeDesigner productId={productId} />
      </div>
    </Page>
  );
} 