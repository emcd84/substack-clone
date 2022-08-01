import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Aboutpage from "./Aboutpage";

describe("Aboutpage component", () => {
  it("should render MenuBar component", () => {
    render(<Aboutpage mode='about' />);
    const AboutpageElement = screen.getByTestId("Aboutpage");
    const MenuBar = screen.getByTestId("MenuBar");

    expect(AboutpageElement).toContainElement(MenuBar);
  });
});
