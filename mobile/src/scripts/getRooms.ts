import { AxiosResponse } from "axios";
import { RoomType } from ".";
import api from "./api";

/**
 * This is the get room function, this function will return the rooms of the user once called.
 *
 * @param user The user to get information from.
 * @returns {Promise<Array<RoomType>>} Returns an array of rooms.
 */

const getRoom = async (user: string): Promise<typeof rooms> => {
  const rooms: Array<RoomType> = [];

  try {
    await api.instance
      .get(`${api.endpoints.getRoom}?user=${user}`)
      .then((data: AxiosResponse): void => {
        data.data?.forEach((room: RoomType): void => {
          rooms.push(room);
        });
      })
      .catch((err: unknown): void => {
        throw new Error(`API Error: ${err} \n   Error code: CC_ERROR_0318`);
      });
  } catch (err: unknown) {
    throw new Error(`Error: ${err} \n   Error code: CC_ERROR_0022`);
  }

  return rooms;
};

export default getRoom;