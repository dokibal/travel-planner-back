import {
  givenItineraryInputDTO,
  givenItineraryOutputDTO,
} from 'src/test/mock.data';
import { AiController } from './ai.controller';
import { ItineraryInputDTO } from './itinerary-input.dto';
import { ItineraryOutputDTO } from './itinerary-output.dto';
import { AiService } from './ai.service';

describe('AiControllerTest', () => {
  let aiServiceMock: AiService;
  let aiController: AiController;

  beforeEach(() => {
    aiServiceMock = {
      createItinerary: vi.fn(),
    } as unknown as AiService;
    aiController = new AiController(aiServiceMock);
  });

  it('should create itinerary', async () => {
    // Inputs
    const itineraryInputDTO: ItineraryInputDTO = givenItineraryInputDTO();

    // Spies
    const itineraryOutputDTO: ItineraryOutputDTO = givenItineraryOutputDTO();
    const createItinerarySpy = vi
      .spyOn(aiServiceMock, 'createItinerary')
      .mockResolvedValue(itineraryOutputDTO);

    // Test
    const createdItineraryOutputDTO: ItineraryOutputDTO | null =
      await aiController.createItinerary(itineraryInputDTO);

    // Expectations
    expect(createItinerarySpy).toHaveBeenCalledTimes(1);
    expect(createItinerarySpy).toHaveBeenCalledWith(itineraryInputDTO);

    expect(createdItineraryOutputDTO).toStrictEqual(itineraryOutputDTO);
  });
});
