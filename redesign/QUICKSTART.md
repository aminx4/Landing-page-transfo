# ⚡ Quick Start

## 🚀 In 4 Steps

### 1️⃣ Fix NPM (if needed)
```bash
sudo chown -R $(whoami) "$HOME/.npm"
```

### 2️⃣ Install & Configure
```bash
cd redesign
npm install
```

Edit `src/config.ts`:
```typescript
bookingLink: 'YOUR_GOOGLE_CALENDAR_LINK_HERE'
```

### 3️⃣ Run
```bash
npm run dev
```

Visit: **http://localhost:5173**

### 4️⃣ Deploy
```bash
npm run build
```

Upload `dist/` folder to Vercel/Netlify

---

## 📋 What Works

✅ **2 CTA Buttons** → Opens booking modal → Opens Google Calendar  
✅ **LinkedIn Bio Generator** → Paste text → Generate bio → Copy  
✅ **6 Landing Sections** → All from redesign/ implemented  
✅ **Mobile Responsive** → Works on all devices  
✅ **Fast & Lightweight** → No backend needed  

---

## 🎯 Files to Edit

| What | Where | Why |
|------|-------|-----|
| **Booking link** | `src/config.ts` | Your Google Calendar URL |
| **Hero text** | `src/app/components/HeroSection.tsx` | Main headline |
| **Challenges** | `src/app/components/ChallengesSection.tsx` | 4 pain points |
| **Value props** | `src/app/components/ValuePropositionSection.tsx` | 4 value points |
| **Credentials** | `src/app/components/CredibilitySection.tsx` | Experience cards |
| **Footer links** | `src/app/components/Footer.tsx` | LinkedIn, contact |

---

## 📚 Full Docs

- **README.md** - Complete documentation
- **SETUP.md** - Troubleshooting
- **IMPLEMENTATION_SUMMARY.md** - What was built

---

## 💡 One-Line Commands

**Install:** `npm install`  
**Run:** `npm run dev`  
**Build:** `npm run build`  
**Test:** Open http://localhost:5173 and click all buttons
