import { StateSchema } from "app/providers/StoreProvider"

export const getProfileValidateError = (state:StateSchema) => state?.profile?.validateErrors;