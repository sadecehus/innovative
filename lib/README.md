# Schema Management System

Bu proje için geliştirilmiş modern ve esnek schema yönetim sistemi.

## 🚀 Özellikler

- **Clean Code Principles**: SOLID prensiplerine uygun kod yapısı
- **Type Safety**: Full TypeScript desteği
- **Component-Based Architecture**: Modüler ve yeniden kullanılabilir bileşenler
- **Configuration Management**: Merkezi konfigürasyon sistemi
- **Validation**: Girdi doğrulama ve hata yönetimi
- **Backward Compatibility**: Mevcut kodla uyumluluk

## 📁 Dosya Yapısı

```
lib/
├── config.ts          # Site konfigürasyonu
├── schema.ts          # Schema factory fonksiyonları
├── schema-utils.ts    # Validation ve utility fonksiyonları
└── schema.test.ts     # Test ve kullanım örnekleri
```

## 🔧 Kullanım

### 1. Temel Kullanım

```typescript
import { organizationSchema, websiteSchema } from './lib/schema'

// Varsayılan schema'ları kullan
const orgSchema = organizationSchema
const webSchema = websiteSchema
```

### 2. Özel Konfigürasyon

```typescript
import { createOrganizationSchema, createWebsiteSchema } from './lib/schema'

const customSchema = createOrganizationSchema({
  baseUrl: 'https://example.com',
  name: 'Custom Company',
  email: 'contact@example.com'
})
```

### 3. Breadcrumb Schema

```typescript
import { createBreadcrumbSchema } from './lib/schema'

const breadcrumbs = createBreadcrumbSchema([
  { name: 'Home', url: 'https://example.com' },
  { name: 'Services', url: 'https://example.com/services' }
])
```

### 4. Validation

```typescript
import { validateBreadcrumbItems } from './lib/schema-utils'

const items = [{ name: 'Home', url: 'https://example.com' }]
const errors = validateBreadcrumbItems(items)

if (errors.length > 0) {
  console.error('Validation errors:', errors)
}
```

## 🎯 Yapılan İyileştirmeler

### 1. **Kod Organizasyonu**
- Konfigürasyon ayrı dosyaya taşındı
- Utility fonksiyonlar ayrıldı
- Test dosyası eklendi

### 2. **Type Safety**
- Güçlü tip kontrolü
- Interface'ler tanımlandı
- Readonly types kullanıldı

### 3. **Component Architecture**
- Factory pattern implementasyonu
- Modüler bileşenler
- Yeniden kullanılabilir fonksiyonlar

### 4. **Error Handling**
- Comprehensive validation
- Meaningful error messages
- Graceful error handling

### 5. **Performance**
- Lazy evaluation
- Memoization ready
- Efficient data structures

## 🔄 Migration Guide

### Eski Kod:
```typescript
import { organizationSchema, websiteSchema, breadcrumbSchema } from './lib/schema'

// Direkt kullanım
const breadcrumbs = breadcrumbSchema([...])
```

### Yeni Kod:
```typescript
import { 
  organizationSchema, 
  websiteSchema, 
  createBreadcrumbSchema 
} from './lib/schema'

// Validation ile güvenli kullanım
const breadcrumbs = createBreadcrumbSchema([...])
```

## 🧪 Test Etme

```bash
# TypeScript kontrolü
npx tsc --noEmit

# Schema test fonksiyonunu çalıştır
node -e "require('./lib/schema.test.ts').testSchemaUsage()"
```

## 📊 Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🤝 Best Practices

1. **Her zaman validation kullanın**
2. **Custom config objeleri için type safety**
3. **Error handling implementasyonu**
4. **Test coverage sağlayın**
5. **Environment variables kullanın**

## 🔍 Debugging

Schema'nızı test etmek için:

```typescript
import { generateSchemaScript } from './lib/schema.test'

const schema = createOrganizationSchema()
console.log(generateSchemaScript(schema, 'org-schema'))
```

## 📈 Performance Tips

- Schema'ları component mount'tan önce generate edin
- Büyük breadcrumb listeler için pagination kullanın
- Validation'ı sadece gerekli yerlerde yapın

## 🛡️ Security

- URL validation otomatik yapılır
- XSS koruması için input sanitization
- Email format validation

Bu sistem sayesinde schema yönetiminiz artık daha güvenli, esnek ve maintainable! 🎉
