import React, { ReactElement } from "react";
import Markdown from "markdown-to-jsx";
import TarkaLogo from "./TarkaLogo";
import LinkTo from "@storybook/addon-links/react";
import "@assets/story-template.scss"; 

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
  console.log(`@data/stories/${name.toLowerCase()}.md`);
  const story = require(`@data/stories/${name.toLowerCase()}.md`);

  return (
    <div className="story-template">
      <TarkaLogo/>
      <Markdown children={story} />
      <div className="footer">
        <h2>Legend</h2>
        <p>\**Requires default* (see MUI Reference if not explicitly stated)</p>
        <p>\*\**Datatype not finalized*</p>
      </div>
    </div>
  );
};

export default StoryTemplate;
