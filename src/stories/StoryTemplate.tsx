import { Type } from "typescript";
import './story-template.scss'; 
import PropsTable from "./components/PropsTable";

interface StoryTemplateProps {
    type: Type;
    typeDescs: Array<object>;
}

export default function StoryTemplate({ type, typeDescs }: StoryTemplateProps) {
    return (
        <div className="story-template">
            <PropsTable type={type} typeDescs={typeDescs} />
        </div>
    );
}
