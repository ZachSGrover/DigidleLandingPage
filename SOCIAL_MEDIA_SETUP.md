# Social Media Preview Setup

## 📸 Social Media Image Requirements

To replace the placeholder social preview image, follow these steps:

### 1. **Create Your Social Preview Image**
- **File name**: `social-preview.png`
- **Location**: `/public/social-preview.png`
- **Dimensions**: 1200x630 pixels (Open Graph standard)
- **Format**: PNG or JPG
- **File size**: Under 5MB (recommended under 1MB)

### 2. **Design Guidelines**
- **Safe area**: Keep important content within 1200x630px
- **Text**: Use large, readable fonts (minimum 24px)
- **Branding**: Include Digidle logo and brand colors
- **Content**: Show key value proposition or hero message
- **Background**: Use your brand colors (#1a3d2e primary, #00ff88 accent)

### 3. **Recommended Content**
Include these elements in your social preview:
- Digidle logo
- Main headline: "Connect With Vetted Digital Talent"
- Subheading: "The digital talent marketplace for entrepreneurs and creators"
- Call-to-action: "Apply Now" or "Join Free Community"
- Brand colors and styling

### 4. **Testing Your Image**
After adding your image, test it using:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 5. **Current Meta Tags**
The following meta tags are already configured:
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Image dimensions and alt text
- Theme colors matching your brand

### 6. **File Structure**
```
public/
├── social-preview.png  ← Your social media image goes here
├── favicon.png
├── favicon.ico
└── ...other assets
```

## 🚀 Next Steps
1. Create your 1200x630px social preview image
2. Save it as `social-preview.png` in the `/public/` folder
3. Deploy to Vercel
4. Test the social sharing on different platforms

## 📱 Platforms That Will Use This Image
- Facebook posts and shares
- Twitter/X posts and cards
- LinkedIn posts and shares
- Instagram story links
- WhatsApp link previews
- Slack link previews
- Discord link previews
- Most messaging apps

The image will automatically appear when someone shares your website URL on these platforms!
