/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import OrdersList from "../../components/molecules/OrderListItem";
import "@testing-library/jest-dom";
import { fetchOrders } from '../../redux/actions/ordersActions';

const mockStore = configureStore([]);

describe("OrdersList", () => {
  it("should render loading message while fetching orders", async () => {
    const store = mockStore({
      orders: {
        status: "loading",
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <OrdersList />
      </Provider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it('should dispatch fetchOrders action on mount', async () => {
    const store = mockStore({
      orders: {
        status: 'idle',
      },
    });
  
    render(
      <Provider store={store}>
        <OrdersList />
      </Provider>
    );
  
    await waitFor(() => {
      expect(fetchOrders).toHaveBeenCalled();
    });
  
    const dispatchMock = jest.fn();
    expect(fetchOrders).toHaveBeenCalledWith(dispatchMock);
  
    if (typeof fetchOrders === 'function') {
      await fetchOrders();
    }
  
    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: 'FETCH_ORDERS_SUCCESS',
      payload: [
        {
          customerName: 'Anna Karolina',
          deliveryAddress: 'Cidade Ivoti, bairro: centro',
          status: 'Pendente',
        },
      ],
    });
  });
  
});
