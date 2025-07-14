var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4HCBVYML.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => [
  { charset: "utf-8" },
  { title: "Badge Designer" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "description", content: "Design and customize your badges" }
], links = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/badge-designer.tsx
var badge_designer_exports = {};
__export(badge_designer_exports, {
  default: () => BadgeDesignerRoute,
  meta: () => meta2
});

// app/components/BadgeDesigner.tsx
var import_react3 = __toESM(require("react")), import_solid = require("@heroicons/react/24/solid"), import_outline = require("@heroicons/react/24/outline");

// app/utils/pdfGenerator.ts
var import_pdf_lib = require("pdf-lib");
function drawCenteredBadge({
  page,
  x,
  y,
  width,
  height,
  lines,
  font,
  color = [0, 0, 0],
  lineSpacing = 1.2
}) {
  let totalBlockHeight = 0;
  for (let i = 0; i < lines.length; i++) {
    let fontSize = lines[i].size;
    totalBlockHeight += fontSize * (i === lines.length - 1 ? 1 : lineSpacing);
  }
  let cursorY = y + (height + totalBlockHeight) / 2;
  for (let line of lines) {
    let { text, size } = line;
    cursorY -= size;
    let textWidth = font.widthOfTextAtSize(text, size), textX = x + (width - textWidth) / 2, lineColor;
    line.color ? Array.isArray(line.color) && line.color.length === 3 ? lineColor = [Number(line.color[0]), Number(line.color[1]), Number(line.color[2])] : lineColor = cssColorToRgb(line.color) : lineColor = color, page.drawText(text, {
      x: textX,
      y: cursorY,
      size,
      font,
      color: (0, import_pdf_lib.rgb)(lineColor[0], lineColor[1], lineColor[2])
    }), cursorY -= size * (lineSpacing - 1);
  }
}
function cssColorToRgb(color) {
  if (color.startsWith("rgb")) {
    let rgbArr = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    return [rgbArr[0] / 255, rgbArr[1] / 255, rgbArr[2] / 255];
  } else if (color.startsWith("#")) {
    let hex = color.replace("#", "");
    hex.length === 3 && (hex = hex.split("").map((x) => x + x).join(""));
    let num = parseInt(hex, 16);
    return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
  }
  return [0, 0, 0];
}
function cssColorToHex(color) {
  return color.startsWith("rgb") ? "#" + (color.match(/\d+/g)?.map(Number) || [0, 0, 0]).map((v) => {
    let hex = Number(v).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("") : color;
}
function extractBadgeData(element) {
  let lines = [];
  return element.querySelectorAll("span").forEach((span) => {
    let style = window.getComputedStyle(span);
    lines.push({
      text: span.textContent || "",
      size: parseInt(style.fontSize),
      color: style.color,
      bold: style.fontWeight === "bold" || parseInt(style.fontWeight) >= 700,
      italic: style.fontStyle === "italic",
      underline: style.textDecoration === "underline",
      alignment: style.textAlign
    });
  }), {
    lines,
    backgroundColor: element.style.backgroundColor || "#FFFFFF"
  };
}
var TABLE_HEADERS = [
  "",
  // Badge image/Background
  "Text & Font Size",
  "Text Color",
  "Format & Align"
], COLOR_NAMES = {
  "#000000": "Black",
  "#FFFFFF": "White",
  "#ea0c0c": "Red",
  "#0c5cea": "Blue",
  "#C0C0C0": "Silver",
  "#eac10c": "Gold",
  "#6E260E": "Brown",
  "#F0E68C": "Ivory",
  "#FFFF00": "Yellow"
};
function pxToPtRounded(px) {
  return Math.round(px * 0.75);
}
function getColorName(color) {
  let hex = cssColorToHex(color).toUpperCase();
  return COLOR_NAMES[hex] || "Custom";
}
function drawBadgeTableRow({
  page,
  rowY,
  colXs,
  rowHeight,
  badgeImage,
  backgroundColor,
  line,
  isFirstRow,
  font,
  fontBold,
  badgeLinesCount,
  badge,
  badgeBox,
  headerY,
  headerHeight,
  bufferHeight,
  textColWidth,
  colorColWidth,
  formatColWidth
}) {
  let lineGray = (0, import_pdf_lib.rgb)(0.8, 0.8, 0.8);
  if (isFirstRow ? page.drawLine({
    start: { x: colXs[1], y: rowY - rowHeight },
    end: { x: colXs[colXs.length - 1] + formatColWidth, y: rowY - rowHeight },
    thickness: 0.4,
    color: lineGray
  }) : page.drawLine({
    start: { x: colXs[0], y: rowY - rowHeight },
    end: { x: colXs[colXs.length - 1] + formatColWidth, y: rowY - rowHeight },
    thickness: 0.4,
    color: lineGray
  }), isFirstRow) {
    let badgeImgY = headerY - headerHeight + 8;
    page.drawRectangle({
      x: colXs[0] + 4,
      y: badgeImgY - 72 + 10,
      // 72pt = 1 inch
      width: 216,
      // 3 inches
      height: 72,
      // 1 inch
      color: (0, import_pdf_lib.rgb)(...cssColorToRgb(backgroundColor)),
      borderColor: (0, import_pdf_lib.rgb)(0.53, 0.53, 0.53),
      borderWidth: 1
    });
    let lines = badge.lines.map((l) => ({
      text: l.text,
      size: pxToPtRounded(l.size),
      color: l.color,
      bold: l.bold
    }));
    drawCenteredBadge({
      page,
      x: colXs[0] + 4,
      y: badgeImgY - 72 + 10,
      width: 216,
      height: 72,
      lines,
      font,
      color: cssColorToRgb(lines[0]?.color || "#000"),
      lineSpacing: 1.3
    }), page.drawRectangle({
      x: colXs[0] + 4,
      y: badgeImgY - 72 - 14 + 10,
      width: 16,
      height: 12,
      color: (0, import_pdf_lib.rgb)(...cssColorToRgb(backgroundColor)),
      borderColor: (0, import_pdf_lib.rgb)(0, 0, 0),
      borderWidth: 0.5
    }), page.drawText(getColorName(backgroundColor), {
      x: colXs[0] + 24,
      y: badgeImgY - 72 - 12 + 10,
      size: 10,
      font,
      color: (0, import_pdf_lib.rgb)(0, 0, 0)
    });
  }
  let textColor = (0, import_pdf_lib.rgb)(...cssColorToRgb(line.color)), textPt = `${line.text}, ${pxToPtRounded(line.size)}pt`, textLines = [], currentLine = "";
  for (let word of textPt.split(" ")) {
    let testLine = currentLine ? currentLine + " " + word : word;
    font.widthOfTextAtSize(testLine, 10) > textColWidth - 8 && currentLine ? (textLines.push(currentLine), currentLine = word) : currentLine = testLine;
  }
  currentLine && textLines.push(currentLine);
  let textY = rowY - rowHeight + 4 + (textLines.length - 1) * 10;
  for (let lineText of textLines)
    page.drawText(lineText, {
      x: colXs[1] + 2,
      y: textY,
      size: 10,
      font,
      color: textColor
    }), textY -= 10;
  let colorNameFontSize = 9, swatchWidth = 12, swatchHeight = 10, colorName = getColorName(line.color), colorNameWidth = font.widthOfTextAtSize(colorName, colorNameFontSize), colorNameY = rowY - rowHeight + 4, swatchX = colXs[2] + colorColWidth / 2 - swatchWidth / 2, swatchY = colorNameY + colorNameFontSize + 4;
  page.drawRectangle({
    x: swatchX,
    y: swatchY,
    width: swatchWidth,
    height: swatchHeight,
    color: textColor,
    borderColor: (0, import_pdf_lib.rgb)(0, 0, 0),
    borderWidth: 0.5
  }), page.drawText(colorName, {
    x: colXs[2] + colorColWidth / 2 - colorNameWidth / 2,
    y: colorNameY,
    size: colorNameFontSize,
    font,
    color: (0, import_pdf_lib.rgb)(0, 0, 0)
  });
  let format = [];
  line.bold && format.push("Bold"), line.italic && format.push("Italic"), line.underline && format.push("Underline");
  let formatText = format.length ? format.join(", ") : "None", alignText = line.alignment ? line.alignment.charAt(0).toUpperCase() + line.alignment.slice(1) : "Center";
  page.drawText(formatText, {
    x: colXs[3] + 2,
    y: colorNameY + colorNameFontSize + 4,
    size: 9,
    font,
    color: (0, import_pdf_lib.rgb)(0, 0, 0)
  }), page.drawText(alignText, {
    x: colXs[3] + 2,
    y: colorNameY,
    size: 9,
    font,
    color: (0, import_pdf_lib.rgb)(0, 0, 0)
  });
}
var generatePDF = async (badgeElement, multipleBadges) => {
  let pdfDoc = await import_pdf_lib.PDFDocument.create(), page = pdfDoc.addPage([595.28, 841.89]), { width: pageWidth } = page.getSize(), yPos = 805, helveticaFont = await pdfDoc.embedFont(import_pdf_lib.StandardFonts.Helvetica), helveticaBold = await pdfDoc.embedFont(import_pdf_lib.StandardFonts.HelveticaBold), margin = 36, badgeColWidth = 216 + 20, colorColWidth = 40, formatColWidth = 60, textColWidth = pageWidth - 2 * margin - badgeColWidth - colorColWidth - formatColWidth, colWidths = [badgeColWidth, textColWidth, colorColWidth, formatColWidth], colXs = [margin];
  for (let i = 0; i < colWidths.length - 1; i++)
    colXs.push(colXs[i] + colWidths[i]);
  let rowHeight = 28, headerHeight = 28, bufferHeight = 8, lightGray = (0, import_pdf_lib.rgb)(0.92, 0.92, 0.92), lineGray = (0, import_pdf_lib.rgb)(0.8, 0.8, 0.8), allBadges = [badgeElement, ...multipleBadges || []];
  allBadges.forEach((badgeEl, badgeIdx) => {
    let badge = extractBadgeData(badgeEl);
    yPos -= bufferHeight;
    let headerY = yPos;
    page.drawRectangle({ x: colXs[0], y: headerY + 6, width: colXs[colXs.length - 1] + formatColWidth - colXs[0], height: headerHeight - 8, color: lightGray });
    for (let c = 0; c < TABLE_HEADERS.length; c++) {
      let headerText = TABLE_HEADERS[c], colWidth = colWidths[c], headerLines = [], curHeader = "";
      for (let word of headerText.split(" ")) {
        let testHeader = curHeader ? curHeader + " " + word : word;
        helveticaBold.widthOfTextAtSize(testHeader, 11) > colWidth - 8 && curHeader ? (headerLines.push(curHeader), curHeader = word) : curHeader = testHeader;
      }
      curHeader && headerLines.push(curHeader);
      let headerTextY = headerY - headerHeight + 8 + (headerLines.length - 1) * 11;
      for (let lineText of headerLines)
        page.drawText(lineText, {
          x: colXs[c] + 2,
          y: headerTextY,
          size: 11,
          font: helveticaBold,
          color: (0, import_pdf_lib.rgb)(0, 0, 0)
        }), headerTextY -= 11;
      page.drawLine({
        start: { x: colXs[c], y: headerY + 6 },
        end: { x: colXs[c], y: headerY - headerHeight - rowHeight * badge.lines.length },
        thickness: 0.4,
        color: lineGray
      }), page.drawLine({
        start: { x: colXs[c], y: headerY - headerHeight },
        end: { x: colXs[c] + colWidths[c], y: headerY - headerHeight },
        thickness: 0.4,
        color: lineGray
      });
    }
    page.drawLine({
      start: { x: colXs[colXs.length - 1] + formatColWidth, y: headerY + 6 },
      end: { x: colXs[colXs.length - 1] + formatColWidth, y: headerY - headerHeight - rowHeight * badge.lines.length },
      thickness: 0.4,
      color: lineGray
    }), yPos -= headerHeight, badge.lines.forEach((line, lineIdx) => {
      drawBadgeTableRow({
        page,
        rowY: yPos,
        colXs,
        rowHeight,
        badgeImage: badge,
        // not used, but could be for future
        backgroundColor: badge.backgroundColor,
        line,
        isFirstRow: lineIdx === 0,
        font: helveticaFont,
        fontBold: helveticaBold,
        badgeLinesCount: badge.lines.length,
        badge,
        badgeBox: {},
        headerY,
        headerHeight,
        bufferHeight,
        textColWidth,
        colorColWidth,
        formatColWidth
      }), yPos -= rowHeight;
    }), yPos -= 30, yPos < 100 && badgeIdx < allBadges.length - 1 && (page = pdfDoc.addPage([595.28, 841.89]), yPos = 805);
  });
  let pdfBytes = await pdfDoc.save(), blob = new Blob([pdfBytes], { type: "application/pdf" }), link = document.createElement("a");
  link.href = URL.createObjectURL(blob), link.download = "badge-design.pdf", document.body.appendChild(link), link.click(), document.body.removeChild(link);
}, handleDownloadPDF = () => {
  let badgeElement = document.querySelector(".badge-preview"), multipleBadgeElements = Array.from(document.querySelectorAll(".badge-preview-multiple"));
  badgeElement && generatePDF(badgeElement, multipleBadgeElements);
};

// app/components/BadgeTextLinesHeader.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), BadgeTextLinesHeader = ({
  numLines,
  maxLines: maxLines2,
  onAddLine
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between mb-4 bg-white p-2 rounded-lg shadow-sm", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-semibold text-gray-700", children: "Text Lines" }, void 0, !1, {
    fileName: "app/components/BadgeTextLinesHeader.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "button",
    {
      className: "control-button bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 px-4 py-2 text-sm rounded shadow-sm z-10 relative",
      style: { minWidth: 160, maxWidth: 200 },
      onClick: onAddLine,
      disabled: numLines >= maxLines2,
      children: [
        "Add (up to ",
        maxLines2,
        " Lines)"
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/BadgeTextLinesHeader.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/BadgeTextLinesHeader.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this);

// app/constants/fonts.ts
var FONT_FAMILIES = [
  {
    value: "Arial",
    label: "Arial",
    category: "Sans-serif",
    isDefault: !0
  },
  {
    value: "Helvetica",
    label: "Helvetica",
    category: "Sans-serif"
  },
  {
    value: "Times New Roman",
    label: "Times New Roman",
    category: "Serif"
  },
  {
    value: "Georgia",
    label: "Georgia",
    category: "Serif"
  },
  {
    value: "Courier New",
    label: "Courier New",
    category: "Monospace"
  },
  {
    value: "Verdana",
    label: "Verdana",
    category: "Sans-serif"
  },
  {
    value: "Tahoma",
    label: "Tahoma",
    category: "Sans-serif"
  },
  {
    value: "Trebuchet MS",
    label: "Trebuchet MS",
    category: "Sans-serif"
  },
  {
    value: "Impact",
    label: "Impact",
    category: "Sans-serif"
  },
  {
    value: "Comic Sans MS",
    label: "Comic Sans MS",
    category: "Casual"
  }
];
var DEFAULT_FONT = FONT_FAMILIES.find((font) => font.isDefault)?.value || "Arial";

// app/constants/badge.ts
var BADGE_CONSTANTS = {
  // Layout
  MAX_LINES: 4,
  BADGE_WIDTH: 300,
  BADGE_HEIGHT: 100,
  MIN_FONT_SIZE: 8,
  MAX_FONT_SIZE: 72,
  LINE_HEIGHT_MULTIPLIER: 1.3,
  // Defaults
  DEFAULT_FONT,
  DEFAULT_COLOR: "#000000",
  DEFAULT_BACKGROUND: "#FFFFFF",
  DEFAULT_BACKING: "pin",
  // Alignment options
  ALIGNMENT_OPTIONS: {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
  },
  // Backing options
  BACKING_OPTIONS: [
    { value: "pin", label: "Pin (Included)" },
    { value: "magnetic", label: "Magnetic (+$2.00)" },
    { value: "adhesive", label: "Adhesive (+$1.00)" }
  ],
  // Pricing
  BASE_PRICE: 9.99,
  BACKING_PRICES: {
    magnetic: 2,
    adhesive: 1,
    pin: 0
  },
  // Text formatting
  DEFAULT_LINE: {
    text: "Line Text",
    size: 13,
    color: "#000000",
    bold: !1,
    italic: !1,
    underline: !1,
    fontFamily: DEFAULT_FONT,
    alignment: "center"
  },
  // Initial badge state
  INITIAL_BADGE: {
    lines: [
      {
        text: "Your Name",
        size: 18,
        color: "#000000",
        bold: !1,
        italic: !1,
        underline: !1,
        fontFamily: DEFAULT_FONT,
        alignment: "center"
      },
      {
        text: "Title",
        size: 13,
        color: "#000000",
        bold: !1,
        italic: !1,
        underline: !1,
        fontFamily: DEFAULT_FONT,
        alignment: "center"
      }
    ],
    backgroundColor: "#FFFFFF",
    backing: "pin"
  }
};

// app/constants/colors.ts
var FONT_COLORS = [
  { value: "#000000", name: "Black", ring: "ring-gray-900" },
  { value: "#FFFFFF", name: "White", ring: "ring-white" },
  { value: "#ea0c0c", name: "Red", ring: "ring-red-500" },
  { value: "#0c5cea", name: "Blue", ring: "ring-blue-500" },
  { value: "#C0C0C0", name: "Silver", ring: "ring-gray-300" },
  { value: "#eac10c", name: "Gold", ring: "ring-yellow-400" },
  { value: "#6E260E", name: "Brown", ring: "ring-brown-700" },
  { value: "#F0E68C", name: "Ivory", ring: "ring-yellow-200" }
];

// app/components/BadgeEditorPanel.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), BadgeEditorPanel = ({
  badge,
  onLineChange,
  onAlignmentChange,
  onBackgroundColorChange,
  onRemoveLine,
  showRemove,
  maxLines: maxLines2,
  addLineButton,
  resetButton,
  multiBadgeButton,
  editable = !0
}) => {
  let align = { left: "flex-start", center: "center", right: "flex-end" }[badge.lines[0].alignment];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full max-w-2xl mx-auto flex flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-4", children: badge.lines.map((line, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-lg p-4 flex flex-col gap-2 relative w-full min-w-0", style: { backgroundColor: "#d5e0f1" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-full items-center gap-4 mb-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "font-semibold text-sm", children: [
          "Line ",
          idx + 1,
          " Text"
        ] }, void 0, !0, {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Color:" }, void 0, !1, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          FONT_COLORS.map((fc) => {
            let isDisabled = fc.value === badge.backgroundColor;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "button",
                {
                  className: `color-button w-5 h-5 lg:w-6 lg:h-6 ${line.color === fc.value ? "ring-2 ring-offset-2 " + fc.ring : ""} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`,
                  style: { backgroundColor: fc.value },
                  onClick: () => onLineChange(idx, { color: fc.value }),
                  disabled: isDisabled || !editable,
                  title: isDisabled ? "Cannot match background" : fc.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeEditorPanel.tsx",
                  lineNumber: 52,
                  columnNumber: 23
                },
                this
              ),
              isDisabled && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { width: "14", height: "14", viewBox: "0 0 20 20", className: "lg:w-5 lg:h-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("line", { x1: "3", y1: "17", x2: "17", y2: "3", stroke: "#b91c1c", strokeWidth: "2.5" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 61,
                columnNumber: 101
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 61,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 60,
                columnNumber: 25
              }, this)
            ] }, fc.value, !0, {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 51,
              columnNumber: 21
            }, this);
          })
        ] }, void 0, !0, {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BadgeEditorPanel.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "input",
        {
          type: "text",
          className: "border rounded px-3 py-2 text-base w-full min-w-[120px]",
          style: { backgroundColor: "#fff" },
          value: line.text,
          onChange: (e) => onLineChange(idx, { text: e.target.value }),
          placeholder: `Line ${idx + 1}`,
          disabled: !editable
        },
        void 0,
        !1,
        {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 69,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-2 items-center mt-2 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-wrap gap-2 items-center min-w-0 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Font:" }, void 0, !1, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "select",
            {
              className: "border rounded px-2 py-1 text-sm",
              value: line.fontFamily,
              onChange: (e) => onLineChange(idx, { fontFamily: e.target.value }),
              disabled: !editable,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "Arial", children: "Arial" }, void 0, !1, {
                  fileName: "app/components/BadgeEditorPanel.tsx",
                  lineNumber: 89,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "Helvetica", children: "Helvetica" }, void 0, !1, {
                  fileName: "app/components/BadgeEditorPanel.tsx",
                  lineNumber: 90,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "Roboto", children: "Roboto" }, void 0, !1, {
                  fileName: "app/components/BadgeEditorPanel.tsx",
                  lineNumber: 91,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "Open Sans", children: "Open Sans" }, void 0, !1, {
                  fileName: "app/components/BadgeEditorPanel.tsx",
                  lineNumber: 92,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "Verdana", children: "Verdana" }, void 0, !1, {
                  fileName: "app/components/BadgeEditorPanel.tsx",
                  lineNumber: 93,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 83,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Format:" }, void 0, !1, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 98,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: `control-button w-7 h-7 flex items-center justify-center ${line.bold ? "bg-gray-100 border-gray-400" : ""}`,
              onClick: () => onLineChange(idx, { bold: !line.bold }),
              title: "Bold",
              disabled: !editable,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-bold text-lg", children: "B" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 105,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 99,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: `control-button w-7 h-7 flex items-center justify-center ${line.italic ? "bg-gray-100 border-gray-400" : ""}`,
              onClick: () => onLineChange(idx, { italic: !line.italic }),
              title: "Italic",
              disabled: !editable,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "italic text-lg", children: "I" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 107,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: `control-button w-7 h-7 flex items-center justify-center ${line.underline ? "bg-gray-100 border-gray-400" : ""}`,
              onClick: () => onLineChange(idx, { underline: !line.underline }),
              title: "Underline",
              disabled: !editable,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "underline text-lg", children: "U" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 115,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Align:" }, void 0, !1, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: `control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === "left" ? "bg-gray-100 border-gray-400" : ""}`,
              onClick: () => onAlignmentChange(idx, "left"),
              title: "Align Left",
              disabled: !editable,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 6h16M4 12h10M4 18h12" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 134,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 133,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 127,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: `control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === "center" ? "bg-gray-100 border-gray-400" : ""}`,
              onClick: () => onAlignmentChange(idx, "center"),
              title: "Align Center",
              disabled: !editable,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 6h16M8 12h8M6 18h12" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 144,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 143,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 137,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              className: `control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === "right" ? "bg-gray-100 border-gray-400" : ""}`,
              onClick: () => onAlignmentChange(idx, "right"),
              title: "Align Right",
              disabled: !editable,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 6h16M12 12h8M4 18h16" }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 154,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 153,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 147,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Size" }, void 0, !1, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 160,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                type: "button",
                className: "control-button w-6 h-6 flex items-center justify-center text-sm p-0",
                onClick: () => onLineChange(idx, { size: Math.max(BADGE_CONSTANTS.MIN_FONT_SIZE, line.size - 1) }),
                disabled: line.size <= BADGE_CONSTANTS.MIN_FONT_SIZE || !editable,
                children: "-"
              },
              void 0,
              !1,
              {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 162,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "w-6 text-center text-sm", children: line.size }, void 0, !1, {
              fileName: "app/components/BadgeEditorPanel.tsx",
              lineNumber: 168,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                type: "button",
                className: "control-button w-6 h-6 flex items-center justify-center text-sm p-0",
                onClick: () => onLineChange(idx, { size: Math.min(BADGE_CONSTANTS.MAX_FONT_SIZE, line.size + 1) }),
                disabled: line.size >= BADGE_CONSTANTS.MAX_FONT_SIZE || !editable,
                children: "+"
              },
              void 0,
              !1,
              {
                fileName: "app/components/BadgeEditorPanel.tsx",
                lineNumber: 169,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 161,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BadgeEditorPanel.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/BadgeEditorPanel.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      showRemove && badge.lines.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          className: "absolute top-2 right-2 control-button w-5 h-5 flex items-center justify-center bg-red-100 text-red-700 border-red-300 hover:bg-red-200",
          onClick: () => onRemoveLine(idx),
          disabled: !editable,
          title: "Remove line",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: { fontSize: 14, color: "#b91c1c" }, children: "X" }, void 0, !1, {
            fileName: "app/components/BadgeEditorPanel.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/BadgeEditorPanel.tsx",
          lineNumber: 180,
          columnNumber: 15
        },
        this
      )
    ] }, idx, !0, {
      fileName: "app/components/BadgeEditorPanel.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/components/BadgeEditorPanel.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row gap-2 justify-end mt-2", children: [
      addLineButton,
      multiBadgeButton,
      resetButton
    ] }, void 0, !0, {
      fileName: "app/components/BadgeEditorPanel.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BadgeEditorPanel.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};

// app/components/BadgeEditPanel.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), BadgeEditPanel = ({
  badge,
  maxLines: maxLines2,
  onLineChange,
  onAlignmentChange,
  onBackgroundColorChange,
  onRemoveLine,
  addLine,
  showRemove = !0,
  editable = !0
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    BadgeTextLinesHeader,
    {
      numLines: badge.lines.length,
      maxLines: maxLines2,
      onAddLine: addLine
    },
    void 0,
    !1,
    {
      fileName: "app/components/BadgeEditPanel.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    BadgeEditorPanel,
    {
      badge,
      onLineChange,
      onAlignmentChange,
      onBackgroundColorChange,
      onRemoveLine,
      showRemove,
      maxLines: maxLines2,
      addLineButton: null,
      resetButton: null,
      multiBadgeButton: null,
      editable
    },
    void 0,
    !1,
    {
      fileName: "app/components/BadgeEditPanel.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/BadgeEditPanel.tsx",
  lineNumber: 30,
  columnNumber: 3
}, this);

// app/components/BadgeDesigner.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), backgroundColors = [
  { name: "Black", value: "#000000", ring: "ring-gray-600" },
  { name: "White", value: "#FFFFFF", ring: "ring-gray-300" },
  { name: "Red", value: "#ea0c0c", ring: "ring-red-600" },
  { name: "Blue", value: "#0c5cea", ring: "ring-blue-700" },
  { name: "Silver", value: "#C0C0C0", ring: "ring-gray-400" },
  { name: "Gold", value: "#eac10c", ring: "ring-yellow-400" },
  { name: "Brown", value: "#6E260E", ring: "ring-yellow-900" },
  { name: "Ivory", value: "#F0E68C", ring: "ring-yellow-200" }
], fontColors = [
  { name: "Black", value: "#000000", ring: "ring-gray-400" },
  { name: "White", value: "#FFFFFF", ring: "ring-gray-300" },
  { name: "Red", value: "#ea0c0c", ring: "ring-red-600" },
  { name: "Yellow", value: "#FFFF00", ring: "ring-yellow-400" },
  { name: "Gold", value: "#eac10c", ring: "ring-yellow-400" },
  { name: "Silver", value: "#C0C0C0", ring: "ring-gray-400" },
  { name: "Blue", value: "#0c5cea", ring: "ring-blue-700" }
];
var maxLines = 4, badgeWidth = 300, badgeHeight = 100, MIN_FONT_SIZE = 8, BadgeDesigner = ({ productId: _productId }) => {
  let [badge, setBadge] = (0, import_react3.useState)({
    lines: [
      { text: "Your Name", size: 18, color: "#000000", bold: !1, italic: !1, underline: !1, fontFamily: "Arial", alignment: "center" },
      { text: "Title", size: 13, color: "#000000", bold: !1, italic: !1, underline: !1, fontFamily: "Arial", alignment: "center" }
    ],
    backgroundColor: "#FFFFFF",
    backing: "pin"
  }), [showCsvModal, setShowCsvModal] = (0, import_react3.useState)(!1), [csvText, setCsvText] = (0, import_react3.useState)(""), [csvPreview, setCsvPreview] = (0, import_react3.useState)([]), [csvError, setCsvError] = (0, import_react3.useState)(""), [multipleBadges, setMultipleBadges] = (0, import_react3.useState)([]), [editModalIndex, setEditModalIndex] = (0, import_react3.useState)(null), measureTextWidth = (text, fontSize, fontFamily, bold, italic) => {
    let context = document.createElement("canvas").getContext("2d");
    return context ? (context.font = `${bold ? "bold " : ""}${italic ? "italic " : ""}${fontSize}px ${fontFamily}`, context.measureText(text).width) : 0;
  }, getMaxCharsForMinFont = (fontFamily, bold, italic) => {
    let fontSize = MIN_FONT_SIZE, testStr = "", width = 0;
    for (; testStr += "W", width = measureTextWidth(testStr, fontSize, fontFamily, bold, italic), !(width > badgeWidth - 24); )
      ;
    return Math.max(testStr.length - 1, 8);
  }, updateLine = (index, changes) => {
    let newLines = badge.lines.map((l, i) => {
      if (i !== index)
        return {
          ...l,
          alignment: typeof l.alignment == "string" && (l.alignment === "left" || l.alignment === "center" || l.alignment === "right") ? l.alignment : "center"
        };
      let updatedLine = { ...l, ...changes };
      if (typeof changes.text < "u") {
        let fontSize = updatedLine.size, textWidth = measureTextWidth(updatedLine.text, fontSize, updatedLine.fontFamily, updatedLine.bold, updatedLine.italic);
        for (; textWidth > badgeWidth - 24 && fontSize > MIN_FONT_SIZE; )
          fontSize--, textWidth = measureTextWidth(updatedLine.text, fontSize, updatedLine.fontFamily, updatedLine.bold, updatedLine.italic);
        updatedLine.size = fontSize;
      }
      return typeof updatedLine.alignment < "u" ? updatedLine.alignment = typeof updatedLine.alignment == "string" && (updatedLine.alignment === "left" || updatedLine.alignment === "center" || updatedLine.alignment === "right") ? updatedLine.alignment : "center" : updatedLine.alignment = "center", updatedLine;
    });
    newLines.reduce((sum, l) => sum + l.size * 1.3, 0) > badgeHeight - 8, setBadge({ ...badge, lines: newLines });
  }, addLine = () => {
    badge.lines.length < maxLines && setBadge({
      ...badge,
      lines: [
        ...badge.lines,
        { text: "Line Text", size: 13, color: "#000000", bold: !1, italic: !1, underline: !1, fontFamily: "Arial", alignment: "center" }
      ]
    });
  }, removeLine = (index) => {
    if (badge.lines.length > 1) {
      let newLines = [...badge.lines];
      newLines.splice(index, 1), setBadge({ ...badge, lines: newLines.map((l) => ({
        ...l,
        alignment: typeof l.alignment == "string" && (l.alignment === "left" || l.alignment === "center" || l.alignment === "right") ? l.alignment : "center"
      })) });
    }
  }, resetBadge = () => {
    setBadge({
      lines: [
        { text: "Your Name", size: 18, color: "#000000", bold: !1, italic: !1, underline: !1, fontFamily: "Arial", alignment: "center" },
        { text: "Title", size: 13, color: "#000000", bold: !1, italic: !1, underline: !1, fontFamily: "Arial", alignment: "center" }
      ],
      backgroundColor: "#FFFFFF",
      backing: "pin"
    });
  }, saveBadge = () => {
    alert("Badge design saved! Data would be sent to cart in a real implementation.");
  }, alignmentIcons = [
    { value: "left", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h8m-8 6h16" }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 177,
      columnNumber: 123
    }, this) }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 177,
      columnNumber: 28
    }, this) },
    { value: "center", icon: (
      // Standard center-align icon
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("line", { x1: "6", y1: "7", x2: "18", y2: "7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 181,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("line", { x1: "8", y1: "12", x2: "16", y2: "12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 182,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("line", { x1: "4", y1: "17", x2: "20", y2: "17", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 183,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this)
    ) },
    { value: "right", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M12 12h8m-16 6h16" }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 186,
      columnNumber: 124
    }, this) }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 186,
      columnNumber: 29
    }, this) }
  ], backingOptions = [
    { value: "pin", label: "Pin (Included)" },
    { value: "magnetic", label: "Magnetic (+$2.00)" },
    { value: "adhesive", label: "Adhesive (+$1.00)" }
  ], basePrice = 9.99, backingPrice = badge.backing === "magnetic" ? 2 : badge.backing === "adhesive" ? 1 : 0, totalPrice = (basePrice + backingPrice).toFixed(2);
  function parseCsv(text) {
    try {
      setCsvError("");
      let rows = text.trim().split(/\r?\n/).map((row) => row.split(","));
      if (setCsvPreview(rows), rows.length > 0 && rows[0].length > 0) {
        let badges = rows.map((row) => ({
          ...badge,
          lines: row.map((cell, i) => {
            let baseLine = badge.lines[i] || badge.lines[0];
            return {
              ...baseLine,
              text: cell || "",
              size: i === 0 ? 18 : 13,
              alignment: typeof baseLine.alignment == "string" && (baseLine.alignment === "left" || baseLine.alignment === "center" || baseLine.alignment === "right") ? baseLine.alignment : "center"
            };
          })
        }));
        setMultipleBadges(badges);
      }
    } catch {
      setCsvError("Invalid CSV format."), setCsvPreview([]), setMultipleBadges([]);
    }
  }
  function handleCsvFile(e) {
    let file = e.target.files?.[0];
    if (!file)
      return;
    let reader = new FileReader();
    reader.onload = (event) => {
      let text = event.target?.result;
      setCsvText(text), parseCsv(text);
    }, reader.readAsText(file);
  }
  let BadgeEditorPanel2 = ({
    badge: badge2,
    onLineChange,
    onAlignmentChange,
    onBackgroundColorChange,
    onRemoveLine,
    showRemove,
    maxLines: maxLines2,
    addLineButton,
    resetButton,
    multiBadgeButton,
    editable = !0
  }) => {
    let align = { left: "flex-start", center: "center", right: "flex-end" }[badge2.lines[0].alignment];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full max-w-2xl mx-auto flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-4", children: badge2.lines.map((line, idx) => {
        let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
        return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-lg p-4 flex flex-col gap-2 relative w-full min-w-0", style: { backgroundColor: "#d5e0f1" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full items-center gap-4 mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "font-semibold text-sm", children: [
              "Line ",
              idx + 1,
              " Text"
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 270,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Color:" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 272,
                columnNumber: 21
              }, this),
              fontColors.map((fc) => {
                let isDisabled = fc.value === badge2.backgroundColor;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "relative inline-block", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "button",
                    {
                      className: `color-button w-5 h-5 lg:w-6 lg:h-6 ${line.color === fc.value ? "ring-2 ring-offset-2 " + fc.ring : ""} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`,
                      style: { backgroundColor: fc.value },
                      onClick: (e) => onLineChange(idx, { color: fc.value }),
                      disabled: isDisabled || !editable,
                      title: isDisabled ? "Cannot match background" : fc.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 277,
                      columnNumber: 27
                    },
                    this
                  ),
                  isDisabled && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { width: "14", height: "14", viewBox: "0 0 20 20", className: "lg:w-5 lg:h-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("line", { x1: "3", y1: "17", x2: "17", y2: "3", stroke: "#b91c1c", strokeWidth: "2.5" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 286,
                    columnNumber: 105
                  }, this) }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 286,
                    columnNumber: 31
                  }, this) }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 285,
                    columnNumber: 29
                  }, this)
                ] }, fc.value, !0, {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 276,
                  columnNumber: 25
                }, this);
              })
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 271,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 269,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              type: "text",
              className: "border rounded px-3 py-2 text-base w-full min-w-[120px]",
              style: { backgroundColor: "#fff" },
              value: line.text,
              onChange: (e) => onLineChange(idx, { text: e.target.value }),
              placeholder: `Line ${idx + 1}`,
              disabled: !editable
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 294,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-2 items-center mt-2 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap gap-2 items-center min-w-0 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Font:" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 307,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "select",
                {
                  className: "border rounded px-2 py-1 text-sm",
                  value: line.fontFamily,
                  onChange: (e) => onLineChange(idx, { fontFamily: e.target.value }),
                  disabled: !editable,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Arial", children: "Arial" }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 314,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Helvetica", children: "Helvetica" }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 315,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Roboto", children: "Roboto" }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 316,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Open Sans", children: "Open Sans" }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 317,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "Verdana", children: "Verdana" }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 318,
                      columnNumber: 25
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 308,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 306,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Format:" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 323,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  className: `control-button w-7 h-7 flex items-center justify-center ${line.bold ? "bg-gray-100 border-gray-400" : ""}`,
                  onClick: (e) => {
                    e.preventDefault(), onLineChange(idx, { bold: !line.bold });
                  },
                  title: "Bold",
                  disabled: !editable,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold text-lg", children: "B" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 330,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 324,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  className: `control-button w-7 h-7 flex items-center justify-center ${line.italic ? "bg-gray-100 border-gray-400" : ""}`,
                  onClick: (e) => {
                    e.preventDefault(), onLineChange(idx, { italic: !line.italic });
                  },
                  title: "Italic",
                  disabled: !editable,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "italic text-lg", children: "I" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 338,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 332,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  className: `control-button w-7 h-7 flex items-center justify-center ${line.underline ? "bg-gray-100 border-gray-400" : ""}`,
                  onClick: (e) => {
                    e.preventDefault(), onLineChange(idx, { underline: !line.underline });
                  },
                  title: "Underline",
                  disabled: !editable,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "underline text-lg", children: "U" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 346,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 340,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 322,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Align:" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 351,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  className: `control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === "left" ? "bg-gray-100 border-gray-400" : ""}`,
                  onClick: (e) => {
                    e.preventDefault(), onAlignmentChange(idx, "left");
                  },
                  title: "Align Left",
                  disabled: !editable,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 6h16M4 12h10M4 18h12" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 359,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 358,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 352,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  className: `control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === "center" ? "bg-gray-100 border-gray-400" : ""}`,
                  onClick: (e) => {
                    e.preventDefault(), onAlignmentChange(idx, "center");
                  },
                  title: "Align Center",
                  disabled: !editable,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 6h16M8 12h8M6 18h12" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 369,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 368,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 362,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  className: `control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === "right" ? "bg-gray-100 border-gray-400" : ""}`,
                  onClick: (e) => {
                    e.preventDefault(), onAlignmentChange(idx, "right");
                  },
                  title: "Align Right",
                  disabled: !editable,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 6h16M12 12h8M4 18h16" }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 379,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 378,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 372,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 350,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-1 items-center min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-sm mr-1", children: "Size" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 385,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "control-button w-6 h-6 flex items-center justify-center text-sm p-0",
                    onClick: (e) => {
                      e.preventDefault(), onLineChange(idx, { size: Math.max(MIN_FONT_SIZE, line.size - 1) });
                    },
                    disabled: line.size <= MIN_FONT_SIZE || !editable,
                    children: "-"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 387,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "w-6 text-center text-sm", children: line.size }, void 0, !1, {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 393,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "control-button w-6 h-6 flex items-center justify-center text-sm p-0",
                    onClick: (e) => {
                      e.preventDefault(), onLineChange(idx, { size: Math.min(72, line.size + 1) });
                    },
                    disabled: line.size >= 72 || !editable,
                    children: "+"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 394,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 386,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 384,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 304,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 303,
            columnNumber: 17
          }, this),
          showRemove && badge2.lines.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "button",
            {
              className: "absolute top-2 right-2 control-button w-5 h-5 flex items-center justify-center bg-red-100 text-red-700 border-red-300 hover:bg-red-200",
              onClick: (e) => {
                e.preventDefault(), onRemoveLine(idx);
              },
              disabled: !editable,
              title: "Remove line",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { style: { fontSize: 14, color: "#b91c1c" }, children: "X" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 411,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 405,
              columnNumber: 19
            },
            this
          )
        ] }, idx, !0, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 268,
          columnNumber: 15
        }, this);
      }) }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row gap-2 justify-end mt-2", children: [
        addLineButton,
        multiBadgeButton,
        resetButton
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 419,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 259,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col md:flex-row bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg mx-auto max-w-6xl min-h-[600px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full pr-4 mb-4 overflow-y-auto", style: { maxHeight: "90vh" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "section-container mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold text-gray-800", children: "Customize Your Badge" }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 435,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-xl font-bold text-red-600", children: "1x3 Badge" }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 436,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 434,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            onClick: handleDownloadPDF,
            className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
            children: "Download PDF"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 438,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 433,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row gap-6 items-start w-full mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-start justify-center min-w-[120px] pr-2", style: { alignSelf: "flex-start" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-gray-700 mb-2", children: "Background Color" }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 450,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-4 grid-rows-2 gap-2", children: backgroundColors.map((bg) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "button",
            {
              className: `color-button ${badge.backgroundColor === bg.value ? "ring-2 ring-offset-2 " + bg.ring : ""}`,
              style: { backgroundColor: bg.value },
              onClick: (e) => {
                e.preventDefault(), setBadge({ ...badge, backgroundColor: bg.value });
              },
              title: bg.name
            },
            bg.value,
            !1,
            {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 453,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 451,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 449,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center rounded border w-full max-w-[300px] badge-preview", style: {
          height: badgeHeight,
          background: badge.backgroundColor,
          overflow: "hidden",
          position: "relative",
          border: "2px solid #888"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "div",
          {
            className: "w-full h-full flex flex-col justify-center items-center px-4",
            style: { textAlign: badge.lines[0].alignment || "center" },
            children: badge.lines.map((line, idx) => {
              let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
              return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "span",
                {
                  style: {
                    fontSize: line.size,
                    color: line.color,
                    fontWeight: line.bold ? "bold" : "normal",
                    fontStyle: line.italic ? "italic" : "normal",
                    textDecoration: line.underline ? "underline" : "none",
                    fontFamily: line.fontFamily,
                    whiteSpace: "nowrap",
                    margin: line.alignment === "left" ? "0 auto 0 0" : line.alignment === "right" ? "0 0 0 auto" : "0 auto",
                    lineHeight: 1.3,
                    textAlign: alignment
                  },
                  children: line.text
                },
                idx,
                !1,
                {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 481,
                  columnNumber: 21
                },
                this
              );
            })
          },
          void 0,
          !1,
          {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 471,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 464,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 447,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        BadgeEditPanel,
        {
          badge,
          maxLines,
          onLineChange: updateLine,
          onAlignmentChange: (index, alignment) => setBadge({
            ...badge,
            lines: badge.lines.map((l, i) => i === index ? { ...l, alignment } : l)
          }),
          onBackgroundColorChange: (backgroundColor) => setBadge({ ...badge, backgroundColor }),
          onRemoveLine: removeLine,
          addLine,
          showRemove: !0,
          editable: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 505,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end items-center gap-2 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            className: "control-button flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-400",
            onClick: (e) => {
              e.preventDefault(), resetBadge();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_solid.ArrowPathIcon, { className: "w-5 h-5" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 524,
                columnNumber: 15
              }, this),
              "Reset"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 520,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            className: "control-button bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 text-sm",
            style: { minWidth: 120 },
            onClick: (e) => {
              e.preventDefault(), setShowCsvModal(!0);
            },
            children: "Add Multiple Badges"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 527,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 519,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end mt-2 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow",
          onClick: (e) => {
            e.preventDefault(), saveBadge();
          },
          children: "Save"
        },
        void 0,
        !1,
        {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 536,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 535,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 432,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 431,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full md:w-1/2 md:pl-3 flex flex-col items-center", children: multipleBadges.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold mb-4", children: "Badge Preview" }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 549,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-6 w-full items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row items-center gap-2 w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center justify-center mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-lg font-bold mb-2", style: { width: 32, textAlign: "center" }, children: "1." }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 555,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 554,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center w-full max-w-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "div",
            {
              className: "flex items-center justify-center rounded border w-full max-w-[300px]",
              style: { height: badgeHeight, background: badge.backgroundColor, overflow: "hidden", position: "relative", border: "2px solid #888" },
              children: (() => {
                let align = { left: "flex-start", center: "center", right: "flex-end" }[badge.lines[0].alignment];
                return badge.lines.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "div",
                  {
                    className: `w-full h-full flex flex-col items-${align} justify-center px-4`,
                    style: { textAlign: badge.lines[0].alignment || "center" },
                    children: badge.lines.map((line, idx) => {
                      let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "span",
                        {
                          style: {
                            fontSize: line.size,
                            color: line.color,
                            fontWeight: line.bold ? "bold" : "normal",
                            fontStyle: line.italic ? "italic" : "normal",
                            textDecoration: line.underline ? "underline" : "none",
                            fontFamily: line.fontFamily,
                            whiteSpace: "nowrap",
                            margin: line.alignment === "left" ? "0 auto 0 0" : line.alignment === "right" ? "0 0 0 auto" : "0 auto",
                            lineHeight: 1,
                            textAlign: alignment
                          },
                          children: line.text
                        },
                        idx,
                        !1,
                        {
                          fileName: "app/components/BadgeDesigner.tsx",
                          lineNumber: 578,
                          columnNumber: 33
                        },
                        this
                      );
                    })
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 568,
                    columnNumber: 27
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "div",
                  {
                    className: "w-full h-full flex flex-col justify-center items-center px-4",
                    style: { textAlign: "center" },
                    children: badge.lines.map((line, idx) => {
                      let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "span",
                        {
                          style: {
                            fontSize: line.size,
                            color: line.color,
                            fontWeight: line.bold ? "bold" : "normal",
                            fontStyle: line.italic ? "italic" : "normal",
                            textDecoration: line.underline ? "underline" : "none",
                            fontFamily: line.fontFamily,
                            whiteSpace: "nowrap",
                            margin: line.alignment === "left" ? "0 auto 0 0" : line.alignment === "right" ? "0 0 0 auto" : "0 auto",
                            lineHeight: 1.3,
                            textAlign: alignment
                          },
                          children: line.text
                        },
                        idx,
                        !1,
                        {
                          fileName: "app/components/BadgeDesigner.tsx",
                          lineNumber: 611,
                          columnNumber: 31
                        },
                        this
                      );
                    })
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 601,
                    columnNumber: 25
                  },
                  this
                );
              })()
            },
            void 0,
            !1,
            {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 559,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 558,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 552,
          columnNumber: 15
        }, this),
        multipleBadges.map((b, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.default.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row items-center gap-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center justify-center mr-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-lg font-bold mb-2", style: { width: 32, textAlign: "center" }, children: [
                i + 2,
                "."
              ] }, void 0, !0, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 642,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "control-button p-1 bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 flex items-center justify-center", style: { width: 28, height: 28 }, onClick: (e) => {
                e.preventDefault(), setEditModalIndex(i);
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_solid.ArrowPathIcon, { className: "w-4 h-4" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 644,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 643,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-2" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 646,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "control-button p-1 bg-red-100 text-red-700 border-red-300 hover:bg-red-200 flex items-center justify-center", style: { width: 28, height: 28 }, onClick: (e) => {
                e.preventDefault(), setMultipleBadges(multipleBadges.filter((_, idx) => idx !== i));
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { style: { fontSize: 20, color: "#b91c1c" }, children: "X" }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 648,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 647,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 641,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center w-full max-w-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                className: "flex items-center justify-center rounded border w-full max-w-[300px] badge-preview-multiple",
                style: { height: badgeHeight, background: b.backgroundColor, overflow: "hidden", position: "relative", border: "2px solid #888" },
                children: (() => {
                  let align = { left: "flex-start", center: "center", right: "flex-end" }[b.lines[0].alignment];
                  return b.lines.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "div",
                    {
                      className: `w-full h-full flex flex-col items-${align} justify-center px-4`,
                      style: { textAlign: b.lines[0].alignment || "center" },
                      children: b.lines.map((line, idx) => {
                        let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
                        return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "span",
                          {
                            style: {
                              fontSize: line.size,
                              color: line.color,
                              fontWeight: line.bold ? "bold" : "normal",
                              fontStyle: line.italic ? "italic" : "normal",
                              textDecoration: line.underline ? "underline" : "none",
                              fontFamily: line.fontFamily,
                              whiteSpace: "nowrap",
                              margin: line.alignment === "left" ? "0 auto 0 0" : line.alignment === "right" ? "0 0 0 auto" : "0 auto",
                              lineHeight: 1,
                              textAlign: alignment
                            },
                            children: line.text
                          },
                          idx,
                          !1,
                          {
                            fileName: "app/components/BadgeDesigner.tsx",
                            lineNumber: 672,
                            columnNumber: 37
                          },
                          this
                        );
                      })
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 662,
                      columnNumber: 31
                    },
                    this
                  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "div",
                    {
                      className: "w-full h-full flex flex-col justify-center items-center px-4",
                      style: { textAlign: void 0 },
                      children: b.lines.map((line, idx) => {
                        let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
                        return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "span",
                          {
                            style: {
                              fontSize: line.size,
                              color: line.color,
                              fontWeight: line.bold ? "bold" : "normal",
                              fontStyle: line.italic ? "italic" : "normal",
                              textDecoration: line.underline ? "underline" : "none",
                              fontFamily: line.fontFamily,
                              whiteSpace: "nowrap",
                              margin: line.alignment === "left" ? "0 auto 0 0" : line.alignment === "right" ? "0 0 0 auto" : "0 auto",
                              lineHeight: 1.3,
                              textAlign: alignment
                            },
                            children: line.text
                          },
                          idx,
                          !1,
                          {
                            fileName: "app/components/BadgeDesigner.tsx",
                            lineNumber: 705,
                            columnNumber: 35
                          },
                          this
                        );
                      })
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 695,
                      columnNumber: 29
                    },
                    this
                  );
                })()
              },
              void 0,
              !1,
              {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 653,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 652,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 639,
            columnNumber: 19
          }, this),
          editModalIndex === i && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "button",
              {
                className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl",
                onClick: (e) => {
                  e.preventDefault(), setEditModalIndex(null);
                },
                "aria-label": "Close",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_outline.XMarkIcon, { className: "w-6 h-6" }, void 0, !1, {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 739,
                  columnNumber: 27
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 734,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold mb-2", children: "Edit Badge" }, void 0, !1, {
              fileName: "app/components/BadgeDesigner.tsx",
              lineNumber: 741,
              columnNumber: 25
            }, this),
            (() => {
              let badgeToEdit = multipleBadges[editModalIndex];
              return badgeToEdit ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row gap-6 items-start w-full justify-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-end justify-center min-w-[120px] pr-2", style: { alignSelf: "center" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-sm mb-1", children: "Background Color" }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 751,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-4 grid-rows-2 gap-2", children: backgroundColors.map((bg) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "button",
                      {
                        className: `color-button ${badgeToEdit.backgroundColor === bg.value ? "ring-2 ring-offset-2 " + bg.ring : ""}`,
                        style: { backgroundColor: bg.value },
                        onClick: (e) => {
                          e.preventDefault();
                          let newBadges = [...multipleBadges];
                          newBadges[editModalIndex] = { ...badgeToEdit, backgroundColor: bg.value }, setMultipleBadges(newBadges);
                        }
                      },
                      bg.value,
                      !1,
                      {
                        fileName: "app/components/BadgeDesigner.tsx",
                        lineNumber: 754,
                        columnNumber: 39
                      },
                      this
                    )) }, void 0, !1, {
                      fileName: "app/components/BadgeDesigner.tsx",
                      lineNumber: 752,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 750,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center rounded border w-full max-w-[300px]", style: { height: badgeHeight, background: badgeToEdit.backgroundColor, overflow: "hidden", position: "relative", border: "2px solid #888" }, children: (() => {
                    let align = { left: "flex-start", center: "center", right: "flex-end" }[badgeToEdit.lines[0].alignment];
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "div",
                      {
                        className: `w-full h-full flex flex-col justify-center items-${align} px-4`,
                        style: { textAlign: badgeToEdit.lines[0].alignment || "center" },
                        children: badgeToEdit.lines.map((line, idx) => {
                          let alignment = line.alignment === "left" || line.alignment === "center" || line.alignment === "right" ? line.alignment : "center";
                          return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                            "span",
                            {
                              style: {
                                fontSize: line.size,
                                color: line.color,
                                fontWeight: line.bold ? "bold" : "normal",
                                fontStyle: line.italic ? "italic" : "normal",
                                textDecoration: line.underline ? "underline" : "none",
                                fontFamily: line.fontFamily,
                                whiteSpace: "nowrap",
                                margin: line.alignment === "left" ? "0 auto 0 0" : line.alignment === "right" ? "0 0 0 auto" : "0 auto",
                                lineHeight: 1.3,
                                textAlign: alignment
                              },
                              children: line.text
                            },
                            idx,
                            !1,
                            {
                              fileName: "app/components/BadgeDesigner.tsx",
                              lineNumber: 779,
                              columnNumber: 45
                            },
                            this
                          );
                        })
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/BadgeDesigner.tsx",
                        lineNumber: 769,
                        columnNumber: 39
                      },
                      this
                    );
                  })() }, void 0, !1, {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 764,
                    columnNumber: 33
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 748,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-6 w-full max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  BadgeEditPanel,
                  {
                    badge: badgeToEdit,
                    maxLines,
                    onLineChange: (lineIdx, changes) => {
                      let newBadges = [...multipleBadges], newLines = [...badgeToEdit.lines];
                      newLines[lineIdx] = { ...newLines[lineIdx], ...changes }, newBadges[editModalIndex] = { ...badgeToEdit, lines: newLines }, setMultipleBadges(newBadges);
                    },
                    onAlignmentChange: (lineIdx, alignment) => {
                      let newBadges = [...multipleBadges];
                      newBadges[editModalIndex] = {
                        ...badgeToEdit,
                        lines: badgeToEdit.lines.map(
                          (l, i2) => i2 === lineIdx ? { ...l, alignment } : l
                        )
                      }, setMultipleBadges(newBadges);
                    },
                    onBackgroundColorChange: (backgroundColor) => {
                      let newBadges = [...multipleBadges];
                      newBadges[editModalIndex] = { ...badgeToEdit, backgroundColor }, setMultipleBadges(newBadges);
                    },
                    onRemoveLine: (lineIdx) => {
                      let newBadges = [...multipleBadges], newLines = [...badgeToEdit.lines];
                      newLines.splice(lineIdx, 1), newBadges[editModalIndex] = { ...badgeToEdit, lines: newLines }, setMultipleBadges(newBadges);
                    },
                    addLine: () => {
                      let newBadges = [...multipleBadges];
                      badgeToEdit.lines.length < maxLines && (newBadges[editModalIndex] = {
                        ...badgeToEdit,
                        lines: [
                          ...badgeToEdit.lines,
                          { text: "Line Text", size: 13, color: "#000000", bold: !1, italic: !1, underline: !1, fontFamily: "Arial", alignment: "center" }
                        ]
                      }, setMultipleBadges(newBadges));
                    },
                    showRemove: !0,
                    editable: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 805,
                    columnNumber: 33
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 804,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "button",
                  {
                    className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow",
                    onClick: (e) => {
                      e.preventDefault(), setEditModalIndex(null);
                    },
                    children: "Save"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/BadgeDesigner.tsx",
                    lineNumber: 856,
                    columnNumber: 33
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/BadgeDesigner.tsx",
                  lineNumber: 855,
                  columnNumber: 31
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/BadgeDesigner.tsx",
                lineNumber: 746,
                columnNumber: 29
              }, this) : null;
            })()
          ] }, void 0, !0, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 733,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 732,
            columnNumber: 21
          }, this)
        ] }, i, !0, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 638,
          columnNumber: 17
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 550,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 548,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 546,
      columnNumber: 7
    }, this),
    showCsvModal && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl",
          onClick: (e) => {
            e.preventDefault(), setShowCsvModal(!1);
          },
          "aria-label": "Close",
          children: "\xD7"
        },
        void 0,
        !1,
        {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 879,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold mb-2", children: "Add Multiple Badges" }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 886,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mb-2 text-sm text-gray-700", children: "You can upload a CSV file or paste CSV data below. Each row should represent a badge." }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 887,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mb-2 text-sm text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("b", { children: "Add a comma (,) to indicate a new line. Add up to 4 lines." }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 891,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 890,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-2 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("b", { children: "Example:" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 894,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 894,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-mono bg-gray-100 p-1 rounded inline-block mb-1", children: "Names,Title,Company" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 895,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 895,
          columnNumber: 111
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-mono bg-gray-100 p-1 rounded inline-block mb-1", children: "John Doe,Manager,Blue" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 896,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 896,
          columnNumber: 113
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-mono bg-gray-100 p-1 rounded inline-block mb-1", children: "Jane Smith,Developer,Red" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 897,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 893,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "file", accept: ".csv", onChange: handleCsvFile, className: "mb-2" }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 900,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 899,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "textarea",
        {
          className: "w-full border rounded p-2 mb-2 text-sm",
          rows: 4,
          placeholder: "Paste CSV data here...",
          value: csvText,
          onChange: (e) => {
            setCsvText(e.target.value), parseCsv(e.target.value);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 902,
          columnNumber: 13
        },
        this
      ),
      csvError && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-red-600 text-sm mb-2", children: csvError }, void 0, !1, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 909,
        columnNumber: 26
      }, this),
      csvPreview.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-semibold mb-1", children: "Preview:" }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 912,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("table", { className: "w-full text-xs border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tbody", { children: csvPreview.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { className: "border-t", children: row.map((cell, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "border px-2 py-1", children: cell }, j, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 918,
          columnNumber: 27
        }, this)) }, i, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 916,
          columnNumber: 23
        }, this)) }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 914,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/BadgeDesigner.tsx",
          lineNumber: 913,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 911,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            className: "bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded mr-2",
            onClick: (e) => {
              e.preventDefault(), setShowCsvModal(!1);
            },
            children: "Cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 927,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            className: "bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded",
            onClick: (e) => {
              e.preventDefault(), parseCsv(csvText), setTimeout(() => {
                csvError || setShowCsvModal(!1);
              }, 0);
            },
            children: "Add Badges"
          },
          void 0,
          !1,
          {
            fileName: "app/components/BadgeDesigner.tsx",
            lineNumber: 931,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/BadgeDesigner.tsx",
        lineNumber: 926,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 878,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/BadgeDesigner.tsx",
      lineNumber: 877,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BadgeDesigner.tsx",
    lineNumber: 429,
    columnNumber: 5
  }, this);
}, BadgeDesigner_default = BadgeDesigner;

// app/routes/badge-designer.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Badge Designer" },
  { name: "description", content: "Design your custom badges" }
];
function BadgeDesignerRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-6 space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Badge Designer" }, void 0, !1, {
        fileName: "app/routes/badge-designer.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: "Create and customize your badge design" }, void 0, !1, {
        fileName: "app/routes/badge-designer.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/badge-designer.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border-t border-gray-200 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BadgeDesigner_default, {}, void 0, !1, {
      fileName: "app/routes/badge-designer.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/badge-designer.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/badge-designer.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/badge-designer.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/badge-designer.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), loader = async () => (0, import_node2.redirect)("/badge-designer");

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PSCACMTH.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-IJNFFPXM.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-FZBP2O62.js", "/build/_shared/chunk-MZF3CFPM.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2UTTPO7H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QW5LNJTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/badge-designer": { id: "routes/badge-designer", parentId: "root", path: "badge-designer", index: void 0, caseSensitive: void 0, module: "/build/routes/badge-designer-W5OV4HUN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "9c851ef5", hmr: { runtime: "/build/_shared\\chunk-FZBP2O62.js", timestamp: 1752467029625 }, url: "/build/manifest-9C851EF5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/badge-designer": {
    id: "routes/badge-designer",
    parentId: "root",
    path: "badge-designer",
    index: void 0,
    caseSensitive: void 0,
    module: badge_designer_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
