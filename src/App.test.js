import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import { loginSuccess } from "./actions/authActions";

describe("App", () => {
  it("should return Login page when user not login", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const heading = component.getByTestId("login-page");
    expect(heading).toBeInTheDocument();
  });

  it("should return Dashboard page when user logged in", () => {
    store.dispatch(
      loginSuccess({
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: null,
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
      })
    );

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const heading = component.getByTestId("logout-user");
    expect(heading).toBeInTheDocument();
  });
});
