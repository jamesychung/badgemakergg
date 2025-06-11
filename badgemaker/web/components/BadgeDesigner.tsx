import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { 
  ArrowPathIcon as ArrowPathIconOutline,
  Bars3Icon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  XMarkIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

interface BadgeDesignerProps {
  productId?: string | null;
}

const backgroundColors = [
  { name: 'Black', value: '#000000', ring: 'ring-gray-600' },
  { name: 'White', value: '#FFFFFF', ring: 'ring-gray-300' },
  { name: 'Red', value: '#ea0c0c', ring: 'ring-red-600' },
  { name: 'Blue', value: '#0c5cea', ring: 'ring-blue-700' },
  { name: 'Silver', value: '#C0C0C0', ring: 'ring-gray-400' },
  { name: 'Gold', value: '#eac10c', ring: 'ring-yellow-400' },
  { name: 'Brown', value: '#6E260E', ring: 'ring-yellow-900' },
  { name: 'Ivory', value: '#F0E68C', ring: 'ring-yellow-200' },
];
const fontColors = [
  { name: 'Black', value: '#000000', ring: 'ring-gray-400' },
  { name: 'White', value: '#FFFFFF', ring: 'ring-gray-300' },
  { name: 'Red', value: '#ea0c0c', ring: 'ring-red-600' },
  { name: 'Yellow', value: '#FFFF00', ring: 'ring-yellow-400' },
  { name: 'Gold', value: '#eac10c', ring: 'ring-yellow-400' },
  { name: 'Silver', value: '#C0C0C0', ring: 'ring-gray-400' },
  { name: 'Blue', value: '#0c5cea', ring: 'ring-blue-700' },
];
const fontOptions = ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia'];
const maxLines = 4;
const badgeWidth = 300;
const badgeHeight = 100;
const MIN_FONT_SIZE = 8;

const BadgeDesigner: React.FC<BadgeDesignerProps> = ({ productId: _productId }) => {
  const LINE_HEIGHT_MULTIPLIER = 1.3;
  const [badge, setBadge] = useState({
    lines: [
      { text: 'Your Name', size: 18, color: '#000000', bold: false, italic: false, underline: false, fontFamily: 'Arial', alignment: 'center' },
      { text: 'Title', size: 13, color: '#000000', bold: false, italic: false, underline: false, fontFamily: 'Arial', alignment: 'center' },
    ],
    backgroundColor: '#FFFFFF',
    backing: 'pin',
  });
  const [showCsvModal, setShowCsvModal] = useState(false);
  const [csvText, setCsvText] = useState('');
  const [csvPreview, setCsvPreview] = useState<string[][]>([]);
  const [csvError, setCsvError] = useState('');
  const [multipleBadges, setMultipleBadges] = useState<any[]>([]);
  const [editModalIndex, setEditModalIndex] = useState<number | null>(null);

  // Helper to estimate text width for a given font size and string
  const measureTextWidth = (text: string, fontSize: number, fontFamily: string, bold: boolean, italic: boolean) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return 0;
    context.font = `${bold ? 'bold ' : ''}${italic ? 'italic ' : ''}${fontSize}px ${fontFamily}`;
    return context.measureText(text).width;
  };

  // Update getMaxCharsFor8pt to use MIN_FONT_SIZE
  const getMaxCharsForMinFont = (fontFamily: string, bold: boolean, italic: boolean) => {
    let fontSize = MIN_FONT_SIZE;
    let testStr = '';
    let width = 0;
    while (true) {
      testStr += 'W';
      width = measureTextWidth(testStr, fontSize, fontFamily, bold, italic);
      if (width > badgeWidth - 24) break;
    }
    // Fallback minimum value (e.g., 8)
    return Math.max(testStr.length - 1, 8);
  };

  // Handlers for badge state
  const updateLine = (index: number, changes: any) => {
    const newLines = badge.lines.map((l, i) => {
      if (i !== index) return l;
      let updatedLine = { ...l, ...changes };
      if (typeof changes.text !== 'undefined') {
        // Only auto-scale font size down if text is too wide, but never increase above current size
        let fontSize = updatedLine.size;
        let textWidth = measureTextWidth(updatedLine.text, fontSize, updatedLine.fontFamily, updatedLine.bold, updatedLine.italic);
        while (textWidth > badgeWidth - 24 && fontSize > MIN_FONT_SIZE) {
          fontSize--;
          textWidth = measureTextWidth(updatedLine.text, fontSize, updatedLine.fontFamily, updatedLine.bold, updatedLine.italic);
        }
        updatedLine.size = fontSize;
      }
      return updatedLine;
    });
    // Always allow editing, but show a warning if vertical fit is exceeded
    const totalHeight = newLines.reduce((sum, l) => sum + l.size * LINE_HEIGHT_MULTIPLIER, 0);
    if (totalHeight > badgeHeight - 8) {
      // Warning: Text may not fit vertically. Reduce font size or number of lines.
    } else {
      // No warning
    }
    setBadge({ ...badge, lines: newLines });
  };
  const addLine = () => {
    if (badge.lines.length < maxLines) {
      setBadge({
        ...badge,
        lines: [
          ...badge.lines,
          { text: 'Line Text', size: 13, color: '#000000', bold: false, italic: false, underline: false, fontFamily: 'Arial', alignment: 'center' }
        ]
      });
    }
  };
  const removeLine = (index: number) => {
    if (badge.lines.length > 1) {
      const newLines = [...badge.lines];
      newLines.splice(index, 1);
      setBadge({ ...badge, lines: newLines });
    }
  };
  const resetBadge = () => {
    setBadge({
      lines: [
        { text: 'Your Name', size: 18, color: '#000000', bold: false, italic: false, underline: false, fontFamily: 'Arial', alignment: 'center' },
        { text: 'Title', size: 13, color: '#000000', bold: false, italic: false, underline: false, fontFamily: 'Arial', alignment: 'center' },
      ],
      backgroundColor: '#FFFFFF',
      backing: 'pin',
    });
  };
  const saveBadge = () => {
    alert('Badge design saved! Data would be sent to cart in a real implementation.');
  };

  // Helper for alignment
  const alignmentIcons = [
    { value: 'left', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" /></svg> },
    { value: 'center', icon: (
      // Standard center-align icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="6" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ) },
    { value: 'right', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M12 12h8m-16 6h16" /></svg> },
  ];

  // Backing options
  const backingOptions = [
    { value: 'pin', label: 'Pin (Included)' },
    { value: 'magnetic', label: 'Magnetic (+$2.00)' },
    { value: 'adhesive', label: 'Adhesive (+$1.00)' },
  ];

  // Price calculation
  const basePrice = 9.99;
  const backingPrice = badge.backing === 'magnetic' ? 2 : badge.backing === 'adhesive' ? 1 : 0;
  const totalPrice = (basePrice + backingPrice).toFixed(2);

  // CSV parsing helper
  function parseCsv(text: string) {
    try {
      setCsvError('');
      const rows = text.trim().split(/\r?\n/).map(row => row.split(','));
      setCsvPreview(rows);
      // Parse rows into badge objects
      if (rows.length > 0 && rows[0].length > 0) {
        const badges = rows.map(row => ({
          ...badge,
          lines: row.map((cell, i) => ({
            ...badge.lines[i] || badge.lines[0],
            text: cell || '',
            size: i === 0 ? 18 : 13,
          }))
        }));
        setMultipleBadges(badges);
      }
    } catch (e) {
      setCsvError('Invalid CSV format.');
      setCsvPreview([]);
      setMultipleBadges([]);
    }
  }

  function handleCsvFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvText(text);
      parseCsv(text);
    };
    reader.readAsText(file);
  }

  // Shared BadgeEditorPanel component
  const BadgeEditorPanel = ({
    badge,
    onLineChange,
    onAlignmentChange,
    onBackgroundColorChange,
    onRemoveLine,
    showRemove,
    maxLines,
    addLineButton,
    resetButton,
    multiBadgeButton,
    editable = true,
  }) => {
    const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
    const align = justifyMap[badge.lines[0].alignment as 'left' | 'center' | 'right'];
    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
        {/* Line formatting boxes */}
        <div className="flex flex-col gap-4">
          {badge.lines.map((line, idx) => (
            <div key={idx} className="border rounded-lg p-4 flex flex-col gap-2 relative" style={{ backgroundColor: '#d5e0f1' }}>
              {showRemove && badge.lines.length > 1 && (
                <button
                  className="absolute top-2 right-2 control-button w-7 h-7 flex items-center justify-center bg-red-100 text-red-700 border-red-300 hover:bg-red-200"
                  onClick={() => onRemoveLine(idx)}
                  disabled={!editable}
                  title="Remove line"
                >
                  <span style={{ fontSize: 20, color: '#b91c1c' }}>X</span>
                </button>
              )}
              <div className="flex w-full items-center gap-4 mb-1">
                <label className="font-semibold text-sm">Line {idx + 1} Text</label>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-sm mr-1">Color:</span>
                  {fontColors.map(fc => {
                    const isDisabled = fc.value === badge.backgroundColor;
                    return (
                      <span key={fc.value} className="relative inline-block">
                        <button
                          className={`color-button ${line.color === fc.value ? 'ring-2 ring-offset-2 ' + fc.ring : ''} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                          style={{ backgroundColor: fc.value }}
                          onClick={() => onLineChange(idx, { color: fc.value })}
                          disabled={isDisabled || !editable}
                          title={isDisabled ? 'Cannot match background' : fc.name}
                        />
                        {isDisabled && (
                          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20"><line x1="3" y1="17" x2="17" y2="3" stroke="#b91c1c" strokeWidth="2.5" /></svg>
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
              <input
                type="text"
                className="border rounded px-3 py-2 text-base w-full min-w-[120px]"
                style={{ backgroundColor: '#fff' }}
                value={line.text}
                onChange={e => onLineChange(idx, { text: e.target.value })}
                placeholder={`Line ${idx + 1}`}
                disabled={!editable}
              />
              {/* Font Selector */}
              <div className="flex flex-nowrap gap-2 items-center mt-2">
                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-sm mr-1">Font:</span>
                  <select
                    className="border rounded px-2 py-1 text-sm"
                    value={line.fontFamily}
                    onChange={e => onLineChange(idx, { fontFamily: e.target.value })}
                    disabled={!editable}
                  >
                    <option value="Arial">Arial</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Verdana">Verdana</option>
                  </select>
                </div>
                {/* Format */}
                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-sm mr-1">Format:</span>
                  <button
                    className={`control-button w-7 h-7 flex items-center justify-center ${line.bold ? 'bg-gray-100 border-gray-400' : ''}`}
                    onClick={() => onLineChange(idx, { bold: !line.bold })}
                    title="Bold"
                    disabled={!editable}
                  >
                    <span className="font-bold text-lg">B</span>
                  </button>
                  <button
                    className={`control-button w-7 h-7 flex items-center justify-center ${line.italic ? 'bg-gray-100 border-gray-400' : ''}`}
                    onClick={() => onLineChange(idx, { italic: !line.italic })}
                    title="Italic"
                    disabled={!editable}
                  >
                    <span className="italic text-lg">I</span>
                  </button>
                  <button
                    className={`control-button w-7 h-7 flex items-center justify-center ${line.underline ? 'bg-gray-100 border-gray-400' : ''}`}
                    onClick={() => onLineChange(idx, { underline: !line.underline })}
                    title="Underline"
                    disabled={!editable}
                  >
                    <span className="underline text-lg">U</span>
                  </button>
                </div>
                {/* Alignment */}
                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-sm mr-1">Align:</span>
                  <button
                    className={`control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === 'left' ? 'bg-gray-100 border-gray-400' : ''}`}
                    onClick={() => onAlignmentChange(idx, 'left')}
                    title="Align Left"
                    disabled={!editable}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </button>
                  <button
                    className={`control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === 'center' ? 'bg-gray-100 border-gray-400' : ''}`}
                    onClick={() => onAlignmentChange(idx, 'center')}
                    title="Align Center"
                    disabled={!editable}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M8 12h8M4 18h16" />
                    </svg>
                  </button>
                  <button
                    className={`control-button w-7 h-7 flex items-center justify-center p-0 ${line.alignment === 'right' ? 'bg-gray-100 border-gray-400' : ''}`}
                    onClick={() => onAlignmentChange(idx, 'right')}
                    title="Align Right"
                    disabled={!editable}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M12 12h8M4 18h16" />
                    </svg>
                  </button>
                </div>
                {/* Size Controls */}
                <div className="flex gap-1 items-center">
                  <label className="font-semibold text-sm mb-0">Size</label>
                  <button
                    type="button"
                    className="control-button w-7 h-7 flex items-center justify-center text-sm"
                    onClick={() => onLineChange(idx, { size: Math.max(MIN_FONT_SIZE, line.size - 1) })}
                    disabled={line.size <= MIN_FONT_SIZE || !editable}
                  >-</button>
                  <span className="w-7 text-center text-sm">{line.size}px</span>
                  <button
                    type="button"
                    className="control-button w-7 h-7 flex items-center justify-center text-sm"
                    onClick={() => onLineChange(idx, { size: Math.min(72, line.size + 1) })}
                    disabled={line.size >= 72 || !editable}
                  >+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Action buttons if provided */}
        <div className="flex flex-row gap-2 justify-end mt-2">
          {addLineButton}
          {multiBadgeButton}
          {resetButton}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg mx-auto max-w-6xl min-h-[600px]">
      {/* LEFT COLUMN - Controls */}
      <div className="w-full pr-4 mb-4 overflow-y-auto" style={{ maxHeight: '90vh' }}>
        <div className="section-container mb-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Customize Your Badge</h2>
          
          {/* Move background color label, swatches, and preview to the left, lined up with 'Text Lines'. Make font size for 'Background Color' and 'Text Lines' the same. */}
          <div className="flex flex-row gap-6 items-start w-full mb-6">
            {/* Background Color Picker */}
            <div className="flex flex-col items-start justify-center min-w-[120px] pr-2" style={{ alignSelf: 'flex-start' }}>
              <span className="font-semibold text-gray-700 mb-2">Background Color</span>
              <div className="grid grid-cols-4 grid-rows-2 gap-2">
                {backgroundColors.map(bg => (
                  <button
                    key={bg.value}
                    className={`color-button ${badge.backgroundColor === bg.value ? 'ring-2 ring-offset-2 ' + bg.ring : ''}`}
                    style={{ backgroundColor: bg.value }}
                    onClick={() => setBadge({ ...badge, backgroundColor: bg.value })}
                    title={bg.name}
                  />
                ))}
              </div>
            </div>
            {/* Preview Box */}
            <div className="flex items-center justify-center rounded border w-full max-w-[300px]" style={{ height: badgeHeight, background: badge.backgroundColor, overflow: 'hidden', position: 'relative', border: '2px solid #888' }}>
              <div
                className={`w-full h-full flex flex-col justify-center items-center px-4`}
                style={{ textAlign: badge.lines[0].alignment as 'left' | 'center' | 'right' }}
              >
                {badge.lines.map((line, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: line.size,
                      color: line.color,
                      fontWeight: line.bold ? 'bold' : 'normal',
                      fontStyle: line.italic ? 'italic' : 'normal',
                      textDecoration: line.underline ? 'underline' : 'none',
                      fontFamily: line.fontFamily,
                      whiteSpace: 'nowrap',
                      margin: line.alignment === 'left' ? '0 auto 0 0' : line.alignment === 'right' ? '0 0 0 auto' : '0 auto',
                      lineHeight: 1.3,
                    }}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Text Lines */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-700">Text Lines</span>
            <button
              className="control-button bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 px-4 py-2 text-sm"
              style={{ minWidth: 160, maxWidth: 200 }}
              onClick={addLine}
              disabled={badge.lines.length >= maxLines}
            >
              Add (up to 4 Lines)
            </button>
          </div>
          {BadgeEditorPanel({
            badge,
            onLineChange: updateLine,
            onAlignmentChange: (index, alignment) => setBadge({ ...badge, lines: badge.lines.map((l, i) => i === index ? { ...l, alignment } : l) }),
            onBackgroundColorChange: (backgroundColor) => setBadge({ ...badge, backgroundColor }),
            onRemoveLine: removeLine,
            showRemove: true,
            maxLines,
            addLineButton: null,
            resetButton: null,
            multiBadgeButton: null,
            editable: true,
          })}
          <div className="flex justify-end items-center gap-2 mb-4">
            <button
              className="control-button flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-400"
              onClick={resetBadge}
            >
              <ArrowPathIcon className="w-5 h-5" />
              Reset
            </button>
            <button
              className="control-button bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 text-sm"
              style={{ minWidth: 120 }}
              onClick={() => setShowCsvModal(true)}
            >
              Add Multiple Badges
            </button>
          </div>
          <div className="flex justify-end mt-2 mb-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
              onClick={saveBadge}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* RIGHT COLUMN - Preview & Order Summary */}
      <div className="w-full md:w-1/2 md:pl-3 flex flex-col items-center">
        {multipleBadges.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-4">Badge Preview</h2>
            <div className="flex flex-col gap-6 w-full items-center">
              {/* Original badge preview (numbered 1, same style as others) */}
              <div className="flex flex-row items-center gap-2 w-full">
                {/* Badge number (left of preview, same as multi-badge) */}
                <div className="flex flex-col items-center justify-center mr-2">
                  <span className="text-lg font-bold mb-2" style={{ width: 32, textAlign: 'center' }}>1.</span>
                </div>
                {/* Main preview box */}
                <div className="flex flex-col items-center w-full max-w-[300px]">
                  <div
                    className="flex items-center justify-center rounded border w-full max-w-[300px]"
                    style={{ height: badgeHeight, background: badge.backgroundColor, overflow: 'hidden', position: 'relative', border: '2px solid #888' }}
                  >
                    {(() => {
                      const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
                      const align = justifyMap[badge.lines[0].alignment as 'left' | 'center' | 'right'];
                      if (badge.lines.length === 1) {
                        return (
                          <div
                            className={`w-full h-full flex flex-col items-${align} justify-center px-4`}
                            style={{ textAlign: badge.lines[0].alignment as 'left' | 'center' | 'right' }}
                          >
                            <span
                              style={{
                                fontSize: badge.lines[0].size,
                                color: badge.lines[0].color,
                                fontWeight: badge.lines[0].bold ? 'bold' : 'normal',
                                fontStyle: badge.lines[0].italic ? 'italic' : 'normal',
                                textDecoration: badge.lines[0].underline ? 'underline' : 'none',
                                fontFamily: badge.lines[0].fontFamily,
                                whiteSpace: 'nowrap',
                                margin: badge.lines[0].alignment === 'left' ? '0 auto 0 0' : badge.lines[0].alignment === 'right' ? '0 0 0 auto' : '0 auto',
                                lineHeight: 1,
                              }}
                            >
                              {badge.lines[0].text}
                            </span>
                          </div>
                        );
                      }
                      return (
                        <div
                          className={`w-full h-full flex flex-col justify-center items-center px-4`}
                          style={{ textAlign: 'center' }}
                        >
                          {badge.lines.map((line, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontSize: line.size,
                                color: line.color,
                                fontWeight: line.bold ? 'bold' : 'normal',
                                fontStyle: line.italic ? 'italic' : 'normal',
                                textDecoration: line.underline ? 'underline' : 'none',
                                fontFamily: line.fontFamily,
                                whiteSpace: 'nowrap',
                                margin: line.alignment === 'left' ? '0 auto 0 0' : line.alignment === 'right' ? '0 0 0 auto' : '0 auto',
                                lineHeight: 1.3,
                                textAlign: line.alignment as 'left' | 'center' | 'right',
                              }}
                            >
                              {line.text}
                            </span>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
              {/* Multiple badge previews below, each with edit/delete and number */}
              {multipleBadges.map((b, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-row items-center gap-2 w-full">
                    {/* Badge number and buttons (left of preview) */}
                    <div className="flex flex-col items-center justify-center mr-2">
                      <span className="text-lg font-bold mb-2" style={{ width: 32, textAlign: 'center' }}>{i + 2}.</span>
                      <button className="control-button p-1 bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 flex items-center justify-center" style={{ width: 28, height: 28 }} onClick={() => setEditModalIndex(i)}>
                        <ArrowPathIcon className="w-4 h-4" />
                      </button>
                      <div className="h-2"></div>
                      <button className="control-button p-1 bg-red-100 text-red-700 border-red-300 hover:bg-red-200 flex items-center justify-center" style={{ width: 28, height: 28 }} onClick={() => {
                        setMultipleBadges(multipleBadges.filter((_, idx) => idx !== i));
                      }}>
                        <span style={{ fontSize: 20, color: '#b91c1c' }}>X</span>
                      </button>
                    </div>
                    {/* Preview box */}
                    <div className="flex flex-col items-center w-full max-w-[300px]">
                      <div
                        className="flex items-center justify-center rounded border w-full max-w-[300px]"
                        style={{ height: badgeHeight, background: b.backgroundColor, overflow: 'hidden', position: 'relative', border: '2px solid #888' }}
                      >
                        {(() => {
                          const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
                          const align = justifyMap[b.lines[0].alignment as 'left' | 'center' | 'right'];
                          if (b.lines.length === 1) {
                            return (
                              <div
                                className={`w-full h-full flex flex-col items-${align} justify-center px-4`}
                                style={{ textAlign: b.lines[0].alignment as 'left' | 'center' | 'right' }}
                              >
                                <span
                                  style={{
                                    fontSize: b.lines[0].size,
                                    color: b.lines[0].color,
                                    fontWeight: b.lines[0].bold ? 'bold' : 'normal',
                                    fontStyle: b.lines[0].italic ? 'italic' : 'normal',
                                    textDecoration: b.lines[0].underline ? 'underline' : 'none',
                                    fontFamily: b.lines[0].fontFamily,
                                    whiteSpace: 'nowrap',
                                    margin: b.lines[0].alignment === 'left' ? '0 auto 0 0' : b.lines[0].alignment === 'right' ? '0 0 0 auto' : '0 auto',
                                    lineHeight: 1,
                                  }}
                                >
                                  {b.lines[0].text}
                                </span>
                              </div>
                            );
                          }
                          return (
                            <div
                              className={`w-full h-full flex flex-col justify-center items-center px-4`}
                              style={{ textAlign: undefined }}
                            >
                              {b.lines.map((line, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    fontSize: line.size,
                                    color: line.color,
                                    fontWeight: line.bold ? 'bold' : 'normal',
                                    fontStyle: line.italic ? 'italic' : 'normal',
                                    textDecoration: line.underline ? 'underline' : 'none',
                                    fontFamily: line.fontFamily,
                                    whiteSpace: 'nowrap',
                                    margin: line.alignment === 'left' ? '0 auto 0 0' : line.alignment === 'right' ? '0 0 0 auto' : '0 auto',
                                    lineHeight: 1.3,
                                    textAlign: line.alignment as 'left' | 'center' | 'right',
                                  }}
                                >
                                  {line.text}
                                </span>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                  {/* Edit Modal UI */}
                  {editModalIndex === i && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                          onClick={() => setEditModalIndex(null)}
                          aria-label="Close"
                        >
                          <XMarkIcon className="w-6 h-6" />
                        </button>
                        <h3 className="text-lg font-bold mb-2">Edit Badge</h3>
                        {(() => {
                          const badgeToEdit = multipleBadges[editModalIndex];
                          if (!badgeToEdit) return null;
                          return (
                            <div className="flex flex-col gap-4">
                              {/* Preview and Background Color side by side */}
                              <div className="flex flex-row gap-6 items-start w-full justify-center">
                                {/* Background Color Picker */}
                                <div className="flex flex-col items-end justify-center min-w-[120px] pr-2" style={{ alignSelf: 'center' }}>
                                  <span className="font-semibold text-sm mb-1">Background Color</span>
                                  <div className="grid grid-cols-4 grid-rows-2 gap-2">
                                    {backgroundColors.map(bg => (
                                      <button
                                        key={bg.value}
                                        className={`color-button ${badgeToEdit.backgroundColor === bg.value ? 'ring-2 ring-offset-2 ' + bg.ring : ''}`}
                                        style={{ backgroundColor: bg.value }}
                                        onClick={() => {
                                          const newBadges = [...multipleBadges];
                                          newBadges[editModalIndex] = { ...badgeToEdit, backgroundColor: bg.value };
                                          setMultipleBadges(newBadges);
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                                {/* Live Preview */}
                                <div className="flex items-center justify-center rounded border w-full max-w-[300px]" style={{ height: badgeHeight, background: badgeToEdit.backgroundColor, overflow: 'hidden', position: 'relative', border: '2px solid #888' }}>
                                  {(() => {
                                    const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
                                    const align = justifyMap[badgeToEdit.lines[0].alignment as 'left' | 'center' | 'right'];
                                    return (
                                      <div
                                        className={`w-full h-full flex flex-col justify-center items-${align} px-4`}
                                        style={{ textAlign: badgeToEdit.lines[0].alignment as 'left' | 'center' | 'right' }}
                                      >
                                        {badgeToEdit.lines.map((line, idx) => (
                                          <span
                                            key={idx}
                                            style={{
                                              fontSize: line.size,
                                              color: line.color,
                                              fontWeight: line.bold ? 'bold' : 'normal',
                                              fontStyle: line.italic ? 'italic' : 'normal',
                                              textDecoration: line.underline ? 'underline' : 'none',
                                              fontFamily: line.fontFamily,
                                              whiteSpace: 'nowrap',
                                              margin: line.alignment === 'left' ? '0 auto 0 0' : line.alignment === 'right' ? '0 0 0 auto' : '0 auto',
                                              lineHeight: 1.3,
                                            }}
                                          >
                                            {line.text}
                                          </span>
                                        ))}
                                      </div>
                                    );
                                  })()}
                                </div>
                              </div>
                              {/* Editable Lines */}
                              <div className="flex flex-col gap-6 w-full max-w-2xl">
                                <BadgeEditorPanel
                                  badge={badgeToEdit}
                                  onLineChange={(lineIdx, changes) => {
                                    const newBadges = [...multipleBadges];
                                    const newLines = [...badgeToEdit.lines];
                                    newLines[lineIdx] = { ...newLines[lineIdx], ...changes };
                                    newBadges[editModalIndex] = { ...badgeToEdit, lines: newLines };
                                    setMultipleBadges(newBadges);
                                  }}
                                  onAlignmentChange={(lineIdx, alignment) => {
                                    const newBadges = [...multipleBadges];
                                    newBadges[editModalIndex] = { ...badgeToEdit, lines: badgeToEdit.lines.map((l, i) => i === lineIdx ? { ...l, alignment } : l) };
                                    setMultipleBadges(newBadges);
                                  }}
                                  onBackgroundColorChange={(backgroundColor) => {
                                    const newBadges = [...multipleBadges];
                                    newBadges[editModalIndex] = { ...badgeToEdit, backgroundColor };
                                    setMultipleBadges(newBadges);
                                  }}
                                  onRemoveLine={(lineIdx) => {
                                    const newBadges = [...multipleBadges];
                                    const newLines = [...badgeToEdit.lines];
                                    newLines.splice(lineIdx, 1);
                                    newBadges[editModalIndex] = { ...badgeToEdit, lines: newLines };
                                    setMultipleBadges(newBadges);
                                  }}
                                  showRemove={true}
                                  maxLines={maxLines}
                                  addLineButton={null}
                                  resetButton={null}
                                  multiBadgeButton={null}
                                  editable={true}
                                />
                              </div>
                              {/* Save Button */}
                              <div className="flex justify-end mt-4">
                                <button
                                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                                  onClick={() => setEditModalIndex(null)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>
      {/* Modal/Section for CSV Upload/Entry - moved to root */}
      {showCsvModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setShowCsvModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2">Add Multiple Badges</h3>
            <p className="mb-2 text-sm text-gray-700">
              You can upload a CSV file or paste CSV data below. Each row should represent a badge.
            </p>
            <p className="mb-2 text-sm text-gray-700">
              <b>Add a comma (,) to indicate a new line. Add up to 4 lines.</b>
            </p>
            <div className="mb-2 text-sm">
              <b>Example:</b><br />
              <span className="font-mono bg-gray-100 p-1 rounded inline-block mb-1">Names,Title,Company</span><br />
              <span className="font-mono bg-gray-100 p-1 rounded inline-block mb-1">John Doe,Manager,Blue</span><br />
              <span className="font-mono bg-gray-100 p-1 rounded inline-block mb-1">Jane Smith,Developer,Red</span>
            </div>
            <div className="mb-2">
              <input type="file" accept=".csv" onChange={handleCsvFile} className="mb-2" />
            </div>
            <textarea
              className="w-full border rounded p-2 mb-2 text-sm"
              rows={4}
              placeholder="Paste CSV data here..."
              value={csvText}
              onChange={e => { setCsvText(e.target.value); parseCsv(e.target.value); }}
            />
            {csvError && <div className="text-red-600 text-sm mb-2">{csvError}</div>}
            {csvPreview.length > 0 && (
              <div className="mb-2">
                <div className="font-semibold mb-1">Preview:</div>
                <table className="w-full text-xs border">
                  <tbody>
                    {csvPreview.map((row, i) => (
                      <tr key={i} className="border-t">
                        {row.map((cell, j) => (
                          <td key={j} className="border px-2 py-1">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded mr-2"
                onClick={() => setShowCsvModal(false)}
              >Cancel</button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                onClick={() => {
                  parseCsv(csvText);
                  setTimeout(() => {
                    if (!csvError) setShowCsvModal(false);
                  }, 0);
                }}
              >Add Badges</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeDesigner; 