import React, { ReactElement } from "react";
import Markdown from "markdown-to-jsx";
import LinkTo from "@storybook/addon-links/react";
import "@assets/story-template.css";

interface props {
  name: string;
  children?: string[];
  ancestors?: string[];
  dependencies?: string[];
}

const StoryTemplate: React.FC<props> = ({
  name,
  children,
  ancestors,
  dependencies,
}: props) => {
  const story = require(`@data/stories/${name.toLowerCase()}.md`);
  const tarka: string[][] = [
    ["T", "A", "R", "K", "A"],
    ["_U", "I"],
  ];
  const sections = ["Children", "Ancestors", "Dependencies"];

  return (
    <div className="story-template">
      <div className="logo">
        {tarka.map(function (word) {
          return (
            <div>
              {word.map(function (letter) {
                return letter !== "_U" ? (
                  <span>{letter}</span>
                ) : (
                  <span className="underscore">{letter}</span>
                );
              })}
            </div>
          );
        })}
      </div>
      <Markdown children={story} />
      {[children, ancestors, dependencies].map((list, i) =>
        list ? (
          <>
            <h2>{sections[i]}</h2>
            <div className="links">
              {list.map((item) => (
                <LinkTo kind={`Components/${item}`}>{item}</LinkTo>
              ))}
            </div>
          </>
        ) : null
      )}
      <div className="footer">
        <h2>Legend</h2>
        <p>\**Requires default* (see MUI Reference if not explicitly stated)</p>
        <p>\*\**Datatype not finalized*</p>
      </div>
    </div>
  );
};

export default StoryTemplate;
