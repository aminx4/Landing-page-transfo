# Landing Page for IT Leaders

High-conversion one-page executive landing targeting banking IT leaders for Agile@Scale transformation consulting.

## Features

- **Pixel-perfect design** - Executive-grade minimalistic design with deep blue, teal, and gold accents
- **Google Calendar booking** - Soft CTA with modal that opens your Google Appointment Schedule
- **LinkedIn Bio Generator** - Simple client-side tool that transforms LinkedIn text into executive bio format
- **Fully responsive** - Mobile-optimized with smooth scrolling
- **Fast & lightweight** - Built with React + Vite + TypeScript

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure your booking link

Edit `src/config.ts` and replace the placeholder with your actual Google Calendar booking link:

```typescript
export const config = {
  // Replace this with your Google Appointment Schedule link
  bookingLink: 'https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID',
  
  // Customize CTA text if needed
  ctaText: 'Planifier un échange de 20 minutes',
  meetingDuration: '20 minutes',
  
  // Add your contact info
  linkedInUrl: 'https://www.linkedin.com/in/YOUR_PROFILE',
  email: 'your.email@example.com',
}
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Page Structure

The landing page consists of 6 sections:

1. **Hero Section** - Value statement with primary CTA
2. **Challenges Section** - Banking IT challenges (4 pain points)
3. **Value Proposition** - How you support IT leaders (4 value points)
4. **Credibility Section** - Experience and trust signals
5. **LinkedIn Bio Generator** - Interactive tool for generating executive bios
6. **CTA Section** - Repeated soft CTA for booking
7. **Footer** - Contact links and legal

## Key Components

### BookingModal

Modal component that opens when users click any CTA button. Features:
- Shows confirmation message
- Opens Google Calendar link in new tab
- Auto-closes after 3 seconds
- Trust signals (confidential, no commitment, peer-to-peer)

Used in: `HeroSection.tsx` and `CTASection.tsx`

### LinkedInBioGenerator

Client-side tool that processes LinkedIn profile text:
- **Input**: LinkedIn About + Experience sections (pasted text)
- **Output**: Executive headline, credibility bullets, value bullets, bio paragraph
- Copy-to-clipboard functionality
- No server/API calls - 100% client-side

## Customization

### Change booking link

Edit `src/config.ts`

### Edit content

Content is directly in components:
- `src/app/components/HeroSection.tsx` - Hero headline and CTA
- `src/app/components/ChallengesSection.tsx` - Challenge cards
- `src/app/components/ValuePropositionSection.tsx` - Value propositions
- `src/app/components/CredibilitySection.tsx` - Credentials
- `src/app/components/TestimonialsSection.tsx` - Client testimonials (editable data array)
- `src/app/components/CTASection.tsx` - Final CTA
- `src/app/components/Footer.tsx` - Footer links

### Styling

The app uses Tailwind CSS. Theme colors:
- Primary: Deep blue (`slate-900`, `blue-900`)
- Accent: Teal (`teal-600`)
- Background: White with subtle gradients

Edit styles in component files or in `src/styles/` directory.

## Testing Checklist

- [ ] All CTA buttons open the booking modal
- [ ] Booking modal opens Google Calendar link in new tab
- [ ] LinkedIn Bio Generator accepts input and generates output
- [ ] Copy to clipboard works
- [ ] Page is responsive on mobile/tablet
- [ ] All links work and open in appropriate tabs
- [ ] No console errors

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

Simply run `npm run build` and upload the `dist/` folder.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icons

## Project Origin

Original Figma design: https://www.figma.com/design/TcDYM2WBvG9J3nZ7Hu5n0Y/Landing-page-for-IT-leader

## License

Private project - All rights reserved
