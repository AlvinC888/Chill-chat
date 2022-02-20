//! "import "react-native-get-random-values";" MUST BE FIRST!!
import "react-native-get-random-values";
import { AxiosResponse } from "axios";
import { v4 as uuid } from "uuid";
import api from "./api";

/**
 * This function will send a request to the server to create a new user instance.
 *
 * @param {string} username The username of the new user.
 * @param {string} password The password of the new user.
 * @returns {Promise<void>}
 */

const signup = async (username: string, password: string): Promise<void> => {
  try {
    await api.instance
      .post(`${api.endpoints.signup}?key=${api.apiKey}`, {
        id: uuid(),
        username: username,
        password: password,
        verified: false,
        bot: false,
        blocked: false,
      })
      .then((_data: AxiosResponse): void => {})
      .catch((err: any): void => {
        throw new Error(`API Error: ${err} \n   Error code: CC_ERROR_0318`);
      });
  } catch (err: any) {
    throw new Error(`Error: ${err} \n   Error code: CC_ERROR_0022`);
  }
};

export default signup;
