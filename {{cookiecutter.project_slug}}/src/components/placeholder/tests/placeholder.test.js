import React from "react";
import { render, cleanup } from "@testing-library/react";

import PlaceHolder from "../placeholder.component";

import Strings from "../../../configuration/strings";

describe("Setup Environment", () => {
  let tests = [1];
  let utils;
  let currentTest;

  beforeEach(() => {
    currentTest = tests.shift();
    utils = render(<PlaceHolder />);
  });

  afterEach(cleanup);

  it("should render with the correct message", () => {
    expect(currentTest).toBe(1);
    expect(utils.getByText(Strings.PlaceHolderMessage)).toBeTruthy();
  });
});
