import { useLoaderData, Outlet, useLocation } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Page, Card, Text, Box } from "@shopify/polaris";
import { NavMenu } from "../components/NavMenu";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return json({
    gadgetConfig: context.gadgetConfig,
  });
};

export default function() {
  const { gadgetConfig } = useLoaderData<typeof loader>();
  const location = useLocation();
  const path = location.pathname;

  // Only enforce Admin context for admin routes, not public routes
  const adminRoutes = ["/", "/badge-designer"]; // routes that need Shopify Admin
  const publicRoutes = ["/public/badge-designer", "/badge-designer"]; // routes that don't need Admin

  // If it's a public route, don't require Shopify Admin
  if (publicRoutes.some(route => path.startsWith(route))) {
    return <Outlet />;
  }

  // For admin routes, check if we're in Shopify Admin
  return gadgetConfig.shopifyInstallState ? (
    <>
      <NavMenu />
      <Outlet />
    </>
  ) : (
    <Unauthenticated />
  );
}

const Unauthenticated = () => {
  const { gadgetConfig } = useLoaderData<typeof loader>();

  return (
    <Page>
      <div style={{ height: "80px" }}>
        <Card padding="500">
          <Text variant="headingLg" as="h1">
            App must be viewed in the Shopify Admin
          </Text>
          <Box paddingBlockStart="200">
            <Text variant="bodyLg" as="p">
              Edit this page:{" "}
              <a
                href={`/edit/${gadgetConfig.environment}/files/web/routes/_app.tsx`}
              >
                web/routes/_app.tsx
              </a>
            </Text>
          </Box>
        </Card>
      </div>
    </Page>
  );
};
