/**
 * Schema tests and usage examples
 * This file demonstrates how to use the schema functions
 */
import { 
  createOrganizationSchema, 
  createWebsiteSchema, 
  createBreadcrumbSchema,
  organizationSchema,
  websiteSchema,
  type BreadcrumbItem,
  type SchemaConfig 
} from './schema'

// Example usage of schema functions
export const testSchemaUsage = () => {
  console.log('=== Schema Usage Examples ===')
  
  // 1. Using default schemas
  console.log('1. Default Organization Schema:', organizationSchema)
  console.log('2. Default Website Schema:', websiteSchema)
  
  // 2. Using custom configuration
  const customConfig: SchemaConfig = {
    baseUrl: 'https://example.com',
    name: 'Custom Company',
    email: 'contact@example.com'
  }
  
  const customOrgSchema = createOrganizationSchema(customConfig)
  console.log('3. Custom Organization Schema:', customOrgSchema)
  
  // 3. Creating breadcrumb schema
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://innovative-trademark.com' },
    { name: 'Services', url: 'https://innovative-trademark.com/services' },
    { name: 'Web Development', url: 'https://innovative-trademark.com/services/web-development' }
  ]
  
  try {
    const breadcrumbSchemaResult = createBreadcrumbSchema(breadcrumbItems)
    console.log('4. Breadcrumb Schema:', breadcrumbSchemaResult)
  } catch (error) {
    console.error('Breadcrumb Schema Error:', error)
  }
  
  // 4. Error handling example
  try {
    const invalidBreadcrumb = createBreadcrumbSchema([])
  } catch (error) {
    console.log('5. Expected Error for empty breadcrumb:', (error as Error).message)
  }
  
  // 5. Validation example
  try {
    const invalidItems: BreadcrumbItem[] = [
      { name: '', url: 'https://example.com' },
      { name: 'Valid', url: '' }
    ]
    createBreadcrumbSchema(invalidItems)
  } catch (error) {
    console.log('6. Expected Validation Error:', (error as Error).message)
  }
}

// Helper function to generate JSON-LD script tag
export const generateSchemaScript = (schema: any, id: string): string => {
  return `<script type="application/ld+json" id="${id}">
${JSON.stringify(schema, null, 2)}
</script>`
}

// Example of complete page schema
export const generatePageSchema = (pageTitle: string, pageUrl: string) => {
  const organization = createOrganizationSchema()
  const website = createWebsiteSchema()
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: 'https://innovative-trademark.com' },
    { name: pageTitle, url: pageUrl }
  ])
  
  return {
    organization,
    website,
    breadcrumbs
  }
}

// Run tests in development
if (process.env.NODE_ENV === 'development') {
  testSchemaUsage()
}
