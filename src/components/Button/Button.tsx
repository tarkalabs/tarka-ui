import { ReactNode } from "react";
import { start } from "repl";
import { setUpTokens } from "../../utils/ThemeParse";
import './Button.css';
interface props {
    size: 'large' | 'regular' | 'small' | 'XS',
    type: 'primary' | 'secondary' | 'outlined' | 'ghost',
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    children: ReactNode
}

const Button: React.FC<props> = function ({ children = 'Label', size, type, startIcon, endIcon }) {

    setUpTokens(['surface/on-surface', 'surface/surface-hover', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
        'secondary/on-secondary', 'secondary/secondary-hover']);


    return (
        <button className={`button ${size} ${type} ${startIcon? 'start-icon' : ''} ${endIcon? 'end-icon': ''}`}>
            {startIcon && <div className="start-icon-container"> {startIcon} </div>}
            <div className="text-container"> {children}</div>
            {endIcon && <div className="end-icon-container"> {endIcon}</div>}
        </button>
    )
}

export default Button;
