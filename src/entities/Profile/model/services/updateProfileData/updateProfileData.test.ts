
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/profile";

const data = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  first: "asdf",
  lastname:"Ulbi",
  city: '113',
  currency: Currency.RUB,
}

describe('updateProfileData.test', () => {

  test('success update', async () => {

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {form:data}
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  });

  test('error update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {form:data}
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  });

  test('error validate', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {form:{...data, lastname: '', first: ''}}
    });
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  });
});