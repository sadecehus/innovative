/**
 * Schema validation utilities
 * Provides validation functions for schema data
 */
import { BreadcrumbItem } from './schema'

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateBreadcrumbItems = (items: BreadcrumbItem[]): string[] => {
  const errors: string[] = []
  
  if (!items.length) {
    errors.push('Breadcrumb items cannot be empty')
  }
  
  items.forEach((item, index) => {
    if (!item.name?.trim()) {
      errors.push(`Breadcrumb item ${index + 1}: name is required`)
    }
    
    if (!item.url?.trim()) {
      errors.push(`Breadcrumb item ${index + 1}: url is required`)
    } else if (!validateUrl(item.url)) {
      errors.push(`Breadcrumb item ${index + 1}: invalid URL format`)
    }
  })
  
  return errors
}

export const sanitizeBreadcrumbItems = (items: BreadcrumbItem[]): BreadcrumbItem[] => {
  return items.map(item => ({
    name: item.name.trim(),
    url: item.url.trim()
  }))
}

/**
 * Schema data formatter utilities
 */
export const formatSchemaForJsonLd = (schema: any): string => {
  return JSON.stringify(schema, null, 2)
}

export const injectSchemaToHead = (schema: any, id: string): void => {
  if (typeof window === 'undefined') return
  
  // Remove existing schema
  const existing = document.getElementById(id)
  if (existing) {
    existing.remove()
  }
  
  // Add new schema
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = formatSchemaForJsonLd(schema)
  document.head.appendChild(script)
}
