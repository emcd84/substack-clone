import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostPreview from "./PostPreview";

describe("TopPostPreview component", () => {
  const samplePost = {
    title: "Miro Heiskanen and aggressive/passive forechecks",
    subtitle:
      "Tampa Bay limits Miro Heiskanen's transition abilities bpy giving him more time to make a play, not less",
    author: "draftlookhockey",
    publishDate: "08/01/2022",
    id: "1",
  };

  it("renders correct post title", () => {
    render(
      <BrowserRouter>
        <PostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[0].textContent).toMatch(
      samplePost.title
    );
  });

  it("renders correct post subtitle", () => {
    render(
      <BrowserRouter>
        <PostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[1].textContent).toMatch(
      samplePost.subtitle
    );
  });

  it("renders correct post author", () => {
    render(
      <BrowserRouter>
        <PostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[2].textContent).toMatch(
      samplePost.author.toUpperCase()
    );
  });

  it("renders correct post date", () => {
    render(
      <BrowserRouter>
        <PostPreview post={samplePost} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading")[3].textContent).toMatch(
      samplePost.publishDate
    );
  });
});
