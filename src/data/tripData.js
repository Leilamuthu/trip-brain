// Trip Brain - Ireland & Spain 2026
// Complete trip data for Leila & Michael

export const tripData = {
  trip: {
    name: "Ireland & Spain 2026",
    travelers: ["Leila Marimuthu", "Michael Kemp"],
    dates: {
      start: "2026-08-22",
      end: "2026-09-20"
    },
    timezone: "Europe/Dublin", // Primary timezone
    locations: [
      {
        id: "dublin-1",
        name: "Dublin",
        country: "Ireland",
        region: "Dublin",
        dates: {
          start: "2026-08-23",
          end: "2026-08-26"
        },
        accommodation: {
          name: "Trinity City Hotel",
          address: "Pearse Street, Dublin 2, Ireland",
          phone: "+353 1 6481000",
          bookingRef: "DUBnjqyndg5m-6424890",
          checkIn: "15:00",
          checkOut: "12:00",
          roomType: "Contemporary Queen Room",
          nights: 3,
          cost: "€637.70",
          cancellationPolicy: "Flexible - free cancel until day before arrival at 3pm",
          notes: "Near Trinity College, 5 min walk to Grafton St. Aircoach from airport: €8 one-way."
        },
        activities: [
          {
            name: "Jameson Distillery",
            date: "2026-08-24",
            notes: "Whiskey tasting tour"
          },
          {
            name: "Dublin City Exploration",
            date: "2026-08-25",
            notes: "Grafton Street, Temple Bar, general wandering"
          }
        ],
        restaurants: [
          {
            name: "Chapter One",
            cuisine: "Modern Irish",
            priceGuide: "€€€",
            specialties: "Tasting menu, fine dining",
            notes: "Michelin-starred, exceptional experience. Book ahead."
          },
          {
            name: "Écluse",
            cuisine: "Irish/French Fusion",
            priceGuide: "€€",
            specialties: "Seafood, wine selection",
            notes: "South Great George's Street, cosy atmosphere"
          },
          {
            name: "Silk Road Cafe",
            cuisine: "Middle Eastern",
            priceGuide: "€",
            specialties: "Falafels, hummus, vegetarian",
            notes: "Budget-friendly, fresh ingredients"
          }
        ]
      },
      {
        id: "newcastle-1",
        name: "Newcastle, Co. Down",
        country: "Northern Ireland",
        region: "County Down",
        dates: {
          start: "2026-08-26",
          end: "2026-08-28"
        },
        accommodation: {
          name: "Snooze Apartments",
          address: "Newcastle, Co. Down",
          bookingRef: "To confirm",
          checkIn: "16:00",
          checkOut: "11:00",
          notes: "Peter's sister's place. Seaweed app integration. Car hire pickup at Dublin Airport."
        },
        activities: [
          {
            name: "Stage 1 Bike Ride - Newcastle to Carlow",
            date: "2026-08-28",
            distance: "TBD",
            strava: "https://www.strava.com/routes/3411556368306302974",
            wee_dander_link: "https://wee-dander-2026.netlify.app/#day1"
          }
        ],
        restaurants: [
          {
            name: "The Strand Bar & Restaurant",
            cuisine: "Irish/Seafood",
            priceGuide: "€€",
            specialties: "Fresh fish, sea bass, local catch",
            notes: "Beachfront location, sunset views"
          }
        ]
      },
      {
        id: "carlow",
        name: "Carlow",
        country: "Ireland",
        region: "Carlow",
        dates: {
          start: "2026-08-28",
          end: "2026-08-29"
        },
        accommodation: {
          name: "Ewing's Bar & Self-Catering Accomm",
          address: "Carlow",
          bookingRef: "Direct",
          checkIn: "TBD",
          checkOut: "TBD",
          cost: "A$386.10",
          cancellationPolicy: "Free until 25 Aug",
          notes: "Bike ride stage accommodation"
        },
        activities: [
          {
            name: "Stage 2 Bike Ride - Carlow to Cork",
            date: "2026-08-29",
            strava: "https://www.strava.com/routes/3413657118135485408"
          }
        ]
      },
      {
        id: "cork",
        name: "Cork",
        country: "Ireland",
        region: "Cork",
        dates: {
          start: "2026-08-29",
          end: "2026-09-01"
        },
        accommodation: {
          name: "AirBnB House",
          address: "37 Hibernian Buildings, Albert Road, Cork",
          bookingRef: "AirBnB",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$888.82",
          cancellationPolicy: "Free until 28 Aug",
          nights: 2,
          notes: "Beautiful house in city centre. Flexible check-in."
        },
        activities: [
          {
            name: "Free day - Cork exploration",
            date: "2026-08-30",
            notes: "Arts, markets, river walks"
          },
          {
            name: "Stage 3 Bike Ride - Cork to Limerick",
            date: "2026-08-31",
            strava: "https://www.strava.com/routes/3413660849071689696"
          }
        ],
        restaurants: [
          {
            name: "Sakura",
            cuisine: "Japanese/Asian Fusion",
            priceGuide: "€€",
            specialties: "Sushi, ramen, sake",
            notes: "High-quality ingredients, creative menus"
          },
          {
            name: "Paradiso",
            cuisine: "Italian",
            priceGuide: "€€",
            specialties: "Pasta, wood-fired pizza, wine",
            notes: "South Main Street, warm atmosphere"
          }
        ]
      },
      {
        id: "limerick",
        name: "Limerick",
        country: "Ireland",
        region: "Limerick",
        dates: {
          start: "2026-08-31",
          end: "2026-09-02"
        },
        accommodation: {
          name: "Castletroy Park Hotel",
          address: "Castletroy, Limerick",
          bookingRef: "Qantas Hotels",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$521.46",
          deposit: "$52.15 per room",
          notes: "2 rooms booked. Cycle-friendly hotel."
        },
        activities: [
          {
            name: "Stage 4 Bike Ride - Limerick to Tuam",
            date: "2026-09-01",
            strava: "https://www.strava.com/routes/3413659093918304128"
          }
        ],
        restaurants: [
          {
            name: "Wilde's",
            cuisine: "Modern Irish",
            priceGuide: "€€",
            specialties: "Local produce, creative dishes",
            notes: "Historic building, intimate dining"
          }
        ]
      },
      {
        id: "tuam",
        name: "Tuam",
        country: "Ireland",
        region: "Galway",
        dates: {
          start: "2026-09-01",
          end: "2026-09-03"
        },
        accommodation: {
          name: "Cortoon Inn Pub & Accomm",
          address: "Tuam",
          bookingRef: "Booking.com",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$362.00",
          roomType: "Shared bathroom",
          cancellationPolicy: "Free until 30 Aug",
          notes: "Cosy pub atmosphere with accommodation upstairs"
        },
        activities: [
          {
            name: "Stage 5 Bike Ride - Tuam to Sligo",
            date: "2026-09-02",
            strava: "https://www.strava.com/routes/3413657118141304800"
          }
        ]
      },
      {
        id: "sligo",
        name: "Sligo",
        country: "Ireland",
        region: "Sligo",
        dates: {
          start: "2026-09-02",
          end: "2026-09-04"
        },
        accommodation: {
          name: "Old Fort Lodge (B&B)",
          address: "Sligo",
          bookingRef: "Booking.com",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$368.54",
          roomType: "Shared bathroom",
          cancellationPolicy: "Free until 2 Aug ⚠️",
          notes: "Traditional B&B, hearty breakfasts"
        },
        activities: [
          {
            name: "Stage 6 Bike Ride - Sligo to Armagh",
            date: "2026-09-03",
            strava: "https://www.strava.com/routes/3483994132426455920"
          }
        ],
        restaurants: [
          {
            name: "Hooked Restaurant",
            cuisine: "Seafood",
            priceGuide: "€€",
            specialties: "Fresh catch, fish & chips elevated",
            notes: "River Garavogue location, charming"
          }
        ]
      },
      {
        id: "armagh",
        name: "Armagh",
        country: "Northern Ireland",
        region: "County Armagh",
        dates: {
          start: "2026-09-03",
          end: "2026-09-05"
        },
        accommodation: {
          name: "The Rose Guest House",
          address: "4 Moy Road, Armagh",
          bookingRef: "Direct",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$320.00",
          notes: "Peter's grandma's house - family welcome!"
        },
        activities: [
          {
            name: "Stage 7 Bike Ride - Armagh to Newcastle",
            date: "2026-09-04",
            strava: "https://www.strava.com/routes/3484000705232006000"
          },
          {
            name: "Newcastle Festival",
            date: "2026-09-05",
            notes: "Local music, arts, food festival"
          }
        ]
      },
      {
        id: "belfast",
        name: "Belfast",
        country: "Northern Ireland",
        region: "Belfast",
        dates: {
          start: "2026-09-06",
          end: "2026-09-08"
        },
        accommodation: {
          name: "2-bed Townhouse",
          address: "13 Brown Street, Belfast",
          bookingRef: "AirBnB",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$626.55",
          cancellationPolicy: "Prepaid - free until 01 Sep",
          notes: "Cathedral Quarter location, walkable to pubs and restaurants"
        },
        activities: [
          {
            name: "Black Taxi Tour",
            date: "2026-09-07",
            notes: "Historical murals, political history"
          },
          {
            name: "Guinness at local pubs",
            date: "2026-09-07",
            notes: "Social evening"
          }
        ],
        restaurants: [
          {
            name: "OX",
            cuisine: "Modern British/Irish",
            priceGuide: "€€€",
            specialties: "Tasting menu, local producers",
            notes: "Michelin-starred, exceptional. Book early."
          },
          {
            name: "Coppi",
            cuisine: "Italian",
            priceGuide: "€€",
            specialties: "Pasta, risotto, wine",
            notes: "Cathedral Quarter, intimate"
          }
        ]
      },
      {
        id: "derry",
        name: "Derry/Londonderry",
        country: "Northern Ireland",
        region: "County Londonderry",
        dates: {
          start: "2026-09-08",
          end: "2026-09-10"
        },
        accommodation: {
          name: "2-bed Apartment",
          address: "9 Shipquay Street, Derry",
          bookingRef: "Booking.com",
          checkIn: "15:00",
          checkOut: "11:00",
          cost: "A$499.44",
          cancellationPolicy: "Prepaid - free until 01 Sep",
          notes: "Historic walled city location, riverside walk"
        },
        activities: [
          {
            name: "Giants Causeway",
            date: "2026-09-08",
            notes: "UNESCO World Heritage Site, 1h drive"
          },
          {
            name: "Bushmills Whiskey Distillery",
            date: "2026-09-08",
            notes: "Tasting tour"
          },
          {
            name: "Peter's Birthday!",
            date: "2026-09-08",
            notes: "🎂 Celebrate with Guinness and good company"
          },
          {
            name: "Museum of Free Derry",
            date: "2026-09-09",
            notes: "Historical significance"
          },
          {
            name: "Derry Walls Walk",
            date: "2026-09-09",
            notes: "Historic city walls with views"
          }
        ],
        restaurants: [
          {
            name: "Brown's Restaurant & Champagne Bar",
            cuisine: "Irish/French",
            priceGuide: "€€",
            specialties: "Local lamb, seafood, champagne",
            notes: "Prestigious address, celebratory dining"
          }
        ]
      },
      {
        id: "glencolmcille",
        name: "Glencolmcille",
        country: "Ireland",
        region: "County Donegal",
        dates: {
          start: "2026-09-10",
          end: "2026-09-12"
        },
        accommodation: {
          name: "3-bed House",
          address: "Glencolmcille, County Donegal",
          bookingRef: "AirBnB",
          checkIn: "16:00",
          checkOut: "11:00",
          cost: "A$411.41",
          cancellationPolicy: "Free until 01 Sep",
          notes: "Gaeltacht region (Irish-speaking). Rural, scenic location."
        },
        activities: [
          {
            name: "Donegal Exploration",
            date: "2026-09-10",
            notes: "Folk Village Museum, scenic drives"
          },
          {
            name: "Peter's Birthday Party",
            date: "2026-09-12",
            notes: "Celebration with friends and family at Newcastle"
          }
        ],
        restaurants: [
          {
            name: "The Rusty Mackerel",
            cuisine: "Irish/Seafood",
            priceGuide: "€€",
            specialties: "Fish catch, traditional stew",
            notes: "Local institution, welcoming"
          }
        ]
      },
      {
        id: "newcastle-2",
        name: "Newcastle, Co. Down",
        country: "Northern Ireland",
        region: "County Down",
        dates: {
          start: "2026-09-12",
          end: "2026-09-14"
        },
        accommodation: {
          name: "Snooze Apartments",
          address: "Newcastle, Co. Down",
          bookingRef: "To confirm",
          checkIn: "15:00",
          checkOut: "11:00",
          notes: "Return to Peter's sister's place for final gathering and departure"
        },
        activities: [
          {
            name: "Peter's Birthday Party",
            date: "2026-09-12",
            notes: "Major celebration at Newcastle"
          }
        ]
      },
      {
        id: "bilbao",
        name: "Bilbao",
        country: "Spain",
        region: "Basque Country",
        dates: {
          start: "2026-09-14",
          end: "2026-09-15"
        },
        accommodation: {
          name: "TBD via AirBnB",
          address: "San Sebastián area or Bilbao",
          bookingRef: "Not yet booked",
          notes: "Connecting to San Sebastián. May stay overnight or travel direct."
        },
        activities: [
          {
            name: "Guggenheim Museum",
            date: "2026-09-15",
            notes: "World-class art and architecture"
          }
        ]
      },
      {
        id: "san-sebastian",
        name: "San Sebastián",
        country: "Spain",
        region: "Basque Country (Gipuzkoa)",
        dates: {
          start: "2026-09-14",
          end: "2026-09-18"
        },
        accommodation: {
          name: "AirBnB (not yet booked)",
          address: "San Sebastián",
          bookingRef: "To confirm",
          checkIn: "17:00",
          checkOut: "11:00",
          notes: "Check from 5pm after arrival. Luggage storage at Donostia-San Sebastián station (~€3-5 for 4h)"
        },
        activities: [
          {
            name: "Basque Culinary Exploration",
            date: "2026-09-15 to 2026-09-17",
            notes: "San Sebastián is known as the gastronomic capital of Spain - pintxos, ciders, local markets"
          }
        ],
        restaurants: [
          {
            name: "Akelarre",
            cuisine: "Modern Basque",
            priceGuide: "€€€",
            specialties: "3 Michelin stars, innovative coastal cuisine",
            notes: "Requires advance booking months ahead. Check availability."
          },
          {
            name: "Martín Berasategui",
            cuisine: "Modern Basque/French",
            priceGuide: "€€€",
            specialties: "3 Michelin stars, seasonal tasting menu",
            notes: "One of Spain's best. Book well in advance."
          },
          {
            name: "Pintxos Crawl - Old Town (Parte Vieja)",
            cuisine: "Traditional Basque",
            priceGuide: "€",
            specialties: "Small bites with local wine/cider",
            notes: "Casual, social, authentic. Visit bars like Gandarias, Txepetxa, Bar Goena"
          },
          {
            name: "Cider House (Sidería)",
            cuisine: "Traditional Basque",
            priceGuide: "€€",
            specialties: "Cider, tortilla, grilled meats",
            notes: "Authentic rural experience outside city"
          },
          {
            name: "La Cuchara de San Telmo",
            cuisine: "Modern Pintxos",
            priceGuide: "€€",
            specialties: "Creative small plates, local ingredients",
            notes: "Highly rated, casual atmosphere"
          }
        ]
      },
      {
        id: "madrid",
        name: "Madrid",
        country: "Spain",
        region: "Madrid",
        dates: {
          start: "2026-09-18",
          end: "2026-09-19"
        },
        accommodation: {
          name: "TBD",
          address: "Madrid",
          bookingRef: "Not yet booked",
          notes: "Transit day - arriving ~1:51pm, departing ~10:05pm next morning"
        },
        activities: [
          {
            name: "Madrid City Exploration",
            date: "2026-09-18",
            notes: "Prado Museum, parks, Retiro, if time permits"
          }
        ],
        restaurants: [
          {
            name: "DiverXO",
            cuisine: "Modern Spanish/Fusion",
            priceGuide: "€€€",
            specialties: "Avant-garde dining experience, theatrical",
            notes: "Fun, experimental. Only if time allows."
          },
          {
            name: "Mercado de San Miguel",
            cuisine: "Spanish Market Food",
            priceGuide: "€",
            specialties: "Jamón, seafood, wine, casual tapas",
            notes: "Central location, ideal for quick bites between transport"
          }
        ]
      }
    ],
    transport: [
      {
        id: "flight-1",
        type: "Flight",
        airline: "Aer Lingus",
        flightNumber: "EI 0748",
        from: "Dublin (DUB)",
        to: "Bilbao (BIO)",
        date: "2026-09-14",
        departureTime: "14:20",
        arrivalTime: "17:25",
        duration: "3h 5m",
        bookingRef: "358EEF",
        seat: "7C Economy",
        baggage: "10kg + carry-on included",
        notes: "Check in from Sunday 30 Aug. Return hire car to Dublin T1 before flight."
      },
      {
        id: "train-1",
        type: "Train",
        operator: "Renfe",
        from: "Donostia-San Sebastián (Spain)",
        to: "Madrid Chamartín",
        date: "2026-09-18",
        departureTime: "08:36",
        arrivalTime: "13:51",
        duration: "5h 15m",
        bookingRef: "7591202067649",
        cost: "€76.85",
        ticketNumber: "7591202067649",
        coach: "CONFORT",
        seat: "2B",
        notes: "Fast train (AVE/CONFORT class). Luggage storage available. Close door 2 min before departure."
      },
      {
        id: "car-hire",
        type: "Car Hire",
        company: "P&K with M&L pickup/dropoff",
        vehicle: "VW T-Cross",
        pickupDate: "2026-08-26",
        pickupLocation: "Dublin Airport T1 Car Hire Desks",
        dropoffDate: "2026-09-14",
        dropoffLocation: "Dublin Airport T1 Car Hire Desks",
        duration: "18 days",
        cost: "A$1,679 + €35 (N. Ireland surcharge)",
        insurance: "Full insurance €0 excess included",
        drivers: "PD (primary) + ML (1 additional driver)",
        mileage: "Unlimited, full-to-full",
        notes: "Includes €35 surcharge for driving in Northern Ireland. Pick up arrival day (26 Aug), drop off before flight (14 Sept)."
      },
      {
        id: "pesa-bus",
        type: "Bus",
        operator: "PESA",
        from: "Bilbao Airport",
        to: "San Sebastián",
        date: "2026-09-14",
        departureTime: "18:45",
        duration: "1 hour",
        cost: "€6.45-7.45",
        notes: "Depart 6.45pm or 7.45pm (hourly service). Buy tickets at airport. Arrive San Sebastián bus station ~7:45pm-8:45pm"
      },
      {
        id: "local-transport-seville",
        type: "Local Transport Info",
        city: "Dublin",
        options: [
          {
            mode: "Aircoach",
            from: "Dublin Airport",
            to: "Trinity City Hotel",
            cost: "€8 one-way",
            frequency: "Every 15 minutes",
            notes: "Get off at Trinity College stop, walk 250m down Pearse St"
          },
          {
            mode: "Taxi",
            from: "Dublin Airport",
            to: "Hotel",
            cost: "~€30",
            notes: "Standard taxis from rank outside Arrivals"
          }
        ]
      }
    ],
    emergencyContacts: {
      travelInsurance: {
        provider: "ANZ Platinum & Black Personal Credit Cards",
        referenceNumber: "ANZFBLT0052011",
        phoneOverseas: "+61 7 3305 7465",
        phoneAustralia: "1800 010 075",
        coverage24h: true,
        notes: "Call immediately if condition is life-threatening. Policy reference on file."
      },
      embassies: [
        {
          country: "Ireland",
          name: "Irish Embassy (Spain)",
          location: "Madrid",
          phone: "+34 91 436 4093"
        },
        {
          country: "Australia",
          name: "Australian Embassy (Spain)",
          location: "Madrid",
          phone: "+34 91 353 6600"
        }
      ],
      localEmergency: {
        ireland: "999 (or 112)",
        spain: "112",
        nonEmergency: "Dial local police non-emergency lines"
      },
      personalEmergency: {
        name: "[Contact details to be provided]",
        phone: "[Contact phone]"
      }
    },
    bikeRide: {
      name: "Wee Dander Bike Ride",
      dates: "2026-08-28 to 2026-09-04",
      totalDistance: "~300km over 8 days",
      difficulty: "Moderate to challenging",
      webApp: "https://wee-dander-2026.netlify.app",
      stages: [
        {
          stageNum: 1,
          date: "2026-08-28",
          from: "Newcastle",
          to: "Carlow",
          distance: "TBD",
          elevation: "TBD",
          strava: "https://www.strava.com/routes/3411556368306302974",
          accommodation: "Ewing's Carlow"
        },
        {
          stageNum: 2,
          date: "2026-08-29",
          from: "Carlow",
          to: "Cork",
          strava: "https://www.strava.com/routes/3413657118135485408",
          accommodation: "AirBnB Cork"
        },
        {
          stageNum: 3,
          date: "2026-08-31",
          from: "Cork",
          to: "Limerick",
          strava: "https://www.strava.com/routes/3413660849071689696",
          accommodation: "Castletroy Park Hotel"
        },
        {
          stageNum: 4,
          date: "2026-09-01",
          from: "Limerick",
          to: "Tuam",
          strava: "https://www.strava.com/routes/3413659093918304128",
          accommodation: "Cortoon Inn"
        },
        {
          stageNum: 5,
          date: "2026-09-02",
          from: "Tuam",
          to: "Sligo",
          strava: "https://www.strava.com/routes/3413657118141304800",
          accommodation: "Old Fort Lodge"
        },
        {
          stageNum: 6,
          date: "2026-09-03",
          from: "Sligo",
          to: "Armagh",
          strava: "https://www.strava.com/routes/3483994132426455920",
          accommodation: "The Rose Guest House"
        },
        {
          stageNum: 7,
          date: "2026-09-04",
          from: "Armagh",
          to: "Newcastle",
          strava: "https://www.strava.com/routes/3484000705232006000",
          accommodation: "Snooze Apartments"
        }
      ]
    }
  }
};

// Helper functions for trip data
export function getTodayLocation(currentDate) {
  for (let location of tripData.trip.locations) {
    const start = new Date(location.dates.start);
    const end = new Date(location.dates.end);
    if (currentDate >= start && currentDate <= end) {
      return location;
    }
  }
  return null;
}

export function getUpcomingEvents(currentDate) {
  const events = [];

  for (let location of tripData.trip.locations) {
    const start = new Date(location.dates.start);
    if (start > currentDate && start <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)) {
      events.push({
        type: "location",
        date: location.dates.start,
        title: `Moving to ${location.name}`,
        details: location
      });
    }
  }

  return events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function generateSuggestedPrompts(currentDate) {
  const location = getTodayLocation(currentDate);
  const hour = currentDate.getHours();
  const prompts = [];

  if (!location) return [];

  // Time-based suggestions
  if (hour >= 6 && hour < 10) {
    prompts.push(`Where should I get breakfast near ${location.name}?`);
  } else if (hour >= 11 && hour < 14) {
    prompts.push(`Where's a good lunch spot in ${location.name}?`);
  } else if (hour >= 17 && hour < 21) {
    prompts.push(`Dinner recommendations for ${location.name}?`);
  }

  // Location-based suggestions
  if (location.accommodation) {
    prompts.push(`What's my check-in info for tonight?`);
  }

  // Activity suggestions
  if (location.activities && location.activities.length > 0) {
    prompts.push(`What's there to do in ${location.name} today?`);
  }

  // Ensure we have 2-3 prompts
  if (prompts.length === 1) {
    prompts.push(`Tell me about my accommodation tonight.`);
  }

  return prompts.slice(0, 3);
}
