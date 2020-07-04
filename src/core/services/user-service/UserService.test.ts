import { UserService } from "./UserService";
import { Http } from "../http/Http";
import { MOCK_USERS } from "../../../fixtures";

describe('UserService', () => {

  beforeAll(() => {
    (Http as jest.Mocked<typeof Http>).get.mockResolvedValue({ data: MOCK_USERS });
  });

  it('should get all users', async () => {
    const userService = new UserService();

    const { data } = await userService.getAll();

    expect(data).toEqual([{id: 1, firstName: 'bob', lastName: 'martin', age: 68}]);
    expect(Http.get).toHaveBeenCalledWith('/users')
  });

});
