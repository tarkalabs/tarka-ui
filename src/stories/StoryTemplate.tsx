import React from "react";
import "@assets/story-template.css";

interface props {
  markdown?: string;
}

const StoryTemplate: React.FC<props> = ({ markdown }: props) => {
  return (
    <div className="story-template">
      <div className="logo">
        <span>TARKA</span>
        <span>_UI</span>
      </div>
    </div>
  );
};

export default StoryTemplate;
