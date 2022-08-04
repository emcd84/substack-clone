import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PostPreview from "./PostPreview";

describe("TopPostPreview component", () => {
  it("renders correct post image", () => {
    render(<PostPreview />);
    const img = screen.getAllByRole("img")[0];
    expect(img).toHaveAttribute(
      "src",
      "https://substackcdn.com/image/fetch/w_128,c_scale,f_png,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Ficon%2FSubstackIcon%3Fheight%3D128%26fill%3D%2523DDDDDD%26stroke%3D%2523DDDDDD"
    );
    expect(img).toHaveAttribute("alt", "Default post image");
  });

  it("renders correct post title", () => {
    render(<PostPreview title='My Title' />);
    expect(screen.getAllByRole("heading")[0].textContent).toMatch("My Title");
  });

  it("renders correct post subtitle", () => {
    render(<PostPreview subtitle='My Subtitle' />);
    expect(screen.getAllByRole("heading")[1].textContent).toMatch(
      "My Subtitle"
    );
  });

  it("renders correct post author", () => {
    render(<PostPreview author='My Author' />);
    expect(screen.getAllByRole("heading")[2].textContent).toMatch("My Author");
  });

  it("renders correct post date", () => {
    render(<PostPreview date='2022-08-01' />);
    expect(screen.getAllByRole("heading")[3].textContent).toMatch("2022-08-01");
  });
});
