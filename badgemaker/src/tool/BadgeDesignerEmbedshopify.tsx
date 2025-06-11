import React from 'react';
import {
  Button,
  Modal,
  TextField,
  Text,
  BlockStack,
  Banner,
  LegacyStack,
  Card,
  Box,
  Select,
  InlineStack
} from '@shopify/polaris';
import { useState, useEffect } from 'react';
import { BadgeDesigner } from './BadgeDesigner';

interface BadgeLine {
  text: string;
  size: number;
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  fontFamily: string;
}

interface BadgeState {
  lines: BadgeLine[];
  backgroundColor: string;
  alignment: 'left' | 'center' | 'right';
  backing: 'pin' | 'magnetic' | 'adhesive';
}

interface BadgePreview {
  lines: Array<{
    text: string;
    size: number;
    fontFamily: string;
    color: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
  }>;
  backgroundColor: string;
  alignment: 'left' | 'center' | 'right';
  backing: 'pin' | 'magnetic' | 'adhesive';
}

const MIN_FONT_SIZE = 8;
const maxLines = 4;

const backgroundColors = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Blue', value: '#E3F2FD' },
  { name: 'Green', value: '#E8F5E9' },
  { name: 'Yellow', value: '#FFF9C4' },
  { name: 'Red', value: '#FFEBEE' },
  { name: 'Pink', value: '#FCE4EC' },
];

const fontColors = [
  { name: 'Black', value: '#000000' },
  { name: 'Blue', value: '#1565C0' },
  { name: 'Red', value: '#C62828' },
  { name: 'Green', value: '#2E7D32' },
  { name: 'Purple', value: '#4527A0' },
  { name: 'Olive', value: '#388E3C' },
];

const fontOptions = ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia'];

export const BadgeDesignerEmbed: React.FC = () => {
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [csvData, setCsvData] = useState<string>('');
  const [csvError, setCsvError] = useState<string>('');
  const [previewBadges, setPreviewBadges] = useState<BadgePreview[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [badge, setBadge] = useState<BadgeState>({
    lines: [
      { text: '', size: 16, color: '#000', bold: false, italic: false, underline: false, fontFamily: 'Arial' }
    ],
    backgroundColor: '#FFF9C4',
    alignment: 'center',
    backing: 'pin',
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateLine = (index: number, changes: Partial<BadgeLine>) => {
    const newLines = badge.lines.map((l, i) => {
      if (i !== index) return l;
      return { ...l, ...changes };
    });
    updateBadge({ lines: newLines });
  };

  const addLine = () => {
    if (badge.lines.length < maxLines) {
      const firstLineSize = badge.lines[0].size;
      const newSize = Math.max(MIN_FONT_SIZE, Math.round(firstLineSize * 0.7));
      setBadge({
        ...badge,
        lines: [
          ...badge.lines,
          { text: '', size: newSize, color: '#000', bold: false, italic: false, underline: false, fontFamily: 'Arial' }
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

  function validateAndPreviewCsv(data: string) {
    try {
      const lines = data.split('\n').map(line => line.trim()).filter(line => line);
      if (lines.length === 0) {
        return { isValid: false, error: 'No data found', previewBadges: [] };
      }

      // Check if data contains commas (multi-line format)
      const hasCommas = lines.some(line => line.includes(','));
      
      if (hasCommas && badge.lines.length === 1) {
        return { 
          isValid: false, 
          error: 'Please add more lines to the badge designer before using multi-line CSV format', 
          previewBadges: [] 
        };
      }

      if (badge.lines.length === 1) {
        const previewBadges = lines.map(line => ({
          lines: [
            {
              text: line.trim(),
              fontFamily: badge.lines[0].fontFamily,
              size: badge.lines[0].size,
              color: badge.lines[0].color,
              bold: badge.lines[0].bold,
              italic: badge.lines[0].italic,
              underline: badge.lines[0].underline
            }
          ],
          backgroundColor: badge.backgroundColor,
          alignment: badge.alignment,
          backing: badge.backing
        }));
        return { isValid: true, error: '', previewBadges };
      }

      const firstLine = lines[0].toLowerCase();
      const hasHeaders = firstLine.includes('line1') || firstLine.includes('line2') || 
                        firstLine.includes('line3') || firstLine.includes('line4');
      let dataLines = lines;
      if (hasHeaders) {
        dataLines = lines.slice(1);
      }

      const previewBadges = dataLines.map((line, rowIdx) => {
        const values = line.split(',').map(v => v.trim());
        if (values.length < badge.lines.length) {
          throw new Error(`Row ${rowIdx + 1} is missing columns. Expected ${badge.lines.length}, got ${values.length}.`);
        }
        return {
          lines: badge.lines.map((line, index) => ({
            text: values[index] || '',
            fontFamily: line.fontFamily,
            size: line.size,
            color: line.color,
            bold: line.bold,
            italic: line.italic,
            underline: line.underline
          })),
          backgroundColor: badge.backgroundColor,
          alignment: badge.alignment,
          backing: badge.backing
        };
      });
      return { isValid: true, error: '', previewBadges };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error processing CSV. Please check your data.';
      return { isValid: false, error: errorMessage, previewBadges: [] };
    }
  }

  const handleCsvUpload = (value: string) => {
    setCsvData(value);
    if (value.trim()) {
      const result = validateAndPreviewCsv(value);
      if (result.previewBadges.length > 0) {
        setPreviewBadges(result.previewBadges);
        setTimeout(() => {
          const container = document.getElementById('preview-badges-container');
          if (container) {
            container.scrollTop = container.scrollHeight;
          }
        }, 100);
      }
    } else {
      setPreviewBadges([]);
    }
  };

  const handleCsvSubmit = () => {
    if (!csvData.trim()) {
      setCsvError('Please enter CSV data');
      return;
    }
    const result = validateAndPreviewCsv(csvData);
    if (result.isValid) {
      setPreviewBadges(result.previewBadges);
      setShowDuplicateModal(false);
      setTimeout(() => {
        const container = document.getElementById('preview-badges-container');
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, 100);
    } else {
      setCsvError(result.error || 'Invalid CSV format');
    }
  };

  const renderBadgePreviews = () => {
    if (previewBadges.length === 0) return null;
    return (
      <div 
        id="preview-badges-container"
        style={{ 
          maxHeight: '400px', 
          overflowY: 'auto',
          padding: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          marginTop: '1rem'
        }}
      >
        <LegacyStack vertical spacing="tight">
          {previewBadges.map((_, index) => (
            <div key={index} style={{ padding: '0.5rem 0' }}>
              <Text as="h3" variant="headingMd">Badge {index + 1}</Text>
              <BadgeDesigner />
            </div>
          ))}
        </LegacyStack>
      </div>
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCsvData(content);
        if (content.trim()) {
          const result = validateAndPreviewCsv(content);
          if (result.previewBadges.length > 0) {
            setPreviewBadges(result.previewBadges);
            setTimeout(() => {
              const container = document.getElementById('preview-badges-container');
              if (container) {
                container.scrollTop = container.scrollHeight;
              }
            }, 100);
          }
        }
      };
      reader.readAsText(file);
    }
  };

  const updateBadge = (changes: Partial<BadgeState>) => {
    const newBadge = { ...badge, ...changes };
    setBadge(newBadge);
    
    // Update all preview badges with the new styling
    if (previewBadges.length > 0) {
      const updatedPreviews = previewBadges.map(preview => ({
        ...preview,
        backgroundColor: newBadge.backgroundColor,
        alignment: newBadge.alignment,
        backing: newBadge.backing,
        lines: preview.lines.map((previewLine, index) => {
          const originalLine = newBadge.lines[index];
          if (originalLine) {
            return {
              text: previewLine.text, // Keep the preview's text
              fontFamily: originalLine.fontFamily,
              size: originalLine.size,
              color: originalLine.color,
              bold: originalLine.bold,
              italic: originalLine.italic,
              underline: originalLine.underline
            };
          }
          return previewLine;
        })
      }));
      setPreviewBadges(updatedPreviews);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      gap: '2rem',
      flexDirection: isMobile ? 'column' : 'row'
    }}>
      {/* Left/Main Panel: Badge Designer Controls */}
      <div style={{ flex: 1 }}>
        <Card>
          <div style={{ padding: '1rem' }}>
            <BlockStack gap="400">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text variant="headingMd" as="h2">Badge Designer</Text>
                <Button onClick={() => setShowDuplicateModal(true)}>Duplicate Badge</Button>
              </div>

              <Box>
                <Text variant="headingMd" as="h3">Badge Settings</Text>
                <BlockStack gap="200">
                  <Text as="p">Background Color:</Text>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {backgroundColors.map((bg) => (
                      <div
                        key={bg.value}
                        onClick={() => updateBadge({ backgroundColor: bg.value })}
                        role="button"
                        tabIndex={0}
                        style={{
                          backgroundColor: bg.value,
                          border: badge.backgroundColor === bg.value ? '2px solid #000' : '1px solid #ccc',
                          width: '24px',
                          height: '24px',
                          padding: 0,
                          borderRadius: '50%',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                </BlockStack>
              </Box>

              <Box>
                <InlineStack align="space-between">
                  <Text variant="headingMd" as="h3">Text Lines</Text>
                  <Button
                    onClick={addLine}
                    disabled={badge.lines.length >= maxLines}
                    size="slim"
                  >
                    Add Line (up to 4)
                  </Button>
                </InlineStack>
                
                {badge.lines.map((line, idx) => (
                  <Card key={idx} padding="400">
                    <BlockStack gap="200">
                      <InlineStack align="space-between">
                        <Text as="p">Line {idx + 1}</Text>
                        {badge.lines.length > 1 && (
                          <Button
                            onClick={() => removeLine(idx)}
                            size="slim"
                            tone="critical"
                          >
                            Remove
                          </Button>
                        )}
                      </InlineStack>
                      
                      <TextField
                        label="Text"
                        value={line.text}
                        onChange={(value) => updateLine(idx, { text: value })}
                        autoComplete="off"
                      />
                      
                      <InlineStack gap="200">
                        <Button
                          onClick={() => updateLine(idx, { size: Math.max(MIN_FONT_SIZE, line.size - 1) })}
                          disabled={line.size <= MIN_FONT_SIZE}
                          size="slim"
                        >
                          -
                        </Button>
                        <Text as="p">{line.size}px</Text>
                        <Button
                          onClick={() => updateLine(idx, { size: Math.min(40, line.size + 1) })}
                          disabled={line.size >= 40}
                          size="slim"
                        >
                          +
                        </Button>
                      </InlineStack>

                      <Text as="p">Text Color:</Text>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {fontColors.map((fc) => (
                          <div
                            key={fc.value}
                            onClick={() => updateLine(idx, { color: fc.value })}
                            role="button"
                            tabIndex={0}
                            style={{
                              backgroundColor: fc.value,
                              border: line.color === fc.value ? '2px solid #000' : '1px solid #ccc',
                              width: '20px',
                              height: '20px',
                              padding: 0,
                              borderRadius: '50%',
                              cursor: 'pointer'
                            }}
                          />
                        ))}
                      </div>

                      <Select
                        label="Font Family"
                        options={fontOptions.map(font => ({ label: font, value: font }))}
                        value={line.fontFamily}
                        onChange={(value) => updateLine(idx, { fontFamily: value })}
                      />

                      <InlineStack gap="200">
                        <Button
                          onClick={() => updateLine(idx, { bold: !line.bold })}
                          pressed={line.bold}
                          size="slim"
                        >
                          Bold
                        </Button>
                        <Button
                          onClick={() => updateLine(idx, { italic: !line.italic })}
                          pressed={line.italic}
                          size="slim"
                        >
                          Italic
                        </Button>
                        <Button
                          onClick={() => updateLine(idx, { underline: !line.underline })}
                          pressed={line.underline}
                          size="slim"
                        >
                          Underline
                        </Button>
                      </InlineStack>
                    </BlockStack>
                  </Card>
                ))}
              </Box>

              <Box>
                <Text variant="headingMd" as="h3">Backing Options</Text>
                <BlockStack gap="200">
                  <Select
                    label="Backing Type"
                    options={[
                      { label: 'Pin Backing', value: 'pin' },
                      { label: 'Magnetic Backing (+$2.00)', value: 'magnetic' },
                      { label: 'Adhesive Backing (+$1.00)', value: 'adhesive' }
                    ]}
                    value={badge.backing}
                    onChange={(value) => updateBadge({ backing: value as 'pin' | 'magnetic' | 'adhesive' })}
                  />
                </BlockStack>
              </Box>
            </BlockStack>
          </div>
        </Card>
      </div>

      {/* Right Panel: Badge Previews */}
      <div style={{ 
        width: isMobile ? '100%' : 350,
        minWidth: isMobile ? 'auto' : 300
      }}>
        <BadgeDesigner />
        {renderBadgePreviews()}
      </div>

      <Modal
        open={showDuplicateModal}
        onClose={() => setShowDuplicateModal(false)}
        title="Duplicate Badge"
      >
        <Modal.Section>
          <BlockStack gap="400">
            <Text as="p">
              You can duplicate your badge by either uploading a CSV file or pasting CSV data directly.
              Each line in the CSV will create a new badge.
            </Text>
            
            <Text as="h3" variant="headingMd">CSV Format Examples:</Text>
            <BlockStack gap="200">
              <Text as="p">For single-line badges:</Text>
              <div style={{ 
                backgroundColor: '#f6f6f7', 
                padding: '1rem', 
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                John Smith<br />
                Jane Doe<br />
                Bob Johnson
              </div>

              <Text as="p">For multi-line badges:</Text>
              <div style={{ 
                backgroundColor: '#f6f6f7', 
                padding: '1rem', 
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                John Smith,CEO,Company Inc<br />
                Jane Doe,CTO,Tech Corp<br />
                Bob Johnson,CFO,Finance LLC
              </div>
            </BlockStack>

            <div style={{ marginTop: '1rem' }}>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                style={{ marginBottom: '1rem' }}
              />
            </div>

            <TextField
              label="Or paste CSV data here:"
              value={csvData}
              onChange={handleCsvUpload}
              multiline={4}
              autoComplete="off"
            />
            {csvError && (
              <Banner tone="critical">
                <p>{csvError}</p>
              </Banner>
            )}
            <Button onClick={handleCsvSubmit}>Create Badges</Button>
          </BlockStack>
        </Modal.Section>
      </Modal>
    </div>
  );
}; 