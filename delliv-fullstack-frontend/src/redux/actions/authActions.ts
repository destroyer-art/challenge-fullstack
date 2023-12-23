import { Dispatch } from 'redux';
import { RootState } from '../store';
import { UserType } from '../../types/userTypes';
import { POST } from '../../api/api';

export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: UserType;
}

interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE;
  payload: string;
}

export type AuthAction = LoginSuccessAction | LoginFailureAction;

export const login = (email: string, password: string, onSuccess: () => void) => async (dispatch: Dispatch<AuthAction>, getState: () => RootState) => {
  try {
    const response = await POST('/login', { email, password });
    dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data });
    onSuccess();
  } catch (error: any) {
    dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: (error as Error).message });
  }
};
