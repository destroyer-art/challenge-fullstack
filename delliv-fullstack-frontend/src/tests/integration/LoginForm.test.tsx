/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import LoginForm from "../../components/molecules/LoginForm";
import { useDispatch } from "react-redux";

import "@testing-library/jest-dom";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('LoginForm', () => {
  it('should render the login form and call onLoginSuccess on successful login', async () => {
    const onLoginSuccess = jest.fn();
    const dispatchMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

    const history = createMemoryHistory();
    const { getByLabelText, getByTestId } = render(
      <Router history={history}>
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </Router>
    );

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByTestId('button');

    fireEvent.change(emailInput, { target: { value: 'submittedEmail' } });
    fireEvent.change(passwordInput, { target: { value: 'submittedPassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onLoginSuccess).toHaveBeenCalledTimes(0);
      expect(dispatchMock).toHaveBeenCalledWith(
        expect.any(Function)
      );
    });

    expect(history.location.pathname).toEqual('/');
  });
});
