import { mount } from "enzyme";
import { Provider } from "react-redux";
import { fireEvent, render, waitFor } from "@testing-library/react";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { SearchScreen } from "../../../components/search/SearchScreen";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  search: {
    search: null,
    results: [],
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <SearchScreen />
  </Provider>
);

describe("Pruebas en componente <SearchScreen />", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar mensaje si al buscar API no responde", async () => {
    const initState = {
      search: {
        search: "ok",
        results: [],
      },
    };

    const store = mockStore(initState);

    const wrapper = mount(
      <Provider store={store}>
        <SearchScreen />
      </Provider>
    );

    expect(wrapper.find(".alert").exists()).toBe(true);
    expect(wrapper.find(".alert").text().trim()).toEqual(
      "No existe ningun heroe para su busqueda"
    );
  });
});
