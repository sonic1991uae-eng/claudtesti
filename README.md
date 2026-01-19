# Cycling Adventure Game

A casual web-based cycling game where you play as a female cyclist exploring various routes, managing equipment, and enjoying cycling adventures.

## Features

- **Route Selection**: Choose from 4 different cycling routes with varying difficulty levels
- **Bicycle Collection**: Collect and upgrade different types of bicycles (City, Road, Mountain, Hybrid)
- **Equipment Management**: Equip helmets, clothing, shoes, and accessories to boost your performance
- **Trip Simulation**: Experience cycling trips with dynamic events and stamina management
- **Progression System**: Earn experience and coins to level up and unlock new content

## How to Run

### Method 1: Python HTTP Server (Recommended)

1. Open a terminal in the project directory
2. Run one of these commands:
   ```bash
   python3 -m http.server 8000
   # OR
   python -m http.server 8000
   ```
3. Open your browser and go to: `http://localhost:8000`

### Method 2: Direct File Open

Simply open `index.html` in your web browser. Note: Some browsers may have restrictions with loading local files via JavaScript.

## How to Play

1. **Main Menu**: Start from the main menu where you can begin an adventure or manage your gear
2. **Choose a Route**: Select from available cycling routes based on difficulty and rewards
3. **Select Your Bicycle**: Make sure you have the right bike equipped for your journey
4. **Manage Equipment**: Equip gear to boost your stats (speed, stamina, comfort, handling)
5. **Start Your Trip**: Watch your progress and stamina as you cycle through the route
6. **Complete & Earn**: Finish trips to earn experience points and coins
7. **Unlock Content**: Use coins to purchase new bicycles and equipment

## Game Systems

### Routes
- **City Loop**: Easy 15km urban ride
- **Riverside Path**: Easy 25km scenic nature route
- **Coastal Road**: Medium 35km seaside journey
- **Mountain Trail**: Hard 30km challenging mountain climb

### Bicycles
- **City Cruiser**: Comfortable starter bike (Free)
- **Road Racer**: Fast paved road specialist (500 coins)
- **Mountain Bike**: Rugged terrain expert (600 coins)
- **Hybrid Explorer**: Versatile all-rounder (750 coins)

### Equipment Slots
- **Helmet**: Safety and aerodynamics
- **Clothing**: Comfort and stamina
- **Shoes**: Speed and handling
- **Accessory**: Various performance bonuses

## Technology Stack

- **HTML5**: Structure
- **CSS3**: Styling with gradients and animations
- **Vanilla JavaScript**: Game logic (no frameworks)
- **JSON**: Data storage for game content

## Project Structure

```
claudtesti/
├── index.html              # Main game file
├── src/
│   ├── game/
│   │   └── game.js        # Core game logic
│   └── ui/
│       ├── ui.js          # UI rendering and interactions
│       └── styles.css     # Game styling
├── assets/
│   └── data/
│       ├── routes.json    # Route definitions
│       ├── bicycles.json  # Bicycle data
│       └── equipment.json # Equipment items
└── CLAUDE.md              # AI assistant guide

```

## Development

See [CLAUDE.md](CLAUDE.md) for detailed development guidelines and AI assistant instructions.

## Future Enhancements

- Save/load game progress (localStorage)
- More routes and events
- Weather system
- Achievements system
- Character customization
- Multiplayer/leaderboards
- Mobile responsiveness improvements
- Graphics and animations

## License

Open source - feel free to use and modify!
