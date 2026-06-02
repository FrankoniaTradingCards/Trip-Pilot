const subregions = {
  usa: [
    { id: "usa-west", name: "Westküste" },
    { id: "usa-east", name: "Ostküste" },
    { id: "usa-florida", name: "Florida" },
    { id: "usa-nationalparks", name: "Nationalparks & Roadtrips" },
    { id: "usa-south", name: "Südstaaten" },
    { id: "usa-midwest", name: "Midwest" }
  ],

  europe: [
    { id: "europe-south", name: "Südeuropa" },
    { id: "europe-west", name: "Westeuropa" },
    { id: "europe-north", name: "Nordeuropa" },
    { id: "europe-east", name: "Osteuropa" },
    { id: "europe-roadtrip", name: "Roadtrip-Ziele" }
  ],

  asia: [
    { id: "asia-japan", name: "Japan" },
    { id: "asia-southeast", name: "Südostasien" },
    { id: "asia-city", name: "Großstadt & Kultur" }
  ]
};

const destinations = {
  usa: [
    {
      city: "New York",
      airport: "JFK",
      subregions: ["usa-east"],
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
      city: "Boston",
      airport: "BOS",
      subregions: ["usa-east"],
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
    },
    {
      city: "Washington D.C.",
      airport: "IAD",
      subregions: ["usa-east"],
      description: "Sehr gut für Geschichte, Museen, Politik, Kultur und Kombination mit New York.",
      tags: ["city", "culture", "food"],
      route: [
        "Tag 1: Ankommen in Washington D.C.",
        "Tag 2: National Mall, Lincoln Memorial und Washington Monument",
        "Tag 3: Smithsonian Museen",
        "Tag 4: Georgetown und Foodspots",
        "Tag 5: Arlington oder Alexandria",
        "Tag 6: Weiterreise nach Philadelphia oder New York",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Philadelphia",
      airport: "PHL",
      subregions: ["usa-east"],
      description: "Gutes Ziel für Geschichte, Foodspots, Sport und als Zwischenstopp an der Ostküste.",
      tags: ["city", "culture", "food", "sports"],
      route: [
        "Tag 1: Ankommen in Philadelphia",
        "Tag 2: Liberty Bell, Independence Hall und Old City",
        "Tag 3: Reading Terminal Market und Museum District",
        "Tag 4: Sportevent oder Foodtour",
        "Tag 5: Tagesausflug Richtung Washington oder New York",
        "Tag 6: Entspannter Stadtteil-Tag",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Los Angeles",
      airport: "LAX",
      subregions: ["usa-west", "usa-roadtrip"],
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
      city: "San Francisco",
      airport: "SFO",
      subregions: ["usa-west", "usa-nationalparks"],
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
      city: "Las Vegas",
      airport: "LAS",
      subregions: ["usa-west", "usa-nationalparks"],
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
      city: "Seattle",
      airport: "SEA",
      subregions: ["usa-west", "usa-nationalparks"],
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
      city: "San Diego",
      airport: "SAN",
      subregions: ["usa-west"],
      description: "Entspannter Mix aus Strand, Stadt, Foodspots und Südkalifornien.",
      tags: ["beach", "city", "food", "roadtrip"],
      route: [
        "Tag 1: Ankommen in San Diego und Gaslamp Quarter",
        "Tag 2: La Jolla und Pacific Beach",
        "Tag 3: Balboa Park und Old Town",
        "Tag 4: Coronado Island",
        "Tag 5: Tagesausflug Richtung Temecula oder Joshua Tree",
        "Tag 6: Strand- und Foodtag",
        "Tag 7: Rückflug oder Weiterfahrt nach Los Angeles"
      ]
    },
    {
      city: "Denver",
      airport: "DEN",
      subregions: ["usa-nationalparks", "usa-west"],
      description: "Sehr gut für Rocky Mountains, Natur, Roadtrips und Outdoor-Reisen.",
      tags: ["nature", "roadtrip", "city", "food"],
      route: [
        "Tag 1: Ankommen in Denver",
        "Tag 2: Denver Downtown und Foodspots",
        "Tag 3: Rocky Mountain National Park",
        "Tag 4: Boulder",
        "Tag 5: Red Rocks und Umgebung",
        "Tag 6: Scenic Drive oder Wandertag",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Phoenix",
      airport: "PHX",
      subregions: ["usa-nationalparks", "usa-west"],
      description: "Guter Startpunkt für Arizona, Sedona, Grand Canyon und Wüsten-Roadtrips.",
      tags: ["nature", "roadtrip", "food"],
      route: [
        "Tag 1: Ankommen in Phoenix",
        "Tag 2: Scottsdale und Desert Botanical Garden",
        "Tag 3: Sedona",
        "Tag 4: Grand Canyon South Rim",
        "Tag 5: Flagstaff oder Page",
        "Tag 6: Zurück Richtung Phoenix",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Salt Lake City",
      airport: "SLC",
      subregions: ["usa-nationalparks", "usa-west"],
      description: "Perfekter Ausgangspunkt für Utah-Nationalparks und große Roadtrips.",
      tags: ["nature", "roadtrip"],
      route: [
        "Tag 1: Ankommen in Salt Lake City",
        "Tag 2: Antelope Island oder Stadt erkunden",
        "Tag 3: Fahrt Richtung Moab",
        "Tag 4: Arches National Park",
        "Tag 5: Canyonlands National Park",
        "Tag 6: Scenic Drive zurück",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Miami",
      airport: "MIA",
      subregions: ["usa-florida"],
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
      city: "Orlando",
      airport: "MCO",
      subregions: ["usa-florida"],
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
      city: "Tampa",
      airport: "TPA",
      subregions: ["usa-florida"],
      description: "Gut für Golfküste, Strand, Foodspots und Kombination mit Orlando oder Miami.",
      tags: ["beach", "food", "roadtrip"],
      route: [
        "Tag 1: Ankommen in Tampa",
        "Tag 2: Ybor City und Riverwalk",
        "Tag 3: Clearwater Beach",
        "Tag 4: St. Petersburg",
        "Tag 5: Sarasota oder Anna Maria Island",
        "Tag 6: Entspannter Strandtag",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Nashville",
      airport: "BNA",
      subregions: ["usa-south"],
      description: "Sehr gut für Musik, Essen, Nachtleben und Südstaaten-Vibes.",
      tags: ["food", "events", "city", "culture"],
      route: [
        "Tag 1: Ankommen in Nashville und Broadway",
        "Tag 2: Country Music Hall of Fame und Downtown",
        "Tag 3: Live-Musik und Foodspots",
        "Tag 4: Tagesausflug oder Whiskey-Distillery",
        "Tag 5: Sportevent oder Konzert",
        "Tag 6: Entspannter Stadtteil-Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "New Orleans",
      airport: "MSY",
      subregions: ["usa-south"],
      description: "Stark für Musik, Essen, Kultur, Geschichte und besondere Atmosphäre.",
      tags: ["food", "events", "culture", "city"],
      route: [
        "Tag 1: Ankommen im French Quarter",
        "Tag 2: French Quarter, Jackson Square und Musikbars",
        "Tag 3: Garden District und Foodtour",
        "Tag 4: Swamp Tour oder Plantagen-Ausflug",
        "Tag 5: Jazz-Abend und lokale Spots",
        "Tag 6: Entspannter Stadtteil-Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Austin",
      airport: "AUS",
      subregions: ["usa-south"],
      description: "Gut für Musik, BBQ, Events, junge Stadt und Texas-Roadtrips.",
      tags: ["food", "events", "city", "roadtrip"],
      route: [
        "Tag 1: Ankommen in Austin",
        "Tag 2: Downtown, South Congress und Foodtrucks",
        "Tag 3: BBQ-Tour und Live-Musik",
        "Tag 4: Tagesausflug San Antonio",
        "Tag 5: Barton Springs oder Hill Country",
        "Tag 6: Sportevent oder Konzert",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Chicago",
      airport: "ORD",
      subregions: ["usa-midwest"],
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
      city: "Minneapolis",
      airport: "MSP",
      subregions: ["usa-midwest"],
      description: "Unterschätztes Ziel für Seen, Stadt, Sport, Foodspots und entspannte Citytrips.",
      tags: ["city", "sports", "food", "nature"],
      route: [
        "Tag 1: Ankommen in Minneapolis",
        "Tag 2: Downtown und Mississippi Riverfront",
        "Tag 3: Chain of Lakes",
        "Tag 4: Sportevent oder Mall of America",
        "Tag 5: Tagesausflug nach St. Paul",
        "Tag 6: Foodspots und entspannter Tag",
        "Tag 7: Rückflug"
      ]
    }
  ],

  europe: [
    {
      city: "Porto",
      airport: "OPO",
      subregions: ["europe-south", "europe-roadtrip"],
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
      city: "Lissabon",
      airport: "LIS",
      subregions: ["europe-south", "europe-roadtrip"],
      description: "Sehr gut für Stadt, Essen, Küste, Kultur und Portugal-Rundreisen.",
      tags: ["city", "food", "culture", "beach"],
      route: [
        "Tag 1: Ankommen in Lissabon und Alfama",
        "Tag 2: Belém, LX Factory und Aussichtspunkte",
        "Tag 3: Sintra",
        "Tag 4: Cascais und Küste",
        "Tag 5: Foodspots und Bairro Alto",
        "Tag 6: Tagesausflug oder Strand",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Barcelona",
      airport: "BCN",
      subregions: ["europe-south"],
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
      city: "Madrid",
      airport: "MAD",
      subregions: ["europe-south"],
      description: "Gut für Essen, Kultur, Fußball, Museen und Stadtleben.",
      tags: ["city", "food", "culture", "sports"],
      route: [
        "Tag 1: Ankommen in Madrid",
        "Tag 2: Palacio Real, Plaza Mayor und Foodspots",
        "Tag 3: Prado oder Reina Sofía",
        "Tag 4: Fußballstadion oder Event",
        "Tag 5: Tagesausflug Toledo",
        "Tag 6: Stadtviertel und Tapas",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Rom",
      airport: "FCO",
      subregions: ["europe-south"],
      description: "Perfekt für Geschichte, Essen, Kultur und klassische Sehenswürdigkeiten.",
      tags: ["city", "food", "culture"],
      route: [
        "Tag 1: Ankommen in Rom und Trastevere",
        "Tag 2: Kolosseum und Forum Romanum",
        "Tag 3: Vatikan und Engelsburg",
        "Tag 4: Foodtour und Altstadt",
        "Tag 5: Tagesausflug Tivoli oder Ostia Antica",
        "Tag 6: Entspannter letzter Stadt-Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Athen",
      airport: "ATH",
      subregions: ["europe-south"],
      description: "Gut für Kultur, Geschichte, Essen und Kombination mit Inseln.",
      tags: ["culture", "food", "city", "beach"],
      route: [
        "Tag 1: Ankommen in Athen",
        "Tag 2: Akropolis und Plaka",
        "Tag 3: Foodspots und Stadtviertel",
        "Tag 4: Tagesausflug Kap Sounion",
        "Tag 5: Inseloption Ägina oder Hydra",
        "Tag 6: Entspannter Stadt- oder Strandtag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Palma de Mallorca",
      airport: "PMI",
      subregions: ["europe-south", "europe-roadtrip"],
      description: "Gut für Strand, Berge, Roadtrip, Essen und kurze Auszeiten.",
      tags: ["beach", "nature", "roadtrip", "food"],
      route: [
        "Tag 1: Ankommen in Palma",
        "Tag 2: Palma Altstadt und Foodspots",
        "Tag 3: Sóller und Port de Sóller",
        "Tag 4: Cap Formentor",
        "Tag 5: Strandtag oder kleine Buchten",
        "Tag 6: Valldemossa und Deià",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Split",
      airport: "SPU",
      subregions: ["europe-south", "europe-roadtrip"],
      description: "Gut für Küste, Inseln, Altstadt, Natur und Kroatien-Roadtrips.",
      tags: ["beach", "city", "culture", "nature"],
      route: [
        "Tag 1: Ankommen in Split",
        "Tag 2: Diokletianpalast und Altstadt",
        "Tag 3: Insel Hvar oder Brač",
        "Tag 4: Krka Nationalpark",
        "Tag 5: Trogir",
        "Tag 6: Strand- oder Bootstag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "London",
      airport: "LHR",
      subregions: ["europe-west"],
      description: "Sehr gut für Stadt, Kultur, Sport, Events, Essen und Klassiker.",
      tags: ["city", "culture", "sports", "events", "food"],
      route: [
        "Tag 1: Ankommen in London und South Bank",
        "Tag 2: Westminster, Buckingham Palace und Soho",
        "Tag 3: Camden, Shoreditch oder Notting Hill",
        "Tag 4: Museum oder Fußballspiel",
        "Tag 5: Greenwich oder Richmond",
        "Tag 6: Shopping, Foodspots oder Konzert",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Amsterdam",
      airport: "AMS",
      subregions: ["europe-west"],
      description: "Gut für Stadt, Kultur, Foodspots, kurze Trips und entspannte Wege.",
      tags: ["city", "culture", "food"],
      route: [
        "Tag 1: Ankommen in Amsterdam und Grachten",
        "Tag 2: Jordaan, Museen und Foodspots",
        "Tag 3: Fahrradtour oder Noord",
        "Tag 4: Tagesausflug Haarlem oder Zandvoort",
        "Tag 5: Märkte und entspannter Tag",
        "Tag 6: Utrecht oder Den Haag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Paris",
      airport: "CDG",
      subregions: ["europe-west"],
      description: "Klassiker für Stadt, Essen, Kultur, Museen und besondere Atmosphäre.",
      tags: ["city", "food", "culture"],
      route: [
        "Tag 1: Ankommen in Paris",
        "Tag 2: Eiffelturm, Seine und Louvre-Umgebung",
        "Tag 3: Montmartre und Foodspots",
        "Tag 4: Versailles oder Museumstag",
        "Tag 5: Le Marais und Notre-Dame Umgebung",
        "Tag 6: Freier Tag für Viertel und Cafés",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Dublin",
      airport: "DUB",
      subregions: ["europe-west", "europe-roadtrip"],
      description: "Gut für Pubkultur, Küste, Roadtrips und entspannte Irland-Routen.",
      tags: ["city", "culture", "roadtrip", "food"],
      route: [
        "Tag 1: Ankommen in Dublin",
        "Tag 2: Temple Bar, Trinity College und Guinness Storehouse",
        "Tag 3: Howth oder Küstenwanderung",
        "Tag 4: Wicklow Mountains",
        "Tag 5: Galway-Option oder Stadt-Tag",
        "Tag 6: Pub- und Foodspots",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Edinburgh",
      airport: "EDI",
      subregions: ["europe-north", "europe-roadtrip"],
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
    },
    {
      city: "Kopenhagen",
      airport: "CPH",
      subregions: ["europe-north"],
      description: "Sehr gut für Design, Essen, Stadt, Wasser und entspannte Kurztrips.",
      tags: ["city", "food", "culture"],
      route: [
        "Tag 1: Ankommen in Kopenhagen",
        "Tag 2: Nyhavn, Innenstadt und Foodspots",
        "Tag 3: Fahrradtour und Christiania",
        "Tag 4: Tivoli oder Museen",
        "Tag 5: Tagesausflug Malmö",
        "Tag 6: Hafen, Cafés und entspannter Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Stockholm",
      airport: "ARN",
      subregions: ["europe-north"],
      description: "Gut für Stadt, Wasser, Kultur, Foodspots und nordische Atmosphäre.",
      tags: ["city", "culture", "food", "nature"],
      route: [
        "Tag 1: Ankommen in Stockholm",
        "Tag 2: Gamla Stan und Wasserwege",
        "Tag 3: Vasa Museum und Djurgården",
        "Tag 4: Schären-Ausflug",
        "Tag 5: Södermalm und Foodspots",
        "Tag 6: Entspannter Stadt-Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Oslo",
      airport: "OSL",
      subregions: ["europe-north", "europe-roadtrip"],
      description: "Gut für Natur, Stadt, Fjordgefühl und Norwegen-Startpunkte.",
      tags: ["nature", "city", "culture"],
      route: [
        "Tag 1: Ankommen in Oslo",
        "Tag 2: Oper, Hafen und Innenstadt",
        "Tag 3: Museen und Grünerløkka",
        "Tag 4: Fjord-Ausflug",
        "Tag 5: Natur- oder Wandertag",
        "Tag 6: Foodspots und entspannter Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Prag",
      airport: "PRG",
      subregions: ["europe-east"],
      description: "Gut für Stadt, Kultur, Essen, Bier und günstige Citytrips.",
      tags: ["city", "culture", "food"],
      route: [
        "Tag 1: Ankommen in Prag und Altstadt",
        "Tag 2: Karlsbrücke, Burg und Mala Strana",
        "Tag 3: Foodspots und Bierkultur",
        "Tag 4: Tagesausflug Kutná Hora",
        "Tag 5: Stadtviertel und Aussichtspunkte",
        "Tag 6: Entspannter Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Budapest",
      airport: "BUD",
      subregions: ["europe-east"],
      description: "Gut für Stadt, Essen, Thermalbäder, Kultur und günstige Trips.",
      tags: ["city", "food", "culture"],
      route: [
        "Tag 1: Ankommen in Budapest",
        "Tag 2: Burgviertel und Donauufer",
        "Tag 3: Pest, Markthalle und Foodspots",
        "Tag 4: Thermalbad und Ruin Bars",
        "Tag 5: Tagesausflug oder Museum",
        "Tag 6: Entspannter letzter Tag",
        "Tag 7: Rückflug"
      ]
    },
    {
      city: "Krakau",
      airport: "KRK",
      subregions: ["europe-east"],
      description: "Sehr gut für Geschichte, Essen, Kultur und günstige Städtetrips.",
      tags: ["city", "culture", "food"],
      route: [
        "Tag 1: Ankommen in Krakau",
        "Tag 2: Altstadt und Wawel",
        "Tag 3: Kazimierz und Foodspots",
        "Tag 4: Tagesausflug Wieliczka",
        "Tag 5: Optional Auschwitz-Birkenau",
        "Tag 6: Entspannter Stadt-Tag",
        "Tag 7: Rückflug"
      ]
    }
  ],

  asia: [
    {
      city: "Tokyo",
      airport: "HND",
      subregions: ["asia-japan", "asia-city"],
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
      city: "Osaka",
      airport: "KIX",
      subregions: ["asia-japan", "asia-city"],
      description: "Sehr gut für Essen, Kultur, Kyoto-Kombi und Japan-Routen.",
      tags: ["food", "city", "culture"],
      route: [
        "Tag 1: Ankommen in Osaka",
        "Tag 2: Dotonbori und Foodspots",
        "Tag 3: Kyoto Tagesausflug",
        "Tag 4: Nara Tagesausflug",
        "Tag 5: Osaka Castle und Stadtviertel",
        "Tag 6: Kobe oder weiterer Kyoto-Tag",
        "Tag 7: Rückflug oder Weiterreise"
      ]
    },
    {
      city: "Bangkok",
      airport: "BKK",
      subregions: ["asia-southeast", "asia-city"],
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
    },
    {
      city: "Singapur",
      airport: "SIN",
      subregions: ["asia-southeast", "asia-city"],
      description: "Gut für Essen, Skyline, Kulturmix und kurze Asien-Stopps.",
      tags: ["city", "food", "culture"],
      route: [
        "Tag 1: Ankommen in Singapur",
        "Tag 2: Marina Bay und Gardens by the Bay",
        "Tag 3: Chinatown, Little India und Hawker Center",
        "Tag 4: Sentosa oder Stadtviertel",
        "Tag 5: Foodtour",
        "Tag 6: Entspannter letzter Tag",
        "Tag 7: Rückflug oder Weiterreise"
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
  BER: "Berlin",
  CGN: "Köln/Bonn",
  HAM: "Hamburg"
};

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const results = document.getElementById("results");
const summaryBox = document.getElementById("summaryBox");
const destinationResults = document.getElementById("destinationResults");
const subregionSelectionCard = document.getElementById("subregionSelectionCard");
const subregionOptions = document.getElementById("subregionOptions");
const citySelectionCard = document.getElementById("citySelectionCard");
const cityOptions = document.getElementById("cityOptions");

generateBtn.addEventListener("click", generateTrip);
resetBtn.addEventListener("click", resetPlanner);

document.querySelectorAll('input[name="region"]').forEach(regionInput => {
  regionInput.addEventListener("change", () => {
    renderSubregionOptions(regionInput.value);
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

function renderSubregionOptions(region) {
  const regionSubregions = subregions[region] || [];

  subregionOptions.innerHTML = "";

  if (regionSubregions.length === 0) {
    subregionSelectionCard.classList.add("hidden");
    return;
  }

  regionSubregions.forEach(subregion => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${subregion.id}" checked>
      ${subregion.name}
    `;

    label.querySelector("input").addEventListener("change", () => {
      renderCityOptions(region);
    });

    subregionOptions.appendChild(label);
  });

  subregionSelectionCard.classList.remove("hidden");
}

function renderCityOptions(region) {
  const regionDestinations = destinations[region] || [];
  const selectedSubregions = getCheckedValues("#subregionOptions input");

  cityOptions.innerHTML = "";

  const filteredDestinations = selectedSubregions.length > 0
    ? regionDestinations.filter(destination =>
        destination.subregions.some(subregion => selectedSubregions.includes(subregion))
      )
    : regionDestinations;

  if (filteredDestinations.length === 0) {
    citySelectionCard.classList.add("hidden");
    return;
  }

  filteredDestinations.forEach(destination => {
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
  const selectedSubregions = getCheckedValues("#subregionOptions input");
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

  if (selectedSubregions.length === 0) {
    alert("Bitte wähle mindestens eine Unterregion aus.");
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

  renderSummary(departures, region, selectedSubregions, dateFrom, dateTo, duration, interests, selectedCities);
  renderDestinations(scoredDestinations, departures, dateFrom, dateTo);

  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth" });
}

function renderSummary(departures, region, selectedSubregions, dateFrom, dateTo, duration, interests, selectedCities) {
  const departureText = departures.map(code => airportNames[code]).join(", ");

  const interestText = interests.length > 0
    ? interests.map(translateTag).join(", ")
    : "keine speziellen Interessen gewählt";

  const subregionText = selectedSubregions.map(getSubregionName).join(", ");
  const cityText = selectedCities.join(", ");

  summaryBox.innerHTML = `
    <strong>Deine Suche:</strong><br>
    Abflughäfen: ${departureText}<br>
    Zielregion: ${getRegionName(region)}<br>
    Unterregionen: ${subregionText}<br>
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

function getSubregionName(subregionId) {
  const allSubregions = Object.values(subregions).flat();
  const found = allSubregions.find(subregion => subregion.id === subregionId);

  return found ? found.name : subregionId;
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

  const additions = [
    `Tag 8: Zusätzlicher Tag in ${destination.city} mit Fokus auf deine Interessen`,
    "Tag 9: Tagesausflug in die Umgebung",
    "Tag 10: Entspannter Reisetag mit weniger Programm",
    "Tag 11: Weitere Sehenswürdigkeiten oder lokaler Geheimtipp",
    "Tag 12: Foodspots, Stadtviertel oder Naturausflug",
    "Tag 13: Freier Tag für spontane Aktivitäten",
    "Tag 14: Puffertag für Wetter, Events oder längere Fahrten",
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

  subregionOptions.innerHTML = "";
  cityOptions.innerHTML = "";

  subregionSelectionCard.classList.add("hidden");
  citySelectionCard.classList.add("hidden");

  results.classList.add("hidden");
  destinationResults.innerHTML = "";
  summaryBox.innerHTML = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}