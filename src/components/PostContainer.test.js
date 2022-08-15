import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostContainer from "./PostContainer";

describe("PostContainer component", () => {
  it("renders 'New' heading", () => {
    render(<PostContainer posts={[]} />);
    expect(screen.getByRole("heading").textContent).toMatch("New");
  });

  const postArray = [
    {
      title: "Miro Heiskanen and aggressive/passive forechecks",
      subtitle:
        "Tampa Bay limits Miro Heiskanen's transition abilities bpy giving him more time to make a play, not less",
      author: "draftlookhockey",
      date: "2022-08-01",
    },
    {
      title: "2022 NHL Draft Notebook: Volume 1",
      subtitle:
        "Thoughts, clips, and areas to track for a variety of prospects",
      author: "draftlookhockey",
      date: "2022-01-10",
    },
  ];
  postArray.forEach((post) => {
    it(`renders post with title ${post.title}`, () => {
      render(
        <BrowserRouter>
          <PostContainer posts={postArray} />
        </BrowserRouter>
      );
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });
});
