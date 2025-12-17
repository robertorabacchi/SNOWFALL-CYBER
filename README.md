# ⚡ CYBER SNOWFALL - Extreme Edition

## 🎯 2500 Digital Particles | GPU Accelerated | ✦ 0 1

Landing page for extreme cyber snowfall bookmarklet with **2500 particles**.

---

## 📁 Structure

```
snowfall-cyber/
├── index.html                      # Landing page (cyber theme)
├── snowfall-cyber.js               # Bookmarklet script (readable version)
├── snowfall-cyber-webgl.js         # WebGL version script
├── netlify.toml                    # Netlify config
├── README.md                       # This guide
└── GOOGLE_SEARCH_INTEGRATION.md    # Google Search feature docs
```

---

## ⚡ Features

### **EXTREME MODE:**
- **2500 particles** on desktop (crazy dense!)
- **500 particles** on mobile (auto-detect for performance)
- **Cyber symbols:** `✦ 0 1`
- **Color:** Cyber green (`#00ff9f`)
- **GPU-accelerated** (smooth 60 FPS)
- **Toggle ON/OFF** (click to enable/disable)

### **GOOGLE SEARCH RECOGNITION:**
- **Automatic detection** of visitors from Google Search
- **Personalized welcome banner** with search query display
- **Analytics tracking** (localStorage-based, privacy-friendly)
- **Search query extraction** from referrer URL
- **Auto-dismiss banner** after 8 seconds
- **Manual close button** for immediate dismissal

### **Landing Page:**
- Cyber/tech theme (dark + neon green)
- Grid background
- Monospace font
- Corner decorations
- Live demo
- Performance warning

---

## 🚀 Deploy

### Repository
```bash
cd /Users/user/NATALE2025/snowfall-cyber
git init
git add .
git commit -m "⚡ Initial commit - CYBER SNOWFALL"
git remote add origin https://github.com/robertorabacchi/SNOWFALL-CYBER.git
git push -u origin main
```

### Netlify
1. **Import from GitHub:** `robertorabacchi/SNOWFALL-CYBER`
2. **Build settings:** (leave default or empty)
3. **Publish directory:** `.`
4. **Deploy**

---

## 🌐 Custom Domain

Suggested: `snowcyber.digitalengineered.ai` or `cyber.digitalengineered.ai`

**Netlify:**
- Add custom domain

**Squarespace DNS:**
- CNAME record: `snowcyber` → `[site].netlify.app`

---

## 🎯 Usage

### For Users:
1. Visit: `https://snowcyber.digitalengineered.ai`
2. Drag "⚡ CYBER SNOW" to bookmarks
3. Go to any website
4. Click bookmark
5. **BOOM!** 2500 cyber particles! ✦ 0 1

### Toggle:
- Click bookmark again to **disable**
- Works like an on/off switch

---

## ⚙️ Technical Details

### Performance:
- **Desktop:** 2500 particles
- **Mobile:** 500 particles (auto-detect)
- **GPU acceleration:** `transform: translateZ(0)` + `will-change`
- **Optimized animations:** CSS keyframes
- **Z-index:** 999999 (always on top)

### Google Search Recognition:
- **Detection method:** `document.referrer` analysis
- **Supported domains:** google.com, google.it, and all Google TLDs
- **Search query extraction:** URL parameter parsing (`?q=...`)
- **Storage:** localStorage (privacy-friendly, client-side only)
- **Data retention:** Last 10 visits maximum
- **No external tracking:** All data stays in user's browser
- **Graceful fallback:** Works even if localStorage is disabled

### Analytics Data Collected (Local Only):
```javascript
{
  timestamp: "2025-12-17T10:30:00.000Z",
  referrer: "https://google.com/search?q=cyber+snowfall",
  searchQuery: "cyber snowfall",
  userAgent: "Mozilla/5.0...",
  language: "it-IT"
}
```

### Browser Support:
- ✅ Chrome/Edge/Brave
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ 99% of websites

### Blocked Sites:
- ❌ Gmail (CSP)
- ❌ Google Docs (CSP)
- ❌ Some banking sites (security)

---

## 🔍 Testing Google Search Recognition

### Method 1: Direct Simulation
1. Open browser DevTools (F12)
2. Go to Console
3. Run this command:
```javascript
// Simulate a Google Search visit
Object.defineProperty(document, 'referrer', {
  value: 'https://www.google.com/search?q=cyber+snowfall',
  writable: false
});
// Reload the page
location.reload();
```

### Method 2: Actual Google Search
1. Go to Google.com
2. Search for: `cyber snowfall site:yourdomain.com`
3. Click on your result
4. You'll see the welcome banner

### Method 3: Manual Referrer Header (Advanced)
Use a browser extension like "Referer Control" to set a custom referrer:
```
https://www.google.com/search?q=test+query
```

### Developer Console Commands

Once on the page, use these commands in the browser console:

**View Analytics:**
```javascript
viewGoogleSearchStats()
```

**Clear Analytics:**
```javascript
clearGoogleSearchStats()
```

**Example Output:**
```
📊 GOOGLE SEARCH ANALYTICS
═══════════════════════════════════════
Total visits from Google: 3

Visit #1:
  🕒 Time: 12/17/2025, 10:30:15 AM
  🔍 Search Query: cyber snowfall
  🌐 Referrer: https://google.com/search?q=cyber+snowfall
  💻 Browser: Mozilla/5.0 (Windows NT...
  🌍 Language: en-US

🔝 Top Search Queries:
  "cyber snowfall": 2 time(s)
  "webgl particles": 1 time(s)
═══════════════════════════════════════
```

---

## 🎨 Customization

### Change particle count:
```javascript
const particleCount = isMobile ? 500 : 2500;  // Adjust numbers
```

### Change symbols:
```javascript
const shapes = ['✦', '0', '1'];  // Add/remove symbols
```

### Change color:
```css
color: #00ff9f;  // Cyber green (change hex)
```

### Change speed:
```javascript
animationDuration: (6 + Math.random() * 6) + 's'  // 6-12s range
```

---

## 📊 Comparison

| Feature | SNOWFALL (classic) | SNOWFALL-CYBER |
|---------|-------------------|----------------|
| Particles | 100 | 2500 (desktop) / 500 (mobile) |
| Symbols | ❄ | ✦ 0 1 |
| Color | White | Cyber green |
| Theme | Winter | Cyber/Tech |
| Performance | Light | Heavy (GPU recommended) |

---

## ⚠️ Performance Warning

**2500 particles is EXTREME!**

- Requires decent GPU
- May lag on older devices
- Mobile auto-reduces to 500
- Test on your device first

**Recommended specs:**
- Modern browser (2020+)
- GPU with hardware acceleration
- 4GB+ RAM

---

## 🎁 Social Sharing

### Post Template:

**LinkedIn/Facebook:**
```
⚡ EXTREME CYBER SNOWFALL! ⚡

Ho creato un bookmarklet con 2500 particelle cyber (✦ 0 1)
che fanno "nevicare" su qualsiasi sito web!

GPU-accelerated | Responsive | Toggle ON/OFF

Prova qui: [link]

#WebDevelopment #JavaScript #Cyberpunk #Coding
```

**Twitter/X:**
```
⚡ 2500 cyber particles (✦ 0 1) on ANY website!
Extreme snowfall bookmarklet.

[link]

#JavaScript #Cyberpunk
```

---

## 🔗 Links

### Live Sites
- **Classic Snow:** `https://snow.digitalengineered.ai`
- **Cyber Snow:** `https://snowcyber.digitalengineered.ai`

### Repositories
- **GitHub Classic:** `https://github.com/robertorabacchi/SNOWFALL`
- **GitHub Cyber:** `https://github.com/robertorabacchi/SNOWFALL-CYBER`

### Documentation
- **Main README:** `README.md`
- **Google Search Integration:** `GOOGLE_SEARCH_INTEGRATION.md`
- **Test Page:** `test-google-search.html` (for local testing)

---

## 📞 Support

**Issues:** GitHub Issues  
**Email:** info@digitalengineered.ai  
**Website:** https://digitalengineered.ai

---

**Made with ⚡ by DIGITALENGINEERED.AI**  
**TITAN PROTOCOL v4.5 | CYBER EDITION**
