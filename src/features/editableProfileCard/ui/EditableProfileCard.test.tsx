import { screen } from '@testing-library/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile } from 'entities/Profile'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import userEvent from '@testing-library/user-event'
import { profileReducer } from '../model/slice/profileSlice'
import { $api } from 'shared/api/api'
const profile: Profile = {
  id: '1',
  first: '111h',
  lastname: 'asf',
  age: 30,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Minsk',
  username: 'admin213',
  avatar:
    'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/10/homersimpson1702a.jpg?width=1200',
}
const options = {
  initialState: {
    profile: { readonly: true, data: profile, form: profile },
    user: { authData: { id: '1', username: 'admin' } },
  },
  asyncReducers: { profile: profileReducer },
}

describe('features/EditableProfileCard', () => {
  test('change to edit mode', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument()
  })

  test('return to inital state when cancel', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    )

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('111h')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('asf')
  })

  test('validation error', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    )

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument()
  })
  test('send PUT request when validation passed', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    const mockPutReq = jest.spyOn($api, 'put')
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    )

    expect(mockPutReq).toHaveBeenCalled()
  })
})
