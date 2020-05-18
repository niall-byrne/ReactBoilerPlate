import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../app.js";
import PlaceHolder from "../../../components/placeholder/placeholder.component";

import Routes from "../../../configuration/routes";
import Strings from "../../../configuration/strings";

jest.mock("../../../components/placeholder/placeholder.component");
PlaceHolder.mockImplementation(() => <div>MockPlaceholder</div>);

describe("Check Routing", () => {
  let tests = [{ path: Routes.root }];
  let utils;
  let currentTest;

  beforeEach(() => {
    PlaceHolder.mockClear();
    currentTest = tests.shift();
    utils = render(
      <MemoryRouter initialEntries={[currentTest.path]}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  it("should render the root page correctly", () => {
    expect(utils.getByText(Strings.Suspense)).toBeTruthy();
    waitFor(() => expect(PlaceHolder).toBeCalledTimes(1));
  });
});
