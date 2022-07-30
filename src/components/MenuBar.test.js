import React from "react";
import { render, screen } from "@testing-library/react";
import MenuBar from "./MenuBar";

describe("MenuBar component", () => {
  it("renders heading with newsletter name", () => {
    render(<MenuBar />);
    expect(screen.getByRole("heading").textContent).toMatch("My Newsletter");
  });

  it("renders two buttons", () => {
    render(<MenuBar />);
    expect(screen.getAllByRole("button").length).toBe(2);
  });

  it("renders subscribe button first", () => {
    render(<MenuBar />);
    expect(screen.getAllByRole("button")[0].textContent).toMatch("Subscribe");
  });

  it("renders sign in button second", () => {
    render(<MenuBar />);
    expect(screen.getAllByRole("button")[1].textContent).toMatch("Sign In");
  });
});
