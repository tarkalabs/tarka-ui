import { Type } from "typescript";
import './story-template.scss'; 
import PropsSection from "./components/PropsSection";
import ImportSection from "./components/ImportSection";

interface StoryTemplateProps {
    type: Type;
    typeDescs: Array<object>;
}

export default function StoryTemplate({ type, typeDescs }: StoryTemplateProps) {
    return (
        <div className="story-template">
            <ImportSection/>
            <PropsSection type={type} typeDescs={typeDescs}/>
        </div>
    );
}
