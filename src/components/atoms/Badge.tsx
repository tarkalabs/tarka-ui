import React from "react";
import { BadgeUnstyled, badgeUnstyledClasses, BadgeUnstyledProps} from "@mui/base";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";

injectTokens(["error/error", "error/on-error", "button/size-7"]);

interface RootProps {
  size?: "small" | "regular" | "large";
}

export type BadgeProps = RootProps & BadgeUnstyledProps;

const BadgeRoot = styled(BadgeUnstyled)`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
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
  

  &.small {
    width: 12px;
    height: 12px;
    color: transparent; 

    & >*{
      display:none;
    }
  }
  &.regular  {
    min-width: 12px;
    height: 12px;


      margin: 0 4px;

      /* button/size-8 */
      font-size: 12px;
      line-height: 14px;
      padding: 4px;
  }
  &.large{
    min-width: 17px;
    height: 17px;


      font-size: 14px;
      line-height: 18px;

      text-align: center;
      letter-spacing: 0.01em;

      padding: 7px;
    
  }
}
`;

const BadgeComponent: React.FC<BadgeProps> = function ({ size, ...props }: BadgeProps) {
    return (
        <BadgeRoot className={`TuiBadge ${size}`} {...props} />
    );
};

export default BadgeComponent;
