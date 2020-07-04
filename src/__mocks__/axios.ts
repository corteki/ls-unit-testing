import axios from "axios"

const mock: jest.Mocked<typeof axios> = jest.genMockFromModule('axios');
mock.create = jest.fn(() => mock)

export default mock;