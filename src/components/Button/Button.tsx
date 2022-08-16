import { ReactNode } from "react";
import { setUpTokens } from "../../utils/ThemeParse";
import './Button.css';
interface props{
    size: 'large'| 'regular' | 'small' | 'XS',
    type: 'primary' | 'secondary' | 'outlined' | 'ghost',
    startIcon?: string,
    endIcon?:string,
    children:ReactNode
}

const Button:React.FC<props> = function({children='Label', size, type,startIcon,endIcon}){

    setUpTokens(['surface/on-surface', 'surface/surface-hover', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
    'secondary/on-secondary', 'secondary/secondary-hover']);


    return (
        <button className={`button ${size} ${type}`}>
            {startIcon && <div className="start-icon"> <img src={startIcon} /></div>}
            <div className="text-container"> {children}</div>
           {endIcon && <div className="end-icon"> <img src={endIcon} /></div>}
        </button>
    )
}

export default Button;