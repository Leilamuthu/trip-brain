# Trip Brain Deployment Guide

## Quick Deploy to Netlify

### Step 1: Prepare Your GitHub Repository

If not already done, create a GitHub repo and push the code:

```bash
cd trip-brain
git add .
git commit -m "Initial commit: Trip Brain chatbot"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in (create account if needed)
3. Click "New site from Git"
4. Select GitHub and authorize
5. Choose your `trip-brain` repository
6. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** Set to 18 in netlify.toml (already done)

### Step 3: Add Environment Variables

In Netlify dashboard:

1. Go to **Site settings** → **Environment**
2. Click "Add a variable"
3. Add:
   - **Key:** `CLAUDE_API_KEY`
   - **Value:** (Your Anthropic API key from https://console.anthropic.com)
4. Click "Deploy site"

### Step 4: Deploy

Netlify will automatically:
- Install dependencies (`npm install`)
- Build the app (`npm run build`)
- Deploy to Netlify servers

This takes ~2-3 minutes. Once done, you'll get a deploy URL like:
`https://trip-brain-abc123.netlify.app`

### Step 5: Get Your Shareable Link

Your Trip Brain is now live! Share the link with Michael:

```
Check out our trip companion! https://trip-brain-abc123.netlify.app
```

He can:
- Open in browser on any device
- Tap "Add to Home Screen" on mobile to install as app
- Works offline for basic trip info

## Local Development

To test before deploying:

```bash
# Install deps
npm install

# Run dev server (Vite)
npm run dev

# In another terminal, run Netlify functions locally:
netlify dev
```

Visit http://localhost:8888 to test with local functions.

## Troubleshooting

### "Claude API key not configured"
- Check Netlify environment variables
- Make sure key is set under `CLAUDE_API_KEY`
- Redeploy after adding env var

### "Failed to get response from Claude"
- Check Claude API key is valid
- Check you have API credits
- Check internet connection

### App loads but chat doesn't work
- Check browser console (F12) for errors
- Verify Netlify function deployed (check in dashboard)
- Clear cache and hard refresh (Ctrl+Shift+R)

### "You appear to be offline"
- Check internet connection
- Service Worker cached the app - this is normal!
- API calls need internet, but trip data is available offline

## Keeping It Updated

To push updates to production:

```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

Netlify automatically redeploys on every push to main.

## Monitoring Deployments

In Netlify Dashboard:
- **Deploys** tab shows all deployments
- **Functions** tab shows CloudFunction logs
- **Analytics** shows usage stats

## Custom Domain (Optional)

To use your own domain:

1. Buy domain (e.g., tripbrain.com)
2. In Netlify, go to **Domain settings**
3. Add custom domain
4. Follow DNS instructions for your registrar
5. Netlify auto-renews SSL certificate

## Cost

**Netlify:**
- Free tier: 125,000 build minutes/month, 100 GB bandwidth
- This trip chatbot uses ~10 build minutes, minimal bandwidth
- **Cost: Free**

**Anthropic API:**
- Claude API charges per token
- Estimated usage for this trip: ~1-5 USD depending on conversation volume
- **Cost: Pay-as-you-go** (typically <$10 for a month-long trip)

## Need Help?

- Netlify docs: https://docs.netlify.com
- Claude API docs: https://docs.anthropic.com
- React docs: https://react.dev
- Report issues in GitHub or contact me
