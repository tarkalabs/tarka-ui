import "./story-template.scss";
import PropsSection from "./sections/PropsSection";
import ImportSection from "./sections/ImportSection";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";
interface DocsTemplateProps {
    componentName: string;
    importPath: string;
    typeDescs?: Array<object>;
    muiRef?: string;
}

const DocsTemplateRoot = styled("div")`
    display: flex;
    flex-flow: column nowrap;
    row-gap: 50px;
    color: var(--primary-on-primary);

    * {
        font-family: "Inter";
    }

    .logo {
        color: var(--primary-on-primary);
        width: min-content;
        text-shadow: 0 0 4px var(--primary-on-primary);
        margin-bottom: 75px;

        h1 {
            font-size: 6em;
            font-family: "Logo";
            line-height: 50%;
            letter-spacing: -0.05em;
        }
    }

    h1 {
        font-size: 3em;
        margin: 0;
    }

    p {
        margin: 1em 0 2em 0;
    }

    h2 {
        font-size: 2em;
        margin: 0 0 0.5em 0;
    }
`;

export default function DocsTemplate({
    componentName,
    importPath,
    typeDescs,
    muiRef,
}: DocsTemplateProps) {

    injectTokens([
        "primary/primary",
        "primary/primary-hover",
        "primary/on-primary",
    ]);

    return (
        <DocsTemplateRoot className='story-template'>
            <span className="logo">
                <h1>T</h1>
                <h1>_UI</h1>
            </span>
            <header>
                <h1>{`${componentName} API`}</h1>
                <p>{`API documentation for the Tarka UI React ${componentName} component. Learn about the available props and the CSS API.`}</p>
            </header>
            <ImportSection
                componentName={componentName}
                importPath={importPath}
            />
            {muiRef || typeDescs ? (
                <PropsSection muiRef={muiRef} typeDescs={typeDescs} />
            ) : null}
        </DocsTemplateRoot>
    );
}
