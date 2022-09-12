import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { ButtonUnstyledProps as MUIProps } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { setUpTokens } from '@/utils/ThemeParse';

setUpTokens(['primary/primary','surface/on-surface','primary/primary-hover','primary/on-primary']);

interface TarkaProps {
    size: "large" | "regular",
    icon?: ReactNode
  }
  export type FloatingActionButtonProps = TarkaProps & MUIProps;

  const TarkaFloatingActionButton = styled(ButtonUnstyled)`

    background-color: var(--primary-primary);
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 64px;
    box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.14), 0px 5px 24px -4px rgba(0, 0, 0, 0.16);

    &:hover {
        outline: var(--surface-on-surface) 1.5px solid;
        outline-offset: -1.5px;
        cursor: pointer;
    }

    &.regular {
        height: 56px;
        width: 56px;
    }

    &.large {
        height: 96px;
        width: 96px;
    }

    path {
        fill: var(--primary-on-primary);
    
}
  `
  export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ size, icon,...props }) => {
  
    return (
      <TarkaFloatingActionButton className={`${size}`}>  
         {icon}
      </TarkaFloatingActionButton>
    );
  };
  
  export default FloatingActionButton;