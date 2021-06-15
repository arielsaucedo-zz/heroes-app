import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import { AppRouter } from "../../routers/AppRouter";

const initialState = {
  auth: {
    logged: false,
    userName: "",
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

describe("Pruebas en AppRouter.js", () => {
  test("Debe de mostrar el login si no esta autenticado", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
