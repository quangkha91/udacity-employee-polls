import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../stores/store";
import Login from "./login";
import { loginError } from "../actions/authActions";

describe("Login screen", () => {
  it("Render a snapshot for Login renderer", async () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should show error when user login false", async () => {
    await store.dispatch(
      loginError("Login failed. Please check your credentials.")
    );

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    
    const errorText = component.getByTestId("login-error");
    console.log(errorText);
    expect(errorText).toBeInTheDocument();
    expect(errorText.textContent).toBe('Login failed. Please check your credentials.');
  });
});
