// Cycling Adventure Game - Main Game Logic

class CyclingGame {
  constructor() {
    this.gameState = 'menu'; // menu, route-select, bike-select, equipment-select, trip, results
    this.player = {
      name: 'Cyclist',
      level: 1,
      experience: 0,
      coins: 100,
      stamina: 100,
      maxStamina: 100
    };
    this.selectedRoute = null;
    this.selectedBicycle = null;
    this.equippedItems = {
      helmet: null,
      clothing: null,
      shoes: null,
      accessory: null
    };
    this.routes = [];
    this.bicycles = [];
    this.equipment = [];
    this.tripProgress = 0;
    this.tripEvents = [];
  }

  async initialize() {
    // Load game data
    await this.loadGameData();

    // Set default equipment
    this.equippedItems.helmet = this.equipment.find(e => e.id === 'basic_helmet');
    this.equippedItems.clothing = this.equipment.find(e => e.id === 'casual_outfit');
    this.equippedItems.shoes = this.equipment.find(e => e.id === 'regular_shoes');
    this.equippedItems.accessory = this.equipment.find(e => e.id === 'water_bottle');

    // Set default bicycle
    this.selectedBicycle = this.bicycles.find(b => b.id === 'city_cruiser');

    console.log('Game initialized successfully');
  }

  async loadGameData() {
    try {
      const [routesRes, bicyclesRes, equipmentRes] = await Promise.all([
        fetch('assets/data/routes.json'),
        fetch('assets/data/bicycles.json'),
        fetch('assets/data/equipment.json')
      ]);

      this.routes = await routesRes.json();
      this.bicycles = await bicyclesRes.json();
      this.equipment = await equipmentRes.json();
    } catch (error) {
      console.error('Error loading game data:', error);
    }
  }

  changeGameState(newState) {
    this.gameState = newState;
    this.render();
  }

  selectRoute(routeId) {
    this.selectedRoute = this.routes.find(r => r.id === routeId);
    console.log('Selected route:', this.selectedRoute.name);
  }

  selectBicycle(bicycleId) {
    const bicycle = this.bicycles.find(b => b.id === bicycleId);
    if (bicycle.unlocked) {
      this.selectedBicycle = bicycle;
      console.log('Selected bicycle:', this.selectedBicycle.name);
    }
  }

  equipItem(itemId) {
    const item = this.equipment.find(e => e.id === itemId);
    if (item && item.unlocked) {
      this.equippedItems[item.slot] = item;
      console.log('Equipped:', item.name);
    }
  }

  purchaseItem(itemId, type) {
    let item;
    if (type === 'bicycle') {
      item = this.bicycles.find(b => b.id === itemId);
    } else if (type === 'equipment') {
      item = this.equipment.find(e => e.id === itemId);
    }

    if (item && !item.unlocked && this.player.coins >= item.price) {
      this.player.coins -= item.price;
      item.unlocked = true;
      console.log('Purchased:', item.name);
      return true;
    }
    return false;
  }

  calculateTripStats() {
    const baseStats = {
      speed: this.selectedBicycle.stats.speed,
      handling: this.selectedBicycle.stats.handling,
      comfort: this.selectedBicycle.stats.comfort,
      stamina: this.player.maxStamina
    };

    // Apply equipment bonuses
    Object.values(this.equippedItems).forEach(item => {
      if (item && item.effects) {
        Object.keys(item.effects).forEach(stat => {
          if (baseStats[stat] !== undefined) {
            baseStats[stat] += item.effects[stat];
          }
        });
      }
    });

    return baseStats;
  }

  startTrip() {
    if (!this.selectedRoute || !this.selectedBicycle) {
      console.error('Route and bicycle must be selected');
      return;
    }

    this.tripProgress = 0;
    this.tripEvents = this.generateTripEvents();
    this.player.stamina = this.player.maxStamina;
    this.changeGameState('trip');
    this.simulateTrip();
  }

  generateTripEvents() {
    const events = [];
    const numEvents = Math.floor(Math.random() * 3) + 2; // 2-4 events

    const possibleEvents = [
      { type: 'scenic', text: 'You pass by a beautiful scenic overlook. The view is breathtaking!', staminaCost: -5 },
      { type: 'challenge', text: 'A steep hill ahead! Time to push yourself.', staminaCost: 15 },
      { type: 'rest', text: 'You find a perfect spot to rest and enjoy the surroundings.', staminaCost: -10 },
      { type: 'weather', text: 'A gentle breeze helps you along the way.', staminaCost: -5 },
      { type: 'obstacle', text: 'Some rough terrain slows you down.', staminaCost: 10 }
    ];

    for (let i = 0; i < numEvents; i++) {
      const randomEvent = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
      events.push({
        ...randomEvent,
        progress: Math.floor((100 / (numEvents + 1)) * (i + 1))
      });
    }

    return events.sort((a, b) => a.progress - b.progress);
  }

  simulateTrip() {
    const tripStats = this.calculateTripStats();
    const interval = setInterval(() => {
      this.tripProgress += 2;

      // Check for events
      const currentEvent = this.tripEvents.find(e =>
        e.progress <= this.tripProgress && !e.triggered
      );

      if (currentEvent) {
        currentEvent.triggered = true;
        this.handleTripEvent(currentEvent);
      }

      // Consume stamina based on route difficulty
      const difficultyMultiplier = {
        'easy': 0.3,
        'medium': 0.5,
        'hard': 0.8
      };
      const staminaCost = difficultyMultiplier[this.selectedRoute.difficulty] || 0.5;
      this.player.stamina -= staminaCost * (100 / tripStats.stamina);

      if (this.tripProgress >= 100) {
        clearInterval(interval);
        this.completeTrip();
      }

      this.render();
    }, 100);
  }

  handleTripEvent(event) {
    console.log('Event:', event.text);
    this.player.stamina = Math.max(0, Math.min(this.player.maxStamina,
      this.player.stamina - event.staminaCost));
  }

  completeTrip() {
    const rewards = this.selectedRoute.rewards;
    this.player.experience += rewards.experience;
    this.player.coins += rewards.coins;

    // Check for level up
    const expNeeded = this.player.level * 100;
    if (this.player.experience >= expNeeded) {
      this.player.level++;
      this.player.maxStamina += 10;
      console.log('Level up! Now level', this.player.level);
    }

    this.player.stamina = this.player.maxStamina;
    this.changeGameState('results');
  }

  render() {
    // This will be called by the UI layer
    if (window.updateUI) {
      window.updateUI(this);
    }
  }
}

// Initialize game when document is ready
let game;
document.addEventListener('DOMContentLoaded', async () => {
  game = new CyclingGame();
  await game.initialize();
  game.render();
});
