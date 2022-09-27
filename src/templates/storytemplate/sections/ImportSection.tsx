import { styled } from "@mui/system";

interface ImportSectionProps {
    componentName: string;
    importPath: string;
}

const ImportSectionRoot = styled("section")`
    > div {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.25em;
        min-width: max-content;
        background-color: #1212e5;
        padding: 1.5em 1em;
        border: 1px solid var(--primary-on-primary);
        border-radius: 8px;

        span {
            font-family: monospace;
            width: max-content;
        }

        .default {
            color: var(--primary-on-primary);
        }
        .keyword {
            color: #a4cafa;
            font-weight: bold;
        }

        .string {
            color: #fff369;
        }

        .comment {
            color: #dddddf;
        }
    }
`;

export default function ImportSection({
    componentName,
    importPath,
}: ImportSectionProps) {
    return (
        <ImportSectionRoot className="import-section">
            <h2>Import</h2>
            <div>
                <span className="keyword">
                    {`import `}
                    <span className="default">{componentName} </span>
                    {`from `}
                    <span className="string">{`'${importPath}/${componentName}'`}</span>
                    <span className="default">;</span>
                </span>
                <span className="comment">// or</span>
                <span className="keyword">
                    {`import `}
                    <span className="default">{`{ ${componentName} }`} </span>
                    {`from `}
                    <span className="string">{`'${importPath}'`}</span>
                    <span className="default">;</span>
                </span>
            </div>
        </ImportSectionRoot>
    );
}
