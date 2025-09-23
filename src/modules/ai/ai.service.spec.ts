import {
  givenChatCompletionMessageParam,
  givenDeepSeekOutput,
  givenItineraryInputDTO,
  givenItineraryOutputDTO,
} from 'src/test/mock.data';
import { ItineraryInputDTO } from './itinerary-input.dto';
import { ItineraryOutputDTO } from './itinerary-output.dto';
import { AiService } from './ai.service';
import { DeepSeekService } from '../deepseek/deepseek.service';
import { ChatCompletion } from 'openai/resources';
import { BadRequestException } from '@nestjs/common';

describe('AiServiceTest', () => {
  let deepSeekServiceMock: DeepSeekService;
  let aiService: AiService;

  beforeEach(() => {
    deepSeekServiceMock = {
      chat: {
        completions: {
          create: vi.fn(),
        },
      },
    } as unknown as DeepSeekService;
    aiService = new AiService(deepSeekServiceMock);
  });

  it('should create itinerary', async () => {
    // Inputs
    const itineraryInputDTO: ItineraryInputDTO = givenItineraryInputDTO();

    // Spies
    const deepSeekOutput: ChatCompletion = givenDeepSeekOutput();
    const createItinerarySpy = vi
      .spyOn(deepSeekServiceMock.chat.completions, 'create')
      .mockResolvedValue(deepSeekOutput);

    // Test
    const createdItineraryOutputDTO: ItineraryOutputDTO | null =
      await aiService.createItinerary(itineraryInputDTO);

    // Expectations
    expect(createItinerarySpy).toHaveBeenCalledTimes(1);
    expect(createItinerarySpy).toHaveBeenCalledWith({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: aiService['systemPrompt'],
        },
        {
          role: 'user',
          content: givenChatCompletionMessageParam(),
        },
      ],
      temperature: 1.3,
      max_tokens: 1000,
      response_format: {
        type: 'json_object',
      },
    });

    expect(createdItineraryOutputDTO).toStrictEqual(givenItineraryOutputDTO());
  });

  it('should handle null DeepSeek output', async () => {
    // Inputs
    const itineraryInputDTO: ItineraryInputDTO = givenItineraryInputDTO();

    // Spies
    const createItinerarySpy = vi
      .spyOn(deepSeekServiceMock.chat.completions, 'create')
      .mockResolvedValue({
        choices: [{ message: { content: null } }],
      } as ChatCompletion);

    // Test
    const createdItineraryOutputDTO: ItineraryOutputDTO | null =
      await aiService.createItinerary(itineraryInputDTO);

    // Expectations
    expect(createItinerarySpy).toHaveBeenCalledTimes(1);

    expect(createdItineraryOutputDTO).toBe(null);
  });

  it('should handle DeepSeek error when creating itinerary', async () => {
    // Inputs
    const itineraryInputDTO: ItineraryInputDTO = givenItineraryInputDTO();

    // Spies
    const createItinerarySpy = vi
      .spyOn(deepSeekServiceMock.chat.completions, 'create')
      .mockImplementation(() => {
        throw new BadRequestException();
      });

    // Test
    await expect(aiService.createItinerary(itineraryInputDTO)).rejects.toThrow(
      new BadRequestException(),
    );

    // Expectations
    expect(createItinerarySpy).toHaveBeenCalledTimes(1);
    expect(createItinerarySpy).toHaveBeenCalledWith({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: aiService['systemPrompt'],
        },
        {
          role: 'user',
          content: givenChatCompletionMessageParam(),
        },
      ],
      temperature: 1.3,
      max_tokens: 1000,
      response_format: {
        type: 'json_object',
      },
    });
  });
});
