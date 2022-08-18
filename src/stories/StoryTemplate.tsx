import React from "react";
import Markdown from "markdown-to-jsx";
import "@assets/story-template.css";

interface props {
  name: string;
}

const StoryTemplate: React.FC<props> = ({ name }: props) => {
  const story = require(`@data/stories/${name}.md`);
  const tarka: string[][] = [
    ["T", "A", "R", "K", "A"],
    ["_U", "I"]
  ];

  return (
    <div className="story-template">
      <div className="logo">
        {tarka.map(function (word){
          return (
            <div>
              {word.map(function (letter){
                return (
                  letter !== '_U' ? <span>{letter}</span> : <span className="underscore">{letter}</span>
                )
              })}
            </div>
          )
        })}
      </div>
      <Markdown children={story} />
    </div>
  );
};

export default StoryTemplate;
