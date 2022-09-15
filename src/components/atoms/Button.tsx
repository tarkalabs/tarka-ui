import React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { ButtonUnstyledProps } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import { injectTokens } from "@/utils/ThemeParse";
import { buttonSize6, buttonSize7, buttonSize8 } from "@/assets/fonts/fonts";

interface RootProps {
    size: "large" | "regular" | "small" | "XS";
    colortype: "primary" | "secondary" | "outlined" | "ghost";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disableHover?: boolean;
}

export type ButtonProps = RootProps & ButtonUnstyledProps;

const ButtonRoot = styled(ButtonUnstyled)`
    padding: 0;
    cursor: pointer;
    border: none;
    border-radius: 3200px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    ${buttonSize6}
    gap: 8px;

    &.large {
        .text-container {
            margin: 14px 24px;
        }
        .start-icon-container {
            margin-left: 19px;
        }

        .end-icon-container {
            margin-right: 19px;
        }
    }

    &.regular {
        .start-icon-container {
            margin-left: 19px;
        }

        .end-icon-container {
            margin-right: 19px;
        }

        .text-container {
            margin: 10px 24px;
        }
    }

    &.small {
        ${buttonSize7}

        text-align: center;
        letter-spacing: 0.01em;
        gap: 4px;

        .start-icon-container {
            margin-left: 10px;
        }

        .end-icon-container {
            margin-right: 10px;
        }

        .text-container {
            margin: 7px 16px;
        }
    }

    &.XS {
        ${buttonSize8}
        text-align: center;
        letter-spacing: 0.01em;
        gap: 4px;

        .start-icon-container {
            margin-left: 6px;
        }

        .end-icon-container {
            margin-right: 6px;
        }

        .text-container {
            margin: 5px 8px;
        }
    }

    &.primary {
        background-color: var(--primary-primary);
        color: var(--primary-on-primary);
        fill: var(--primary-on-primary);

        :not(&.disableHover):hover {
            background-color: var(--primary-primary-hover);
            outline: 1.5px var(--surface-on-surface) solid;
            outline-offset: -1.5px;
        }
    }

    &.secondary {
        background-color: var(--secondary-secondary);
        color: var(--secondary-on-secondary);
        fill: var(--secondary-on-secondary);
        :not(&.disableHover):hover {
            background-color: var(--secondary-secondary-hover);
            outline: 1.5px var(--surface-on-surface) solid;
            outline-offset: -1.5px;
        }
    }

    &.outlined {
        background-color: transparent;
        color: var(--surface-on-surface);
        outline: 1.5px var(--surface-on-surface) solid;
        outline-offset: -1.5px;
        fill: var(--surface-on-surface);

        :not(&.disableHover):hover {
            background-color: var(--surface-surface-hover);
        }
    }

    &.ghost {
        background-color: transparent;
        color: var(--surface-on-surface);
        fill: var(--surface-on-surface);

        :not(&.disableHover):hover {
            background-color: var(--surface-surface-hover);
        }
    }

    &.start-icon {
        .text-container {
            margin-left: 0;
        }
    }

    &.end-icon {
        .text-container {
            margin-right: 0;
        }
    }

    .start-icon-container,
    .end-icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ButtonComponent: React.FC<ButtonProps> = function ({
    size = "regular",
    colortype = "primary",
    startIcon,
    endIcon,
    disableHover = false,
    ...props
}) {
    injectTokens([
        "surface/on-surface",
        "surface/surface-hover",
        "primary/primary",
        "primary/on-primary",
        "primary/primary-hover",
        "secondary/secondary",
        "secondary/on-secondary",
        "secondary/secondary-hover",
    ]);

    const classes = `${size} ${colortype} ${startIcon ? "start-icon" : ""} ${
        endIcon ? "end-icon" : ""
    } ${disableHover ? "disableHover" : ""}`;

    return (
        <ButtonRoot className={`tui-button ${classes}`} {...props}>
            {startIcon && (
                <div className="start-icon-container"> {startIcon} </div>
            )}
            <div className="text-container">{props.children}</div>
            {endIcon && <div className="end-icon-container"> {endIcon}</div>}
        </ButtonRoot>
    );
};

export default ButtonComponent;
