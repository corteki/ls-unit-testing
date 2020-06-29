import { UserService } from "./UserService";
import axios from "axios";
import { User } from "../models/User";

describe('UserService', () => {

  beforeAll(() => {
    const users: Array<User> = [{id: 1, firstName: 'bob', lastName: 'martin', age: 68}];
    const response = { data: users };
    (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(response);
  });

  it('should get all users', async () => {
    const userService = new UserService();

    const { data } = await userService.getAll();

    expect(data).toEqual([{id: 1, firstName: 'bob', lastName: 'martin', age: 68}]);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/users')
  });

});
