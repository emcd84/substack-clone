import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Aboutpage from "./Aboutpage";

describe("Aboutpage component", () => {
  it("renders About heading", () => {
    render(<Aboutpage />);
    expect(screen.getAllByRole("heading")[0].textContent).toEqual("About");
  });

  it("renders 'What is this' heading", () => {
    render(<Aboutpage />);
    expect(screen.getAllByRole("heading")[1].textContent).toEqual(
      "What Is This?"
    );
  });
});
