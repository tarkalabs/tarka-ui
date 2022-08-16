import React, { ReactNode } from 'react';
import './FloatingActionButton.css';
import { ConstructionOutlined } from '@mui/icons-material';
import { setUpTokens } from '../../utils/ThemeParse'

interface props {
  size: "large" | "regular",
  icon?: string
}

export const FloatingActionButton: React.FC<props> = ({ size, icon }) => {
  setUpTokens(['primary/primary','surface/on-surface','primary/primary-hover','primary/on-primary']);

  return (
    <button className={`FloatingActionButton ${size}`} type="button">
      {!icon && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11.5 10.0001V0.753906C11.5 0.339906 11.164 0.00390625 10.75 0.00390625C10.336 0.00390625 10 0.339906 10 0.753906V10.0001H0.753906C0.339906 10.0001 0.00390625 10.3361 0.00390625 10.7501C0.00390625 11.1641 0.339906 11.5001 0.753906 11.5001H10V20.7525C10 21.1665 10.336 21.5025 10.75 21.5025C11.164 21.5025 11.5 21.1665 11.5 20.7525V11.5001L20.7499 11.5032C21.1639 11.5032 21.4999 11.1672 21.4999 10.7532C21.4999 10.3392 21.1639 10.0032 20.7499 10.0032L11.5 10.0001Z" />
      </svg>}

    <img src={icon} />
    </button>
  );
};

export default FloatingActionButton;
