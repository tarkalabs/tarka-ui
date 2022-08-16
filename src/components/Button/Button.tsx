import { ReactNode } from "react";
import { start } from "repl";
import { setUpTokens } from "../../utils/ThemeParse";
import './Button.css';
interface props {
    size: 'large' | 'regular' | 'small' | 'XS',
    type: 'primary' | 'secondary' | 'outlined' | 'ghost',
    startIcon?: string,
    endIcon?: string,
    children: ReactNode
}

const Button: React.FC<props> = function ({ children = 'Label', size, type, startIcon, endIcon }) {

    setUpTokens(['surface/on-surface', 'surface/surface-hover', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
        'secondary/on-secondary', 'secondary/secondary-hover']);




    /* defaultEle along with the svgs here are TEMPORARY and for TESTING */
    /* in future, will filepath to icon instead */


    const smallPlus = <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" >
        <path d="M6 0.5C6 0.223858 5.77614 0 5.5 0C5.22386 0 5 0.223858 5 0.5V5H0.5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6H5V10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5V6H10.5C10.7761 6 11 5.77614 11 5.5C11 5.22386 10.7761 5 10.5 5H6V0.5Z" />
    </svg>

    const largePlus = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <path d="M8.75008 0C9.12978 0 9.44363 0.282013 9.49337 0.648078L9.50024 0.749848L9.50144 8H16.7545C17.1687 8 17.5045 8.33579 17.5045 8.75C17.5045 9.1297 17.2224 9.44349 16.8563 9.49315L16.7545 9.5H9.50144L9.50349 16.7491C9.50357 17.1633 9.16785 17.4993 8.75364 17.4993C8.37394 17.4993 8.06009 17.2173 8.01035 16.8512L8.00349 16.7494L8.00144 9.5H0.752441C0.338228 9.5 0.00244141 9.16421 0.00244141 8.75C0.00244141 8.3703 0.284595 8.05651 0.650671 8.00685L0.752441 8H8.00144L8.00024 0.750152C8.00015 0.335939 8.33587 0 8.75008 0Z"/>
    </svg>

    let defaultEle;
    if(size === 'large' || size === 'regular'){
        defaultEle = largePlus;
        console.log('large');
    }
    else{
        defaultEle = smallPlus;
    }

    return (
        <button className={`button ${size} ${type} ${startIcon? 'start-icon' : ''} ${endIcon? 'end-icon': ''}`}>
            {startIcon && <div className="start-icon-container"> {defaultEle} </div>}
            <div className="text-container"> {children}</div>
            {endIcon && <div className="end-icon-container"> {defaultEle}</div>}
        </button>
    )
}

export default Button;
