# 🚀 Quick Start - Google Search Recognition

## ⚡ Test in 30 Secondi

### Metodo Più Veloce (DevTools)

1. **Apri la pagina** `index.html` nel browser

2. **Apri DevTools** (F12 o Cmd+Option+I)

3. **Vai alla Console**

4. **Incolla e premi Enter:**
```javascript
Object.defineProperty(document, 'referrer', {
  value: 'https://www.google.com/search?q=cyber+snowfall+test',
  writable: false
});
location.reload();
```

5. **Risultato:**
   - ✅ Banner verde in alto con messaggio di benvenuto
   - ✅ Query "cyber snowfall test" mostrata
   - ✅ Auto-dismiss dopo 8 secondi

---

## 📊 Visualizza Statistiche

Nella Console DevTools:

```javascript
viewGoogleSearchStats()
```

**Output:**
```
📊 GOOGLE SEARCH ANALYTICS
═══════════════════════════════
Total visits from Google: 1

Visit #1:
  🕒 Time: [timestamp]
  🔍 Search Query: cyber snowfall test
  ...
```

---

## 🧹 Cancella Dati

```javascript
clearGoogleSearchStats()
```

---

## 🔄 Test Alternativo (Tool Interattivo)

1. **Apri** `test-google-search.html` nel browser

2. **Clicca** uno dei preset (es. "Cyber Snowfall")

3. **Clicca** "SIMULATE GOOGLE SEARCH VISIT"

4. **Risultato:** Nuova finestra con simulazione

---

## ✨ Cosa Verificare

- [ ] Banner appare in alto
- [ ] Query è visibile nel banner
- [ ] Pulsante ✕ funziona
- [ ] Auto-dismiss dopo 8 secondi
- [ ] Indicatore nel footer mostra conteggio
- [ ] `viewGoogleSearchStats()` funziona
- [ ] Dati salvati in localStorage

---

## 🐛 Troubleshooting

**Banner non appare?**
- Verifica: `console.log(document.referrer)`
- Deve contenere "google" e "/search"

**Analytics vuote?**
- Verifica localStorage: `localStorage.getItem('googleSearchVisits')`
- Dovrebbe restituire JSON array

**Errori in console?**
- Controlla che localStorage sia abilitato
- Verifica che JavaScript non sia bloccato

---

## 📚 Documentazione Completa

- **Feature completa:** `GOOGLE_SEARCH_INTEGRATION.md`
- **Changelog:** `CHANGELOG.md`
- **Summary:** `GOOGLE_SEARCH_IMPLEMENTATION_SUMMARY.md`

---

**Pronto in < 30 secondi! ⚡**
