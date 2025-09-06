import { ItineraryOutputDTO } from './itinerary-output.dto';

export function givenItineraryOutputDTO(): ItineraryOutputDTO {
  return {
    city: 'San Francisco',
    days: [
      {
        day: 1,
        activities: [
          'Visit the Golden Gate Bridge',
          'Explore Golden Gate Park',
          'See the de Young Museum',
        ],
      },
      {
        day: 2,
        activities: [
          'Tour Alcatraz Island',
          "Visit Fisherman's Wharf",
          'Explore Pier 39',
        ],
      },
      {
        day: 3,
        activities: [
          'Ride a cable car',
          'Visit Chinatown',
          'See the Asian Art Museum',
        ],
      },
      {
        day: 4,
        activities: [
          'Explore the Mission District',
          'Visit Mission Dolores',
          'See murals on Balmy Alley',
        ],
      },
      {
        day: 5,
        activities: [
          'Go to the Palace of Fine Arts',
          'Visit the Exploratorium',
          'Stroll through the Marina District',
        ],
      },
      {
        day: 6,
        activities: [
          'Take a ferry to Angel Island',
          'Hike for views of the bay',
          'Learn about immigration history',
        ],
      },
      {
        day: 7,
        activities: [
          'Visit the California Academy of Sciences',
          'Explore the Japanese Tea Garden',
          'Relax in Stow Lake',
        ],
      },
      {
        day: 8,
        activities: [
          'Tour the Castro District',
          'Visit the GLBT History Museum',
          'Enjoy local cafes and shops',
        ],
      },
      {
        day: 9,
        activities: [
          'See the Painted Ladies at Alamo Square',
          'Visit the San Francisco Museum of Modern Art (SFMOMA)',
          'Walk through Yerba Buena Gardens',
        ],
      },
      {
        day: 10,
        activities: [
          'Explore the Presidio',
          'Visit the Walt Disney Family Museum',
          'End with sunset at Baker Beach',
        ],
      },
    ],
  };
}
