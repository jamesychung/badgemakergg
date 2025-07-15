// Badge Designer Modal Component
class BadgeDesignerModal {
  constructor(options = {}) {
    this.productId = options.productId || null;
    this.isOpen = false;
    this.modal = null;
    this.backdrop = null;
    
    this.init();
  }

  init() {
    this.createModal();
    this.bindEvents();
    this.setupPostMessageListener();
  }

  createModal() {
    // Create modal backdrop
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'badge-modal-backdrop';
    this.backdrop.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      display: none;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    `;

    // Create modal container
    this.modal = document.createElement('div');
    this.modal.className = 'badge-modal-container';
    this.modal.style.cssText = `
      background: white;
      border-radius: 12px;
      width: 100%;
      max-width: 1400px;
      height: 90vh;
      position: relative;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      overflow: hidden;
    `;

    // Create modal content with iframe pointing to Vercel-hosted badge designer
    // Use production Vercel URL as primary, fallback to localhost for local development
    const isLocalDev = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
    const badgeDesignerUrl = isLocalDev 
      ? `http://127.0.0.1:5173` + (this.productId ? `?product=${this.productId}` : '')
      : `https://badge-designer-frontend.vercel.app` + (this.productId ? `?product=${this.productId}` : '');
    
    this.modal.innerHTML = `
      <div class="badge-modal-header" style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        border-bottom: 1px solid #e5e7eb;
        background: white;
        border-radius: 12px 12px 0 0;
      ">
        <h2 style="
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        ">Badge Designer</h2>
        <button class="badge-modal-close" style="
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: background-color 0.2s;
        " onmouseover="this.style.backgroundColor='#f3f4f6'" onmouseout="this.style.backgroundColor='transparent'">
          ×
        </button>
      </div>
      <iframe 
        id="badge-designer-iframe"
        src="${badgeDesignerUrl}"
        style="
          width: 100%;
          height: calc(100% - 65px);
          border: none;
          background: white;
        "
        title="Badge Designer"
      ></iframe>
    `;

    this.backdrop.appendChild(this.modal);
    document.body.appendChild(this.backdrop);
  }

  setupPostMessageListener() {
    // Listen for messages from the iframe
    window.addEventListener("message", (event) => {
      // Verify origin for security - handle both dev and prod
      const isLocalDev = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
      const expectedOrigin = isLocalDev ? "http://127.0.0.1:5173" : "https://badge-designer-frontend.vercel.app";
      
      if (event.origin !== expectedOrigin) return;

      if (event.data?.action === "add-to-cart") {
        this.handleAddToCart(event.data.payload);
      }

      if (event.data?.action === "close-modal") {
        this.close();
      }
    });
  }

  handleAddToCart(badgeData) {
    // Add to Shopify cart using AJAX API
    fetch("/cart/add.js", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: badgeData.variantId, // Shopify variant ID
        quantity: 1,
        properties: {
          "Badge Text Line 1": badgeData.line1 || '',
          "Badge Text Line 2": badgeData.line2 || '',
          "Badge Text Line 3": badgeData.line3 || '',
          "Badge Text Line 4": badgeData.line4 || '',
          "Background Color": badgeData.backgroundColor,
          "Font Family": badgeData.fontFamily,
          "Backing Type": badgeData.backing,
          "Design ID": badgeData.designId,
          "Design Data": JSON.stringify(badgeData.fullDesignData)
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 422) {
        alert('Error adding to cart: ' + data.description);
      } else {
        this.close();
        // Optionally redirect to cart or show success message
        window.location.href = "/cart";
      }
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
      alert('Error adding badge to cart. Please try again.');
    });
  }

  bindEvents() {
    // Close button
    this.modal.querySelector('.badge-modal-close').addEventListener('click', () => {
      this.close();
    });

    // Close on backdrop click
    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open() {
    this.isOpen = true;
    this.backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    this.backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Global function to create and open modal
window.openBadgeDesignerModal = function(productId) {
  if (!window.badgeDesignerModal) {
    window.badgeDesignerModal = new BadgeDesignerModal({ productId });
  }
  window.badgeDesignerModal.open();
}; 