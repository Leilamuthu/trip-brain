# Trip Brain

A travel companion chatbot PWA for Ireland & Spain (22 Aug - 20 Sept 2026).

## Features

- 🧠 AI-powered chat interface using Claude API
- 💡 Context-aware suggested prompts (breakfast/lunch/dinner, accommodation, activities)
- 🏨 Instant access to all accommodation details
- ✈️ Transport information (flights, trains, car hire)
- 🚴 Bike ride integration (Wee Dander app)
- 🍽️ Foodie-focused restaurant recommendations
- 🆘 Emergency contacts & travel insurance info
- 🌐 Works offline (service worker caching)
- 📱 Mobile-first responsive design
- 🏠 Progressive Web App (installable on mobile)

## Setup

### Prerequisites
- Node.js 18+
- Netlify CLI (for local development with functions)
- Claude API key

### Installation

1. Clone the repo and install dependencies:
```bash
cd trip-brain
npm install
```

2. Create a `.env` file in the root with your Claude API key:
```
CLAUDE_API_KEY=your_api_key_here
```

3. Run locally:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Netlify Functions (Local Testing)

To test the Claude API integration locally, run:
```bash
netlify dev
```

This starts both the Vite dev server and Netlify Functions at `http://localhost:8888`

## Deployment

### Deploy to Netlify

1. Push to GitHub
2. Connect to Netlify:
   - Go to Netlify
   - Click "New site from Git"
   - Select your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. Add environment variables in Netlify:
   - Go to Site settings → Environment
   - Add `CLAUDE_API_KEY` with your API key

4. Deploy!

The app will be live at `https://trip-brain-2026.netlify.app` (or your custom domain)

## Architecture

- **Frontend:** React + Vite
- **Styling:** CSS3 with CSS variables
- **Backend:** Netlify serverless functions
- **AI:** Claude API (claude-3-5-sonnet)
- **Offline:** Service Worker (network-first for API, cache-first for assets)
- **PWA:** Web App Manifest for mobile installation

## Files Structure

```
trip-brain/
├── src/
│   ├── components/           # React components
│   ├── data/                # Trip data
│   ├── styles/              # Component styles
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── netlify/
│   └── functions/           # Serverless functions (Claude API)
├── public/
│   ├── sw.js               # Service worker
│   └── manifest.json       # PWA manifest
├── index.html              # HTML entry point
├── vite.config.js          # Vite config
├── netlify.toml            # Netlify config
└── package.json            # Dependencies
```

## Key Features Explained

### Suggested Prompts (Hybrid Model)
- **On first load:** 2-3 prompts visible below input
- **During chat:** Prompts hide when user types
- **Toggle:** User can click "Suggestions" button to show/hide

### Context-Aware Suggestions
- **Time-based:** Different prompts at breakfast/lunch/dinner times
- **Location-based:** Suggestions adapt to current location in itinerary
- **Activity-based:** Prompts show upcoming events, bike stages, etc.

### Offline Capability
- Service Worker caches app shell on first load
- User can chat offline with cached trip data
- API calls show error message when offline
- Full sync when back online

### Trip Data
- Pre-loaded accommodation, transport, activities, restaurants
- Structured JSON data passed to Claude in system prompt
- No external API calls for trip info (faster, works offline)

## Usage Tips

- **Breakfast/Lunch/Dinner:** Ask by time of day ("Where's breakfast?")
- **Next accommodation:** "What's my hotel tonight?"
- **Flights:** "When's my next flight?" or "Flight details"
- **Restaurants:** "Where should I eat?" or "Foodie spots in [city]"
- **Emergency:** "Emergency contacts" or "Travel insurance"
- **Bike ride:** "Today's bike route" or "Wee Dander"
- **Translation:** "How do I say [phrase] in Spanish?"

## Performance

- **Chat response:** ~1-2 seconds (Claude API)
- **Offline mode:** Instant (cached)
- **App load:** ~2 seconds (Vite optimized)
- **Mobile:** Full experience on phones/tablets

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

- Real-time booking status updates
- Weather forecast integration
- Local transportation live data
- Photo gallery from trip
- Expense tracking
- Group message sharing (with Michael)

## License

Private - for Leila & Michael's trip only

---

Built with ❤️ for Ireland & Spain 2026
