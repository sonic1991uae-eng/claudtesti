// UI Controller for Cycling Adventure Game

// Visual icon mappings
const ROUTE_ICONS = {
  'city_loop': '🏙️',
  'riverside_path': '🌊',
  'mountain_trail': '⛰️',
  'coastal_road': '🏖️'
};

const SCENERY_ICONS = {
  'urban': '🏙️',
  'nature': '🌳',
  'mountain': '⛰️',
  'coastal': '🌊'
};

const BICYCLE_ICONS = {
  'city': '🚲',
  'road': '🚴',
  'mountain': '🚵',
  'hybrid': '🚴‍♀️'
};

const EQUIPMENT_ICONS = {
  'helmet': '⛑️',
  'clothing': '👕',
  'shoes': '👟',
  'accessory': '🎒'
};

window.updateUI = function(game) {
  updatePlayerStats(game);
  updateScreens(game);
  updateContent(game);
};

function updatePlayerStats(game) {
  document.getElementById('player-level').textContent = game.player.level;
  document.getElementById('player-exp').textContent = game.player.experience;
  document.getElementById('player-coins').textContent = game.player.coins;
}

function updateScreens(game) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show current screen
  const currentScreen = document.getElementById(`screen-${game.gameState}`);
  if (currentScreen) {
    currentScreen.classList.add('active');
  }
}

function updateContent(game) {
  switch(game.gameState) {
    case 'route-select':
      renderRoutes(game);
      break;
    case 'bike-select':
      renderBicycles(game);
      break;
    case 'equipment-select':
      renderEquipment(game);
      break;
    case 'trip':
      renderTrip(game);
      break;
    case 'results':
      renderResults(game);
      break;
  }
}

function renderRoutes(game) {
  const container = document.getElementById('routes-list');
  container.innerHTML = '';

  game.routes.forEach(route => {
    const card = document.createElement('div');
    card.className = 'card route-card';
    const routeIcon = ROUTE_ICONS[route.id] || '🗺️';
    const sceneryIcon = SCENERY_ICONS[route.scenery] || '🌄';

    card.innerHTML = `
      <div class="card-icon">${routeIcon}</div>
      <h3>${route.name}</h3>
      <p class="description">${route.description}</p>
      <div class="card-stats">
        <div class="stat-item">
          <span>📏 Distance:</span>
          <strong>${route.distance} km</strong>
        </div>
        <div class="stat-item">
          <span>⚡ Difficulty:</span>
          <strong class="difficulty-${route.difficulty}">${route.difficulty.toUpperCase()}</strong>
        </div>
        <div class="stat-item">
          <span>🛣️ Terrain:</span>
          <strong>${route.terrain}</strong>
        </div>
        <div class="stat-item">
          <span>⏱️ Duration:</span>
          <strong>${route.duration} min</strong>
        </div>
        <div class="stat-item">
          <span>${sceneryIcon} Scenery:</span>
          <strong>${route.scenery}</strong>
        </div>
      </div>
      <div class="card-rewards">
        <span>🎁 Rewards: ${route.rewards.experience} XP, ${route.rewards.coins} Coins</span>
      </div>
      <button class="btn btn-primary" onclick="selectAndStartRoute('${route.id}')">
        Select Route
      </button>
    `;
    container.appendChild(card);
  });
}

function renderBicycles(game) {
  const container = document.getElementById('bicycles-list');
  const currentBikeEl = document.getElementById('current-bike');

  if (game.selectedBicycle) {
    currentBikeEl.textContent = game.selectedBicycle.name;
  }

  container.innerHTML = '';

  game.bicycles.forEach(bicycle => {
    const card = document.createElement('div');
    card.className = `card bicycle-card ${!bicycle.unlocked ? 'locked' : ''} ${bicycle.id === game.selectedBicycle?.id ? 'selected' : ''}`;
    const bikeIcon = BICYCLE_ICONS[bicycle.type] || '🚲';

    const statsHTML = Object.entries(bicycle.stats)
      .map(([key, value]) => `
        <div class="stat-row">
          <span>${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
          <div class="stat-bar-mini">
            <div class="stat-bar-fill" style="width: ${value}%"></div>
          </div>
          <span>${value}</span>
        </div>
      `).join('');

    card.innerHTML = `
      <div class="card-icon bicycle-icon">${bikeIcon}</div>
      <h3>${bicycle.name}</h3>
      <p class="description">${bicycle.description}</p>
      <div class="bike-stats">
        ${statsHTML}
      </div>
      ${!bicycle.unlocked ? `<p class="price">🪙 Price: ${bicycle.price} Coins</p>` : ''}
      ${bicycle.unlocked ?
        `<button class="btn btn-primary" onclick="selectBicycle('${bicycle.id}')">Select</button>` :
        `<button class="btn btn-secondary" onclick="purchaseBicycle('${bicycle.id}')">💰 Purchase</button>`
      }
    `;
    container.appendChild(card);
  });
}

function renderEquipment(game) {
  // Update equipped items display
  Object.entries(game.equippedItems).forEach(([slot, item]) => {
    const el = document.getElementById(`equipped-${slot}`);
    if (el && item) {
      el.textContent = item.name;
    }
  });

  const container = document.getElementById('equipment-list');
  container.innerHTML = '';

  // Group equipment by slot
  const groupedEquipment = {};
  game.equipment.forEach(item => {
    if (!groupedEquipment[item.slot]) {
      groupedEquipment[item.slot] = [];
    }
    groupedEquipment[item.slot].push(item);
  });

  Object.entries(groupedEquipment).forEach(([slot, items]) => {
    const section = document.createElement('div');
    section.className = 'equipment-section';
    const slotIcon = EQUIPMENT_ICONS[slot] || '📦';
    section.innerHTML = `<h3>${slotIcon} ${slot.charAt(0).toUpperCase() + slot.slice(1)}</h3>`;

    items.forEach(item => {
      const isEquipped = game.equippedItems[slot]?.id === item.id;
      const card = document.createElement('div');
      card.className = `card equipment-card ${!item.unlocked ? 'locked' : ''} ${isEquipped ? 'equipped' : ''}`;

      const effectsHTML = Object.entries(item.effects || {})
        .map(([key, value]) => `<span class="effect">✨ +${value} ${key}</span>`)
        .join('');

      card.innerHTML = `
        <h4>${item.name}</h4>
        <p class="description">${item.description}</p>
        <div class="effects">${effectsHTML}</div>
        ${!item.unlocked ? `<p class="price">🪙 Price: ${item.price} Coins</p>` : ''}
        ${isEquipped ? '<span class="equipped-badge">✓ Equipped</span>' : ''}
        ${item.unlocked && !isEquipped ?
          `<button class="btn btn-primary btn-small" onclick="equipItem('${item.id}')">Equip</button>` :
          !item.unlocked ?
          `<button class="btn btn-secondary btn-small" onclick="purchaseEquipment('${item.id}')">💰 Purchase</button>` : ''
        }
      `;
      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

function renderTrip(game) {
  const routeNameEl = document.getElementById('trip-route-name');
  const progressFillEl = document.getElementById('progress-fill');
  const progressTextEl = document.getElementById('progress-text');
  const staminaFillEl = document.getElementById('stamina-fill');
  const staminaTextEl = document.getElementById('stamina-text');
  const tripDescEl = document.getElementById('trip-description');
  const eventsEl = document.getElementById('trip-events');
  const sceneryBg = document.getElementById('scenery-background');

  if (game.selectedRoute) {
    routeNameEl.textContent = game.selectedRoute.name;
    tripDescEl.textContent = game.selectedRoute.description;

    // Set scenery background based on route scenery
    if (sceneryBg) {
      sceneryBg.className = `scenery-background scenery-${game.selectedRoute.scenery}`;
    }
  }

  const progress = Math.min(100, Math.max(0, game.tripProgress));
  progressFillEl.style.width = `${progress}%`;
  progressTextEl.textContent = `${Math.floor(progress)}%`;

  const staminaPercent = (game.player.stamina / game.player.maxStamina) * 100;
  staminaFillEl.style.width = `${staminaPercent}%`;
  staminaTextEl.textContent = `${Math.floor(staminaPercent)}%`;

  // Show triggered events with icons
  const eventIcons = {
    'scenic': '🌄',
    'challenge': '⛰️',
    'rest': '☕',
    'weather': '🌤️',
    'obstacle': '⚠️'
  };

  const triggeredEvents = game.tripEvents.filter(e => e.triggered);
  if (triggeredEvents.length > 0) {
    const latestEvent = triggeredEvents[triggeredEvents.length - 1];
    const icon = eventIcons[latestEvent.type] || '📍';
    eventsEl.innerHTML = `<div class="event-message ${latestEvent.type}">${icon} ${latestEvent.text}</div>`;
  }
}

function renderResults(game) {
  if (game.selectedRoute) {
    document.getElementById('reward-exp').textContent = `${game.selectedRoute.rewards.experience} XP`;
    document.getElementById('reward-coins').textContent = game.selectedRoute.rewards.coins;
  }
}

// Helper functions for button actions
function selectAndStartRoute(routeId) {
  game.selectRoute(routeId);
  game.changeGameState('bike-select');

  // Show a message
  setTimeout(() => {
    if (confirm(`Start trip on ${game.selectedRoute.name}?`)) {
      game.startTrip();
    }
  }, 500);
}

function selectBicycle(bicycleId) {
  game.selectBicycle(bicycleId);
  game.render();
}

function purchaseBicycle(bicycleId) {
  if (game.purchaseItem(bicycleId, 'bicycle')) {
    alert('Bicycle purchased!');
    game.render();
  } else {
    alert('Not enough coins!');
  }
}

function equipItem(itemId) {
  game.equipItem(itemId);
  game.render();
}

function purchaseEquipment(itemId) {
  if (game.purchaseItem(itemId, 'equipment')) {
    alert('Equipment purchased!');
    game.render();
  } else {
    alert('Not enough coins!');
  }
}
