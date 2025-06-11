import React, { useState, useEffect } from 'react';
import { SessionToken } from '@shopify/app-bridge/actions';

interface BadgeDesign {
  text: string;
  size: number;
  color: string;
  backgroundColor: string;
  fontFamily: string;
  alignment: string;
  backing: string;
}

export const BadgeDesigner: React.FC = () => {
  const [design, setDesign] = useState<BadgeDesign>({
    text: '',
    size: 24,
    color: '#000000',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial',
    alignment: 'center',
    backing: 'pin'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDesign = async () => {
    try {
      setLoading(true);
      const tokenAction = SessionToken.request();
      const sessionToken = await tokenAction.dispatch(window.appBridge);
      
      const response = await fetch('/api/design', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to load design');
      }
      
      const data = await response.json();
      setDesign(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load design');
    } finally {
      setLoading(false);
    }
  };

  const saveDesign = async () => {
    try {
      setLoading(true);
      const tokenAction = SessionToken.request();
      const sessionToken = await tokenAction.dispatch(window.appBridge);
      
      const response = await fetch('/api/design', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify(design)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save design');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save design');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDesign();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="badge-designer">
      <div className="preview" style={{
        backgroundColor: design.backgroundColor,
        color: design.color,
        fontSize: `${design.size}px`,
        fontFamily: design.fontFamily,
        textAlign: design.alignment as 'left' | 'center' | 'right',
        padding: '20px',
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        {design.text || 'Preview Text'}
      </div>
      
      <div className="controls">
        <input
          type="text"
          value={design.text}
          onChange={(e) => setDesign({ ...design, text: e.target.value })}
          placeholder="Enter badge text"
        />
        
        <input
          type="number"
          value={design.size}
          onChange={(e) => setDesign({ ...design, size: Number(e.target.value) })}
          min="8"
          max="72"
        />
        
        <input
          type="color"
          value={design.color}
          onChange={(e) => setDesign({ ...design, color: e.target.value })}
        />
        
        <input
          type="color"
          value={design.backgroundColor}
          onChange={(e) => setDesign({ ...design, backgroundColor: e.target.value })}
        />
        
        <select
          value={design.fontFamily}
          onChange={(e) => setDesign({ ...design, fontFamily: e.target.value })}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>
        
        <select
          value={design.alignment}
          onChange={(e) => setDesign({ ...design, alignment: e.target.value })}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
        
        <select
          value={design.backing}
          onChange={(e) => setDesign({ ...design, backing: e.target.value })}
        >
          <option value="pin">Pin</option>
          <option value="magnetic">Magnetic</option>
          <option value="adhesive">Adhesive</option>
        </select>
        
        <button onClick={saveDesign}>Save Design</button>
      </div>
    </div>
  );
}; 