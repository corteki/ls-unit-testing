import { AxiosResponse } from "axios";
import { User } from "../../models/User";
import { Http } from "../http/Http";

export class UserService {
  async getAll(): Promise<AxiosResponse<Array<User>>> {
    return await Http.get('/users');
  }

  async getUserById(id: number): Promise<AxiosResponse<User>> {
    return await Http.get(`/users/${id}`);
  }
}
