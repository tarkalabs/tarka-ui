import "./story-template.scss";
import PropsSection from "./sections/PropsSection";
import ImportSection from "./sections/ImportSection";
interface StoryTemplateProps {
    componentName: string;
    path: string;
    typeDescs?: Array<object>;
    muiRef?: string;
}

export default function StoryTemplate({
    componentName,
    path,
    typeDescs,
    muiRef,
}: StoryTemplateProps) {
    return (
        <div className="story-template">
            <span className="logo">
                <h1>T</h1>
                <h1>_UI</h1>
            </span>
            <header>
                <h1>{`${componentName} API`}</h1>
                <p>{`API documentation for the Tarka UI React ${componentName} component. Learn about the available props and the CSS API.`}</p>
            </header>
            <ImportSection componentName={componentName} path={path} />
            {(muiRef || typeDescs) ? <PropsSection muiRef={muiRef} typeDescs={typeDescs} /> : null}
        </div>
    );
}
