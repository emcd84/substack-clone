import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TopPostPreview from "./TopPostPreview";

describe("TopPostPreview component", () => {
  const samplePost = {
    title: "Miro Heiskanen and aggressive/passive forechecks",
    subtitle:
      "Tampa Bay limits Miro Heiskanen's transition abilities bpy giving him more time to make a play, not less",
    author: "draftlookhockey",
    id: "1",
  };

  it("renders correct post title", () => {
    render(
      <BrowserRouter>
        <TopPostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[0].textContent).toMatch(
      samplePost.title
    );
  });

  it("renders correct post subtitle", () => {
    render(
      <BrowserRouter>
        <TopPostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[1].textContent).toMatch(
      samplePost.subtitle
    );
  });

  it("renders correct post author", () => {
    render(
      <BrowserRouter>
        <TopPostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[2].textContent).toMatch(
      samplePost.author
    );
  });
});
