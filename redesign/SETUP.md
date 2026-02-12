# Setup Guide

## NPM Cache Permission Issue

If you encounter an npm cache permission error when running `npm install`, fix it with:

```bash
sudo chown -R $(whoami) "$HOME/.npm"
```

Then run:

```bash
npm install
```

## Alternative: Use Yarn

If npm continues to have issues, you can use yarn instead:

```bash
# Install yarn if not already installed
npm install -g yarn

# Install dependencies
yarn install

# Run dev server
yarn dev
```

## Quick Start (After Dependencies are Installed)

1. **Configure booking link**: Edit `src/config.ts` and add your Google Calendar link
2. **Run dev server**: `npm run dev` or `yarn dev`
3. **Open browser**: Navigate to http://localhost:5173
4. **Test features**:
   - Click CTA buttons to test booking modal
   - Try the LinkedIn Bio Generator
   - Test on mobile viewport

## Verify Installation

After running `npm install`, verify these folders exist:
- `node_modules/` - Dependencies installed
- No build errors when running `npm run dev`

## Production Build

```bash
npm run build
# or
yarn build
```

The output will be in `dist/` folder, ready for deployment.

## Need Help?

Check the main README.md for full documentation.
