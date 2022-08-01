import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "./Homepage";

describe("Homepage component", () => {
  it("should render MenuBar component", () => {
    render(<Homepage mode='home' />);
    const HomepageElement = screen.getByTestId("Homepage");
    const MenuBar = screen.getByTestId("MenuBar");

    expect(HomepageElement).toContainElement(MenuBar);
  });
});
