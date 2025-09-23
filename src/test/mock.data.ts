import { ItineraryInputDTO } from 'src/modules/ai/itinerary-input.dto';
import { TravelType } from 'src/enums';
import { ItineraryOutputDTO } from 'src/modules/ai/itinerary-output.dto';
import { ChatCompletion } from 'openai/resources';
import { SearchDTO } from 'src/modules/geo/search.dto';
import { CityDTO } from 'src/modules/geo/city.dto';
import { City } from '@prisma/client';

export function givenItineraryInputDTO(): ItineraryInputDTO {
  return {
    destination: 'San Francisco',
    days: 2,
    travelType: TravelType.SIGHTSEEING,
  };
}

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
    ],
  };
}

export function givenDeepSeekOutput(): ChatCompletion {
  return {
    choices: [
      {
        message: {
          content: JSON.stringify(givenItineraryOutputDTO()),
        },
      },
    ],
  } as ChatCompletion;
}

export function givenChatCompletionMessageParam(): string {
  const itineraryInputDTO: ItineraryInputDTO = givenItineraryInputDTO();
  return `I would like a ${itineraryInputDTO.days}-day vacation in ${itineraryInputDTO.destination} focused on ${itineraryInputDTO.travelType}.`;
}

export function givenSearchDTO(): SearchDTO {
  return {
    searchTerm: 'TEST',
  };
}

export function givenCityDTO1(): CityDTO {
  return {
    name: 'Shanghai',
    latitude: 31.22222,
    longitude: 121.45806,
    countryCode: 'CN',
    countryName: 'China',
    population: 24874500,
    elevation: 12,
    timeZone: 'Asia/Shanghai',
  };
}

export function givenCityDTO2(): CityDTO {
  return {
    name: 'Lahore',
    latitude: 31.558,
    longitude: 74.35071,
    countryCode: 'PK',
    countryName: 'Pakistan',
    population: 13004135,
    elevation: 216,
    timeZone: 'Asia/Karachi',
  };
}

export function givenCityDTOs(): CityDTO[] {
  return [givenCityDTO1(), givenCityDTO2()];
}

export function givenCityEntity1(): City {
  return { ...givenCityDTO1(), id: 'test1' };
}

export function givenCityEntity2(): City {
  return { ...givenCityDTO2(), id: 'test2' };
}

export function givenCityEntities(): City[] {
  return [givenCityEntity1(), givenCityEntity2()];
}
