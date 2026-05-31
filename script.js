const destinations = {
  usa: [
    {
      city: "New York",
      airport: "JFK",
      description: "Perfekt für Städte, Sport, Events, Essen und klassische Sehenswürdigkeiten.",
      tags: ["city", "food", "sports", "events", "culture"],
      route: [
        "Tag 1: Ankommen in Manhattan, Times Square und erstes Abendessen",
        "Tag 2: Central Park, Top of the Rock und Midtown",
        "Tag 3: Brooklyn Bridge, Dumbo und Williamsburg",
        "Tag 4: Statue of Liberty, Wall Street und 9/11 Memorial",
        "Tag 5: Sportevent oder Konzert einplanen",
        "Tag 6: Freier Tag für Shopping, Foodspots oder Museen",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Los Angeles",
      airport: "LAX",
      description: "Gut für Roadtrip, Strand, Filmkultur, Sport und Kalifornien-Vibes.",
      tags: ["roadtrip", "beach", "sports", "city", "food"],
      route: [
        "Tag 1: Ankommen in Los Angeles und Venice Beach",
        "Tag 2: Hollywood, Griffith Observatory und Downtown LA",
        "Tag 3: Santa Monica und Malibu",
        "Tag 4: Tagesausflug nach Joshua Tree",
        "Tag 5: Sportevent oder Studio-Tour",
        "Tag 6: Orange County oder Laguna Beach",
        "Tag 7: Rückflug oder Start Richtung San Francisco"
      ]
    },
    {
      city: "Las Vegas",
      airport: "LAS",
      description: "Sehr stark für USA-Roadtrips mit Grand Canyon, Zion, Bryce Canyon und Death Valley.",
      tags: ["roadtrip", "nature", "events", "food"],
      route: [
        "Tag 1: Ankunft in Las Vegas und Strip erkunden",
        "Tag 2: Hoover Dam und Valley of Fire",
        "Tag 3: Zion National Park",
        "Tag 4: Bryce Canyon",
        "Tag 5: Grand Canyon South Rim",
        "Tag 6: Zurück nach Las Vegas, Show oder Event",
        "Tag 7: Rückflug oder Weiterfahrt nach Los Angeles"
      ]
    },
    {
      city: "Miami",
      airport: "MIA",
      description: "Gut für Strand, Essen, Florida-Rundreise und entspannte Tage.",
      tags: ["beach", "food", "city", "nature"],
      route: [
        "Tag 1: Ankommen in Miami Beach",
        "Tag 2: Wynwood, Little Havana und South Beach",
        "Tag 3: Everglades National Park",
        "Tag 4: Key Largo oder Islamorada",
        "Tag 5: Key West Tagesausflug oder Übernachtung",
        "Tag 6: Zurück nach Miami, Strand und gutes Essen",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "San Francisco",
      airport: "SFO",
      description: "Sehr gut für Kalifornien-Roadtrip, Natur, Foodspots und Highway 1.",
      tags: ["roadtrip", "nature", "city", "food"],
      route: [
        "Tag 1: Ankommen in San Francisco und Fisherman's Wharf",
        "Tag 2: Golden Gate Bridge, Alcatraz und Chinatown",
        "Tag 3: Muir Woods oder Sausalito",
        "Tag 4: Start Highway 1 Richtung Monterey",
        "Tag 5: Big Sur und Carmel-by-the-Sea",
        "Tag 6: Weiterfahrt Richtung Santa Barbara",
        "Tag 7: Los Angeles oder Rückflug"
      ]
    },
    {
      city: "Chicago",
      airport: "ORD",
      description: "Gut für Städte, Sport, Architektur, Foodspots und etwas günstigere USA-Citytrips.",
      tags: ["city", "sports", "food", "culture"],
      route: [
        "Tag 1: Ankommen in Chicago und Riverwalk",
        "Tag 2: Architektur-Bootstour und Millennium Park",
        "Tag 3: Museum Campus und Lake Michigan",
        "Tag 4: Sportevent oder Konzert",
        "Tag 5: Foodtour mit Deep Dish Pizza und lokalen Spots",
        "Tag 6: Tagesausflug oder entspannter Stadtteil-Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Orlando",
      airport: "MCO",
      description: "Gut für Freizeitparks, Florida-Rundreise, Strandkombinationen und Roadtrips.",
      tags: ["events", "roadtrip", "beach", "food"],
      route: [
        "Tag 1: Ankommen in Orlando",
        "Tag 2: Freizeitpark oder Disney Springs",
        "Tag 3: Universal oder weiterer Freizeitpark",
        "Tag 4: Fahrt Richtung Tampa oder Clearwater",
        "Tag 5: Strandtag an der Golfküste",
        "Tag 6: Rückfahrt nach Orlando",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Seattle",
      airport: "SEA",
      description: "Sehr gut für Natur, Stadt, Kaffee, Sport und Trips Richtung Nationalparks.",
      tags: ["nature", "city", "sports", "food"],
      route: [
        "Tag 1: Ankommen in Seattle und Pike Place Market",
        "Tag 2: Space Needle, Waterfront und Stadtviertel",
        "Tag 3: Tagesausflug Mount Rainier",
        "Tag 4: Fähre nach Bainbridge Island",
        "Tag 5: Sportevent oder Foodspots",
        "Tag 6: Naturausflug oder entspannter Stadt-Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Boston",
      airport: "BOS",
      description: "Gut für Geschichte, Stadt, Sport, Foodspots und Kombination mit New York.",
      tags: ["city", "culture", "sports", "food"],
      route: [
        "Tag 1: Ankommen in Boston und Waterfront",
        "Tag 2: Freedom Trail und Beacon Hill",
        "Tag 3: Harvard, Cambridge und Foodspots",
        "Tag 4: Sportevent oder Museumstag",
        "Tag 5: Tagesausflug Salem oder Cape Cod",
        "Tag 6: Entspannter Stadtteil-Tag",
        "Tag 7: Rückflug oder Weiterreise nach New York"
      ]
    }
  ],

  europe: [
    {
      city: "Porto",
      airport: "OPO",
      description: "Sehr gut für Essen, Stadt, Roadtrip und entspannte Portugal-Routen.",
      tags: ["food", "city", "roadtrip", "culture"],
      route: [
        "Tag 1: Ankommen in Porto und Ribeira erkunden",
        "Tag 2: Porto Altstadt, Dom Luís I Brücke und Portwein",
        "Tag 3: Douro Valley Tagesausflug",
        "Tag 4: Coimbra als Zwischenstopp",
        "Tag 5: Lissabon",
        "Tag 6: Sintra",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Barcelona",
      airport: "BCN",
      description: "Starker Mix aus Stadt, Strand, Essen, Kultur und Nachtleben.",
      tags: ["city", "beach", "food", "culture", "events"],
      route: [
        "Tag 1: Ankommen und Gothic Quarter",
        "Tag 2: Sagrada Familia und Park Güell",
        "Tag 3: Barceloneta und Foodspots",
        "Tag 4: Montserrat Tagesausflug",
        "Tag 5: Camp Nou Umgebung oder Event",
        "Tag 6: Freier Tag für Strand oder Shopping",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Edinburgh",
      airport: "EDI",
      description: "Gut für Natur, Stadt, Pubkultur und kleinere Roadtrips in Schottland.",
      tags: ["nature", "city", "culture", "roadtrip"],
      route: [
        "Tag 1: Ankommen in Edinburgh und Altstadt",
        "Tag 2: Edinburgh Castle und Arthur's Seat",
        "Tag 3: Tagesausflug Highlands",
        "Tag 4: Stirling Castle",
        "Tag 5: Küstenroute oder Whisky-Tour",
        "Tag 6: Edinburgh Foodspots und Pubs",
        "Tag 7: Rückflug"
      ]
    }
  ],

  asia: [
    {
      city: "Tokyo",
      airport: "HND",
      description: "Perfekt für Essen, Stadt, Kultur, Events und komplett andere Eindrücke.",
      tags: ["city", "food", "culture", "events"],
      route: [
        "Tag 1: Ankommen in Tokyo und Shibuya",
        "Tag 2: Asakusa, Ueno und Akihabara",
        "Tag 3: Shinjuku und Golden Gai",
        "Tag 4: Tagesausflug nach Kamakura",
        "Tag 5: Harajuku, Meiji-Schrein und Omotesando",
        "Tag 6: Foodtour oder Event",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Bangkok",
      airport: "BKK",
      description: "Sehr gut für Essen, Kultur, Nachtleben und günstige Weiterreisen.",
      tags: ["food", "city", "culture", "events"],
      route: [
        "Tag 1: Ankommen in Bangkok",
        "Tag 2: Grand Palace, Wat Pho und Flussfahrt",
        "Tag 3: Streetfood und Märkte",
        "Tag 4: Ayutthaya Tagesausflug",
        "Tag 5: Rooftop Bar und Nachtmarkt",
        "Tag 6: Freier Tag oder Weiterreise Richtung Inseln",
        "Tag 7: Rückflug oder Weiterflug"
      ]
    }
  ]
};

const airportNames = {
  NUE: "Nürnberg",
  MUC: "München",
  FRA: "Frankfurt",
  STR: "Stuttgart",
  DUS: "Düsseldorf",
  BER: "Berlin"
};

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const results = document.getElementById("results");
const summaryBox = document.getElementById("summaryBox");
const destinationResults = document.getElementById("destinationResults");
const citySelectionCard = document.getElementById("citySelectionCard");
const cityOptions = document.getElementById("cityOptions");

generateBtn.addEventListener("click", generateTrip);
resetBtn.addEventListener("click", resetPlanner);

document.querySelectorAll('input[name="region"]').forEach(regionInput => {
  regionInput.addEventListener("change", () => {
    renderCityOptions(regionInput.value);
  });
});

document.querySelectorAll(".date-input").forEach(input => {
  input.addEventListener("click", () => {
    if (typeof input.showPicker === "function") {
      input.showPicker();
    }
  });
});

function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter(input => input.checked)
    .map(input => input.value);
}

function getSelectedRegion() {
  const selected = document.querySelector('input[name="region"]:checked');
  return selected ? selected.value : null;
}

function renderCityOptions(region) {
  const regionDestinations = destinations[region];

  cityOptions.innerHTML = "";

  if (!regionDestinations || regionDestinations.length === 0) {
    citySelectionCard.classList.add("hidden");
    return;
  }

  regionDestinations.forEach(destination => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${destination.airport}" checked>
      ${destination.city} (${destination.airport})
    `;

    cityOptions.appendChild(label);
  });

  citySelectionCard.classList.remove("hidden");
}

function generateTrip() {
  const departures = getCheckedValues("#departureOptions input");
  const interests = getCheckedValues("#interestOptions input");
  const region = getSelectedRegion();
  const selectedCities = getCheckedValues("#cityOptions input");
  const dateFrom = document.getElementById("dateFrom").value;
  const dateTo = document.getElementById("dateTo").value;
  const duration = document.getElementById("duration").value;

  if (departures.length === 0) {
    alert("Bitte wähle mindestens einen Abflughafen aus.");
    return;
  }

  if (!dateFrom || !dateTo) {
    alert("Bitte gib einen Reisezeitraum an.");
    return;
  }

  if (!region) {
    alert("Bitte wähle eine Zielregion aus.");
    return;
  }

  if (selectedCities.length === 0) {
    alert("Bitte wähle mindestens einen Zielflughafen aus.");
    return;
  }

  const regionDestinations = destinations[region];

  const filteredDestinations = regionDestinations.filter(destination =>
    selectedCities.includes(destination.airport)
  );

  const scoredDestinations = filteredDestinations
    .map(destination => {
      const score = destination.tags.filter(tag => interests.includes(tag)).length;

      return {
        ...destination,
        score
      };
    })
    .sort((a, b) => b.score - a.score);

  renderSummary(departures, region, dateFrom, dateTo, duration, interests, selectedCities);
  renderDestinations(scoredDestinations, departures, dateFrom, dateTo);

  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth" });
}

function renderSummary(departures, region, dateFrom, dateTo, duration, interests, selectedCities) {
  const departureText = departures.map(code => airportNames[code]).join(", ");
  const interestText = interests.length > 0
    ? interests.map(translateTag).join(", ")
    : "keine speziellen Interessen gewählt";

  const cityText = selectedCities.join(", ");

  summaryBox.innerHTML = `
    <strong>Deine Suche:</strong><br>
    Abflughäfen: ${departureText}<br>
    Zielregion: ${getRegionName(region)}<br>
    Gewählte Zielflughäfen: ${cityText}<br>
    Zeitraum: ${formatDate(dateFrom)} bis ${formatDate(dateTo)}<br>
    Reisedauer: ${getDurationLabel(duration)}<br>
    Interessen: ${interestText}<br><br>
    Hinweis: TripPilot V1 zeigt keine Live-Flugpreise. Stattdessen werden vorbereitete Flugsuchen erstellt, die du direkt öffnen kannst.
  `;
}

function renderDestinations(destinationList, departures, dateFrom, dateTo) {
  destinationResults.innerHTML = "";

  destinationList.forEach(destination => {
    const card = document.createElement("article");
    card.className = "destination-card";

    const tags = destination.tags
      .map(tag => `<span class="tag">${translateTag(tag)}</span>`)
      .join("");

    const links = departures
      .map(departure => createFlightLinks(departure, destination.airport, dateFrom, dateTo))
      .join("");

    const routeItems = createRouteByDuration(destination, Number(document.getElementById("duration").value))
      .map(item => `<li>${item}</li>`)
      .join("");

    card.innerHTML = `
      <h3>${destination.city}</h3>
      <div class="airport">${destination.airport}</div>
      <p>${destination.description}</p>

      <div class="tag-list">
        ${tags}
      </div>

      <div class="link-list">
        ${links}
      </div>

      <div class="route-box">
        <h4>Beispielroute</h4>
        <ol>
          ${routeItems}
        </ol>
      </div>
    `;

    destinationResults.appendChild(card);
  });
}

function createFlightLinks(from, to, dateFrom, dateTo) {
  const searchText = `Flug ${from} nach ${to} ${dateFrom} bis ${dateTo}`;
  const encodedSearch = encodeURIComponent(searchText);

  const googleFlightsUrl = `https://www.google.com/travel/flights?q=${encodedSearch}`;
  const skyscannerUrl = `https://www.skyscanner.de/transport/flights/${from.toLowerCase()}/${to.toLowerCase()}/`;
  const momondoUrl = `https://www.momondo.de/flight-search/${from}-${to}/${dateFrom}/${dateTo}`;

  return `
    <a class="flight-link" href="${googleFlightsUrl}" target="_blank" rel="noopener">
      ${from} → ${to} Google
    </a>

    <a class="flight-link" href="${skyscannerUrl}" target="_blank" rel="noopener">
      ${from} → ${to} Skyscanner
    </a>

    <a class="flight-link" href="${momondoUrl}" target="_blank" rel="noopener">
      ${from} → ${to} Momondo
    </a>
  `;
}

function getRegionName(region) {
  const names = {
    usa: "USA",
    europe: "Europa",
    asia: "Asien"
  };

  return names[region] || region;
}

function translateTag(tag) {
  const translations = {
    nature: "Natur",
    city: "Stadt",
    food: "Essen",
    sports: "Sport",
    events: "Events",
    roadtrip: "Roadtrip",
    beach: "Strand",
    culture: "Kultur"
  };

  return translations[tag] || tag;
}

function getDurationLabel(duration) {
  const labels = {
    "5": "4–5 Tage",
    "7": "7 Tage",
    "12": "10–14 Tage",
    "16": "14+ Tage"
  };

  return labels[duration] || `${duration} Tage`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE");
}

function createRouteByDuration(destination, duration) {
  const baseRoute = destination.route;

  if (duration <= 7) {
    return baseRoute.slice(0, duration);
  }

  const extraDays = {
    "New York": [
      "Tag 8: Tagesausflug nach Philadelphia oder Washington D.C.",
      "Tag 9: Foodtour durch Queens oder Brooklyn",
      "Tag 10: Museumstag mit MET oder American Museum of Natural History",
      "Tag 11: Sportevent, Broadway oder Konzert",
      "Tag 12: Jersey City, Hoboken und Skyline-Spots",
      "Tag 13: Freier Tag für Shopping oder Lieblingsviertel",
      "Tag 14: Entspannter letzter Tag und Rückflugvorbereitung",
      "Tag 15: Optionaler Zusatztag für Boston oder Washington D.C.",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Los Angeles": [
      "Tag 8: Start Roadtrip Richtung Santa Barbara",
      "Tag 9: Santa Barbara und Pismo Beach",
      "Tag 10: Highway 1 Richtung Monterey",
      "Tag 11: Big Sur und Carmel-by-the-Sea",
      "Tag 12: San Francisco Ankunft",
      "Tag 13: San Francisco erkunden",
      "Tag 14: Tagesausflug Muir Woods oder Sausalito",
      "Tag 15: Freier Tag für Sportevent oder Foodspots",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Las Vegas": [
      "Tag 8: Death Valley National Park",
      "Tag 9: Fahrt Richtung Mammoth Lakes oder Lone Pine",
      "Tag 10: Yosemite National Park",
      "Tag 11: Weiterfahrt Richtung San Francisco",
      "Tag 12: San Francisco erkunden",
      "Tag 13: Highway 1 Richtung Monterey",
      "Tag 14: Santa Barbara oder Malibu",
      "Tag 15: Los Angeles Abschluss",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Miami": [
      "Tag 8: Fort Lauderdale oder Palm Beach",
      "Tag 9: Fahrt Richtung Orlando",
      "Tag 10: Freizeitpark oder Orlando erkunden",
      "Tag 11: Tampa oder Clearwater Beach",
      "Tag 12: Sarasota oder Naples",
      "Tag 13: Zurück Richtung Miami",
      "Tag 14: Entspannter Strandtag",
      "Tag 15: Letzte Foodspots und Shopping",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "San Francisco": [
      "Tag 8: Yosemite National Park",
      "Tag 9: Yosemite oder Weiterfahrt Richtung Lake Tahoe",
      "Tag 10: Lake Tahoe",
      "Tag 11: Napa Valley oder Sacramento",
      "Tag 12: Zurück nach San Francisco",
      "Tag 13: Mission District, Haight-Ashbury und Foodspots",
      "Tag 14: Sportevent oder Tagesausflug",
      "Tag 15: Letzter Tag am Wasser",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Chicago": [
      "Tag 8: Tagesausflug nach Milwaukee",
      "Tag 9: Weitere Architektur- und Foodspots",
      "Tag 10: Sportevent oder Konzert",
      "Tag 11: Museumstag",
      "Tag 12: Stadtviertel erkunden",
      "Tag 13: Lake Michigan und entspannter Tag",
      "Tag 14: Optionaler Zugtrip oder Outlet-Shopping",
      "Tag 15: Letzter voller Tag in Chicago",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Orlando": [
      "Tag 8: Weiterfahrt nach Miami",
      "Tag 9: Miami Beach und Wynwood",
      "Tag 10: Everglades National Park",
      "Tag 11: Key Largo",
      "Tag 12: Key West",
      "Tag 13: Zurück Richtung Miami",
      "Tag 14: Strandtag",
      "Tag 15: Letzter Food- und Shoppingtag",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Seattle": [
      "Tag 8: Olympic National Park",
      "Tag 9: Olympic Peninsula Roadtrip",
      "Tag 10: Portland Anreise",
      "Tag 11: Portland Foodspots und Stadt",
      "Tag 12: Columbia River Gorge",
      "Tag 13: Rückfahrt Richtung Seattle",
      "Tag 14: Mount Rainier oder entspannter Stadt-Tag",
      "Tag 15: Sportevent oder letzter Ausflug",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Boston": [
      "Tag 8: Fahrt oder Zug nach New York",
      "Tag 9: New York Midtown und Central Park",
      "Tag 10: Brooklyn und Williamsburg",
      "Tag 11: Sportevent oder Broadway",
      "Tag 12: Rückfahrt nach Boston oder Weiterreise",
      "Tag 13: Cape Cod oder Salem",
      "Tag 14: Entspannter Boston-Tag",
      "Tag 15: Letzter Stadt- und Foodtag",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Porto": [
      "Tag 8: Nazaré oder Óbidos",
      "Tag 9: Algarve Anreise",
      "Tag 10: Lagos und Ponta da Piedade",
      "Tag 11: Sagres und Westküste",
      "Tag 12: Entspannter Strandtag",
      "Tag 13: Rückfahrt Richtung Lissabon",
      "Tag 14: Letzter Tag in Lissabon",
      "Tag 15: Freier Puffertag",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Barcelona": [
      "Tag 8: Girona Tagesausflug",
      "Tag 9: Costa Brava",
      "Tag 10: Tarragona",
      "Tag 11: Valencia Anreise",
      "Tag 12: Valencia Altstadt und Strand",
      "Tag 13: Foodspots und Stadtviertel",
      "Tag 14: Rückfahrt oder Weiterreise",
      "Tag 15: Freier Puffertag",
      "Tag 16: Rückflug"
    ],

    "Edinburgh": [
      "Tag 8: Fahrt Richtung Isle of Skye",
      "Tag 9: Isle of Skye erkunden",
      "Tag 10: Highlands Roadtrip",
      "Tag 11: Inverness oder Loch Ness",
      "Tag 12: Cairngorms National Park",
      "Tag 13: Rückfahrt Richtung Edinburgh",
      "Tag 14: Freier Tag in Edinburgh",
      "Tag 15: Pub, Foodspots oder letzter Ausflug",
      "Tag 16: Rückflug"
    ],

    "Tokyo": [
      "Tag 8: Nikko Tagesausflug",
      "Tag 9: Hakone oder Fuji-Region",
      "Tag 10: Kyoto Anreise",
      "Tag 11: Kyoto Tempel und Gion",
      "Tag 12: Arashiyama und Fushimi Inari",
      "Tag 13: Osaka Tagesausflug",
      "Tag 14: Nara Tagesausflug",
      "Tag 15: Zurück nach Tokyo",
      "Tag 16: Rückflug oder Weiterreise"
    ],

    "Bangkok": [
      "Tag 8: Weiterreise nach Chiang Mai",
      "Tag 9: Chiang Mai Altstadt und Tempel",
      "Tag 10: Naturausflug oder Kochkurs",
      "Tag 11: Weiterreise Richtung Inseln",
      "Tag 12: Strandtag",
      "Tag 13: Bootsausflug",
      "Tag 14: Entspannter letzter Inseltag",
      "Tag 15: Rückreise nach Bangkok",
      "Tag 16: Rückflug"
    ]
  };

  const additions = extraDays[destination.city] || [
    "Tag 8: Zusätzlicher entspannter Erkundungstag",
    "Tag 9: Tagesausflug in die Umgebung",
    "Tag 10: Freier Tag für spontane Aktivitäten",
    "Tag 11: Weitere Sehenswürdigkeiten passend zu deinen Interessen",
    "Tag 12: Entspannter Reisetag",
    "Tag 13: Lokale Foodspots und Stadtviertel",
    "Tag 14: Puffertag",
    "Tag 15: Letzter voller Reisetag",
    "Tag 16: Rückflug oder Weiterreise"
  ];

  return [...baseRoute, ...additions].slice(0, duration);
}

function resetPlanner() {
  document.querySelectorAll("input").forEach(input => {
    input.checked = false;
  });

  document.getElementById("dateFrom").value = "";
  document.getElementById("dateTo").value = "";
  document.getElementById("duration").value = "5";

  cityOptions.innerHTML = "";
  citySelectionCard.classList.add("hidden");

  results.classList.add("hidden");
  destinationResults.innerHTML = "";
  summaryBox.innerHTML = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}