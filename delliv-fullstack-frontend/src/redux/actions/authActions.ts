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
  payload: {
    error: string;
    statusCode: number;
  };
}

export type AuthAction = LoginSuccessAction | LoginFailureAction;

export const login = (email: string, password: string, onSuccess: () => void) => async (dispatch: Dispatch<AuthAction>, getState: () => RootState) => {
  try {
    const response = await POST('auth/login', { email, password });

    if (response && response.data) {
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data });
      onSuccess();
    } else {
      const errorPayload = {
        error: 'Invalid response from server',
        statusCode: 500,
      };
      dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: errorPayload });
    }
  } catch (error: any) {
    const errorPayload = {
      error: error.response?.data?.error || 'Unknown error',
      statusCode: error.response?.status || 500,
    };

    dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: errorPayload });
  }
};
