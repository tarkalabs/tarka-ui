import React from 'react';
import './DocPage.css';
import { setUpTokens } from '../../utils/ThemeParse'
import { ReactComponent as PlusIcon } from '@icons/plus.svg';

interface props {
  name: string,
  mdx: string
}

const DocPage: React.FC<props> = ({ name, mdx }) => {
  return (
    <div className={`doc-page ${name}`}>
    </div>
  );
};

export default DocPage;
