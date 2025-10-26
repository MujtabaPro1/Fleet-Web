# Common Components

## DynamicContent Component

The `DynamicContent` component is designed to fetch content from an API endpoint and render it as HTML content on the page.

### Usage

```tsx
import DynamicContent from '@/components/common/DynamicContent';

// Basic usage
<DynamicContent contentKey="page-key" />

// With custom className
<DynamicContent 
  contentKey="page-key" 
  className="my-custom-class" 
/>

// With fallback content
<DynamicContent 
  contentKey="page-key" 
  fallbackContent={<div>Fallback content when API fails</div>} 
/>

// With custom loading state
<DynamicContent 
  contentKey="page-key" 
  isLoading={<div>Custom loading state...</div>} 
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| contentKey | string | Yes | The key to fetch content from the API |
| className | string | No | CSS class to apply to the container |
| fallbackContent | ReactNode | No | Content to display if API call fails |
| isLoading | ReactNode | No | Content to display while loading |

### API Response Format

The component expects the API to return a response in the following format:

```json
{
  "success": true,
  "data": {
    "content": "<div>HTML content goes here</div>"
  },
  "message": "Content retrieved successfully"
}
```

### Security Note

This component uses `dangerouslySetInnerHTML` to render the content. Make sure the API endpoint is secure and sanitizes the HTML content before sending it to the client.
