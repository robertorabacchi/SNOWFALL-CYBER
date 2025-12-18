# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-12-17

### Added - Google Search Integration

#### Core Features
- **Automatic Google Search Detection**
  - Detects visitors arriving from Google Search via referrer analysis
  - Supports all Google domains (google.com, google.it, google.co.uk, etc.)
  - Extracts search query from URL parameters

- **Personalized Welcome Banner**
  - Displays prominent banner at top of page for Google visitors
  - Shows search query used (if available)
  - Auto-dismisses after 8 seconds
  - Manual close button with smooth animations
  - Cyber-themed design matching site aesthetic

- **Privacy-Friendly Analytics**
  - Client-side localStorage tracking
  - No external services or tracking pixels
  - Stores last 10 visits maximum
  - User has full control over data

- **Developer Tools**
  - `viewGoogleSearchStats()` console command
  - `clearGoogleSearchStats()` console command
  - Detailed console logging for debugging
  - Visual indicator in footer showing visit count

#### Documentation
- **GOOGLE_SEARCH_INTEGRATION.md**
  - Comprehensive feature documentation
  - Technical implementation details
  - Privacy & GDPR compliance notes
  - Testing instructions
  - Customization guide
  - Troubleshooting section

- **test-google-search.html**
  - Interactive testing tool
  - Simulates Google Search referrer
  - Multiple preset search queries
  - Support for different Google domains

#### README Updates
- Added Google Search Recognition to features list
- New technical details section for Google integration
- Testing guide for developers
- Updated project structure
- New links section with documentation references

### Data Structure

Each Google Search visit stores:
```json
{
  "timestamp": "ISO 8601 format",
  "referrer": "Full Google Search URL",
  "searchQuery": "Extracted search term",
  "userAgent": "Browser user agent",
  "language": "Browser language"
}
```

### Browser Support

Tested and working on:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

### Security & Privacy

- ✅ No cookies used
- ✅ No external tracking
- ✅ All data stored locally
- ✅ GDPR compliant
- ✅ User has full data control

---

## [1.0.0] - 2025-12-15

### Initial Release

#### Core Features
- **WebGL Bookmarklet**
  - 1000 digital particles (0 and 1)
  - GPU-accelerated rendering
  - Native WebGL implementation
  - Zero dependencies

- **Landing Page**
  - Cyber/tech themed design
  - Responsive layout
  - Live demo functionality
  - Multi-language support (IT/EN)

- **Performance**
  - 60 FPS on modern browsers
  - Mobile optimized
  - Hardware acceleration
  - Efficient particle system

#### Files
- `index.html` - Main landing page
- `snowfall-cyber.js` - Readable bookmarklet code
- `snowfall-cyber-webgl.js` - WebGL version
- `netlify.toml` - Deployment configuration
- `README.md` - Project documentation

---

## Development Notes

### Version Numbering
- **Major (X.0.0)**: Breaking changes or major features
- **Minor (0.X.0)**: New features, backward compatible
- **Patch (0.0.X)**: Bug fixes and minor improvements

### Contributing
See README.md for contribution guidelines.

---

**Made with ⚡ by DIGITALENGINEERED.AI**

**TITAN PROTOCOL v4.5 | CYBER EDITION**
