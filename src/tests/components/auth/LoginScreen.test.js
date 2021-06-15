import { mount } from "enzyme";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Swal from "sweetalert2";

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import { LoginScreen } from "../../../components/auth/LoginScreen";

const initialState = {
  auth: {
    logged: false,
    userName: "",
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <LoginScreen />
  </Provider>
);

describe("Pruebas en componente <LoginScreen />", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe validar campos del login al realizar el submit", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    const emailField = getByTestId("email");

    await waitFor(() => {
      fireEvent.change(emailField, { target: { value: "pepe@gmail.com" } });
    });

    const button = getByTestId("button");

    await waitFor(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
