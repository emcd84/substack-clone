import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Archivepage from "./Archivepage";

describe("Archivepage component", () => {
  it("should render MenuBar component", () => {
    render(<Archivepage mode='archive' />);
    const ArchivepageElement = screen.getByTestId("Archivepage");
    const MenuBar = screen.getByTestId("MenuBar");

    expect(ArchivepageElement).toContainElement(MenuBar);
  });
});
