import React, { ReactNode } from 'react';
import './FloatingActionButton.css';
import { ConstructionOutlined } from '@mui/icons-material';
import { setUpTokens } from '../../utils/ThemeParse'
import { ReactComponent as PlusIcon } from '@icons/plus.svg';

interface props {
  size: "large" | "regular",
  icon?: string
}

export const FloatingActionButton: React.FC<props> = ({ size, icon }) => {
  setUpTokens(['primary/primary','surface/on-surface','primary/primary-hover','primary/on-primary']);

  return (
    <button className={`floating-action-button ${size}`} type="button">
      {!icon && <PlusIcon/>}

    <img src={icon} />
    </button>
  );
};

export default FloatingActionButton;
