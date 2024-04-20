import { spec } from "pactum";
import { SpecResponse } from "pactum/src/exports/reporter";

export interface UsersResponseBody {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


describe('GET /users', () => {
  let response: SpecResponse;

  beforeAll(async () => {
    response = await spec()
      .get('https://jsonplaceholder.typicode.com/users/1')
      .toss();
  });

  test('should have status code 200', () => {
    expect(response.statusCode).toBe(200);
  })

  test('should have proper Content-Type header', () => {
    const headers = response.headers as Record<string, string>;

    expect(headers['content-type']).toBe('application/json; charset=utf-8');
  })

  test('should have proper response body for key "name"', () => {
    const body: UsersResponseBody = response.body;

    expect(body.name).toEqual('Leanne Graham');
  })

  test('should have proper response body for key "name"', () => {
    const body: UsersResponseBody = response.body;

    expect(body.company.bs).toEqual('harness real-time e-markets');
  })
})

describe('POST /posts', () => {
  let response: SpecResponse;

  beforeAll(async () => {
    response = await spec()
      .post('https://jsonplaceholder.typicode.com/posts')
      .withHeaders('Content-Type', 'application/json')
      .withJson({
        "userId": 1,
        "title": 'My blog post title',
        "body": 'This is the text of my latest blog post.'
      })
      .toss()
  })

  test('should have status code 201', () => {
    expect(response.statusCode).toBe(201);
  })

  test('should have status code 201', () => {
    expect(typeof response.body.id).toBe("number");
  })
})
