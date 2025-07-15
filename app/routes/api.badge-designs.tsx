import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const { designData } = body;

    // For now, we'll just return success
    // In a real implementation, you would save to your Gadget backend
    const designId = `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return json({
      success: true,
      designId,
      message: "Design saved successfully"
    });
  } catch (error) {
    console.error("Error saving badge design:", error);
    return json({ error: "Failed to save design" }, { status: 500 });
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const designId = url.searchParams.get("id");

  if (!designId) {
    return json({ error: "Design ID required" }, { status: 400 });
  }

  try {
    // For now, return mock data
    // In a real implementation, you would fetch from your Gadget backend
    return json({
      success: true,
      design: {
        id: designId,
        designData: {
          lines: [
            { text: "Sample Name", size: 18, color: "#000000", bold: false, italic: false, underline: false, fontFamily: "Arial", alignment: "center" },
            { text: "Sample Title", size: 13, color: "#000000", bold: false, italic: false, underline: false, fontFamily: "Arial", alignment: "center" }
          ],
          backgroundColor: "#FFFFFF",
          backing: "pin"
        },
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error("Error loading badge design:", error);
    return json({ error: "Failed to load design" }, { status: 500 });
  }
}; 