import axios, { AxiosResponse } from "axios";
import { User } from "../models/User";

export class UserService {
  async getAll(): Promise<AxiosResponse<Array<User>>> {
    return await axios.get('http://localhost:3000/users');
  }
}
