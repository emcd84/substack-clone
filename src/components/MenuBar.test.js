import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuBar from "./MenuBar";

describe("MenuBar component", () => {
  it("renders heading with newsletter name first ", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch("My Newsletter");
  });

  it("renders two buttons", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("button").length).toBe(2);
  });

  it("renders subscribe button first", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("button")[0].textContent).toMatch("Subscribe");
  });

  it("renders sign in button second", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("button")[1].textContent).toMatch("Sign In");
  });

  it("renders home link first", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("link")[0].textContent).toMatch("Home");
  });

  it("renders archive link second", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("link")[1].textContent).toMatch("Archive");
  });

  it("renders about link fourth", () => {
    render(
      <BrowserRouter>
        <MenuBar />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("link")[2].textContent).toMatch("About");
  });
});
