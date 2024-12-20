# Music Discovery App

A modern, responsive web application for discovering and playing music, built with React and TypeScript.

![Music Discovery App](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80)

## 🎵 Features

- **Music Search**: Search for tracks, artists, and albums
- **Category Browsing**: Explore music by different genres and categories
- **Artist Pages**: Dedicated pages for artists with their top tracks
- **Music Player**: Built-in player with play/pause controls and progress tracking
- **Responsive Design**: Seamless experience across all devices
- **Beautiful UI**: Modern, clean interface with blur effects and smooth animations

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context
- **API Integration**: MusicBrainz & Jamendo
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🛠️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Cards/         # Card components for various content types
│   ├── Layout/        # Layout components (Navbar, Sidebar)
│   ├── MusicPlayer/   # Music player components
│   ├── Navigation/    # Navigation components
│   └── TrackList/     # Track listing components
├── contexts/          # React Context providers
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── services/          # API services
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎨 Features in Detail

### Music Search
- Real-time search functionality
- Results grouped by tracks, artists, and albums
- Debounced API calls for better performance

### Category Browsing
- Pre-defined music categories
- Visual category cards with gradients
- Category-specific track listings

### Artist Pages
- Artist information and image
- Popular tracks listing
- Genre information when available

### Music Player
- Persistent player across navigation
- Play/pause controls
- Track progress visualization
- Volume control

## 🌐 Live Demo

Visit the live application: [Music Discovery App](https://stellar-caramel-5a5b24.netlify.app)

## 💻 Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security

- API rate limiting implemented
- Secure data handling
- No sensitive data exposure

## 🎨 UI/UX Features

- Smooth transitions and animations
- Backdrop blur effects
- Loading states and error handling
- Intuitive navigation
- Consistent design language

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- Music data provided by MusicBrainz and Jamendo
- Images from Unsplash
- Icons from Lucide React