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

    expect(data).toEqual(MOCK_USERS);
    expect(Http.get).toHaveBeenCalledWith('/users');
  });

});
