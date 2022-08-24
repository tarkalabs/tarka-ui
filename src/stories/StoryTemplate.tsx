import { Type } from "typescript";
import "./story-template.scss";
import PropsSection from "./components/PropsSection";
import ImportSection from "./components/ImportSection";
interface StoryTemplateProps {
    type: Type;
    typeDescs: Array<object>;
}

export default function StoryTemplate({ type, typeDescs }: StoryTemplateProps) {
    return (
        <div className="story-template">
            <ImportSection componentName='Badge' path='@tarkaui/example'/>
            <PropsSection type={type} typeDescs={typeDescs} />
        </div>
    );
}
