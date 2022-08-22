import React from "react";
import { BadgeUnstyled, BadgeUnstyledProps } from "@mui/base";
import { styled } from "@mui/system";
import { setUpTokens } from "../utils/ThemeParse";

setUpTokens(["error/error", "error/on-error", "button/size-7"]);

interface props {
  size?: "small" | "regular" | "large";
}

export type BadgeProps = props & BadgeUnstyledProps;

const TarkaBadge = styled(BadgeUnstyled)`
  .BaseBadge-badge {
    background-color: var(--error-error);
  color: var(--error-on-error);
  border-radius: 100px;
  width: fit-content;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  }

  .small .BaseBadge-badge {
    min-width: 12px;
    min-height: 12px;
  }
  .regular .BaseBadge-badge {
    min-width: 16px;
    min-height: 16px;

    & > * {
      margin: 0 4px;

      /* button/size-8 */
      font-size: 12px;
      line-height: 14px;
    }
  }
  .large .BaseBadge-badge{
    min-width: 24px;
    min-height: 24px;

    & > * {
      font-size: 14px;
      line-height: 18px;

      text-align: center;
      letter-spacing: 0.01em;

      padding: 3px 7px;
    }
  }
`;

export default function Badge({ size, ...props }: BadgeProps) {
  return <TarkaBadge className={`badge ${size}`} {...props} />;
}
