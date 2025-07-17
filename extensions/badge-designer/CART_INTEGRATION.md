# Badge Designer Cart Integration Guide

To display custom badge designs properly in your cart, you need to add some code to your theme's cart template.

## Option 1: Add Badge Details to Existing Cart Template

1. Go to your Shopify admin → Online Store → Themes
2. Click "Actions" → "Edit code"
3. Navigate to `templates/cart.liquid`
4. Find where cart items are displayed (usually in a loop like `{% for item in cart.items %}`)
5. Add this code after the product title but before the price:

```liquid
{% comment %} Add this after the product title {% endcomment %}
{% if item.properties['Custom Badge Design'] == 'Yes' %}
  <div class="badge-design-details" style="margin-top: 8px; padding: 8px; background: #f8f9fa; border-radius: 4px; border-left: 3px solid #007cba;">
    <p style="margin: 0 0 4px 0; font-weight: 600; color: #333;">Custom Badge Design:</p>
    
    {% if item.properties['Badge Text Line 1'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Line 1:</strong> {{ item.properties['Badge Text Line 1'] }}</p>
    {% endif %}
    {% if item.properties['Badge Text Line 2'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Line 2:</strong> {{ item.properties['Badge Text Line 2'] }}</p>
    {% endif %}
    {% if item.properties['Badge Text Line 3'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Line 3:</strong> {{ item.properties['Badge Text Line 3'] }}</p>
    {% endif %}
    {% if item.properties['Badge Text Line 4'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Line 4:</strong> {{ item.properties['Badge Text Line 4'] }}</p>
    {% endif %}
    
    {% if item.properties['Background Color'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Background:</strong> {{ item.properties['Background Color'] }}</p>
    {% endif %}
    {% if item.properties['Backing Type'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Backing:</strong> {{ item.properties['Backing Type'] | capitalize }}</p>
    {% endif %}
    {% if item.properties['Font Family'] != blank %}
      <p style="margin: 2px 0; font-size: 14px;"><strong>Font:</strong> {{ item.properties['Font Family'] }}</p>
    {% endif %}
  </div>
{% endif %}
```

## Option 2: Use Custom Thumbnail (Advanced)

To display the custom badge thumbnail instead of the product image, find the cart item image and replace it with:

```liquid
{% if item.properties['Custom Badge Design'] == 'Yes' and item.properties['Custom Thumbnail'] %}
  <img src="{{ item.properties['Custom Thumbnail'] }}" 
       alt="Custom Badge Design" 
       style="width: 80px; height: 80px; object-fit: contain; border: 1px solid #ddd; border-radius: 4px;">
{% else %}
  <img src="{{ item.image | img_url: '80x80' }}" 
       alt="{{ item.title | escape }}">
{% endif %}
```

## Option 3: Complete Cart Template Replacement

If you want to use our complete cart template:

1. Copy the contents of `templates/cart.liquid` from this extension
2. Replace your theme's `templates/cart.liquid` file with this content
3. Save and test

## Testing

After making changes:
1. Add a custom badge to your cart
2. Go to `/cart` to see if the badge details are displayed
3. Check that the custom thumbnail appears (if you implemented Option 2)

## Support

If you need help with theme integration, contact your theme developer or Shopify support. 