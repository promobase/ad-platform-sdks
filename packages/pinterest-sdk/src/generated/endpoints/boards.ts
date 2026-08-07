// Auto-generated client for boards — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { BoardsCreateResponse, BoardsListResponse, BoardsGetResponse, BoardsDeleteResponse, BoardsUpdateResponse, BoardsListPinsResponse, BoardSectionsListResponse, BoardSectionsCreateResponse, BoardSectionsDeleteResponse, BoardSectionsUpdateResponse, BoardSectionsListPinsResponse } from "../types.ts";
import type { CreateBoardParams, ListBoardsParams, GetBoardsParams, DeleteBoardParams, UpdateBoardParams, ListBoardsListPinsParams, ListBoardSectionsParams, CreateBoardSectionParams, DeleteBoardSectionParams, UpdateBoardSectionParams, ListBoardSectionsListPinsParams } from "../params.ts";

/** boards — 11 endpoints */
export function createBoardsClient(api: PinterestApiClient) {
  return {
    /** Create board
   * Requires pinterest_oauth2: boards:read, boards:write; client_credentials: boards:read, boards:write. */
    async createBoard(params: CreateBoardParams): Promise<BoardsCreateResponse> {
      const rest = params;
      const envelope = await api.post<BoardsCreateResponse>(`/boards`, rest);
      return envelope;
    },

    /** List boards
   * Requires pinterest_oauth2: boards:read; client_credentials: boards:read. */
    async listBoards(params: ListBoardsParams): Promise<BoardsListResponse> {
      const query = params;
      const envelope = await api.get<BoardsListResponse>(`/boards`, query);
      return envelope;
    },

    /** Get board
   * Requires pinterest_oauth2: boards:read; client_credentials: boards:read. */
    async getBoards(params: GetBoardsParams): Promise<BoardsGetResponse> {
      const { boardId, ...query } = params;
      const envelope = await api.get<BoardsGetResponse>(`/boards/${boardId}`, query);
      return envelope;
    },

    /** Delete board
   * Requires pinterest_oauth2: boards:read, boards:write. */
    async deleteBoard(params: DeleteBoardParams): Promise<BoardsDeleteResponse> {
      const { boardId } = params;
      const envelope = await api.delete<BoardsDeleteResponse>(`/boards/${boardId}`);
      return envelope;
    },

    /** Update board
   * Requires pinterest_oauth2: boards:read, boards:write; client_credentials: boards:read, boards:write. */
    async updateBoard(params: UpdateBoardParams): Promise<BoardsUpdateResponse> {
      const { boardId, ...rest } = params;
      const envelope = await api.patch<BoardsUpdateResponse>(`/boards/${boardId}`, rest);
      return envelope;
    },

    /** List Pins on board
   * Requires pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read. */
    async listBoardsListPins(params: ListBoardsListPinsParams): Promise<BoardsListPinsResponse> {
      const { boardId, ...query } = params;
      const envelope = await api.get<BoardsListPinsResponse>(`/boards/${boardId}/pins`, query);
      return envelope;
    },

    /** List board sections
   * Requires pinterest_oauth2: boards:read; client_credentials: boards:read. */
    async listBoardSections(params: ListBoardSectionsParams): Promise<BoardSectionsListResponse> {
      const { boardId, ...query } = params;
      const envelope = await api.get<BoardSectionsListResponse>(`/boards/${boardId}/sections`, query);
      return envelope;
    },

    /** Create board section
   * Requires pinterest_oauth2: boards:read, boards:write. */
    async createBoardSection(params: CreateBoardSectionParams): Promise<BoardSectionsCreateResponse> {
      const { boardId, ...rest } = params;
      const envelope = await api.post<BoardSectionsCreateResponse>(`/boards/${boardId}/sections`, rest);
      return envelope;
    },

    /** Delete board section
   * Requires pinterest_oauth2: boards:read, boards:write. */
    async deleteBoardSection(params: DeleteBoardSectionParams): Promise<BoardSectionsDeleteResponse> {
      const { boardId, sectionId } = params;
      const envelope = await api.delete<BoardSectionsDeleteResponse>(`/boards/${boardId}/sections/${sectionId}`);
      return envelope;
    },

    /** Update board section
   * Requires pinterest_oauth2: boards:read, boards:write. */
    async updateBoardSection(params: UpdateBoardSectionParams): Promise<BoardSectionsUpdateResponse> {
      const { boardId, sectionId, ...rest } = params;
      const envelope = await api.patch<BoardSectionsUpdateResponse>(`/boards/${boardId}/sections/${sectionId}`, rest);
      return envelope;
    },

    /** List Pins on board section
   * Requires pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read. */
    async listBoardSectionsListPins(params: ListBoardSectionsListPinsParams): Promise<BoardSectionsListPinsResponse> {
      const { boardId, sectionId, ...query } = params;
      const envelope = await api.get<BoardSectionsListPinsResponse>(`/boards/${boardId}/sections/${sectionId}/pins`, query);
      return envelope;
    },
  };
}
