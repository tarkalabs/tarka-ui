import React, { ReactNode } from "react";
import './SocialIcons.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";

interface props {
    children: ReactNode,
    classes: object,
    icons: (
        'applemusic' |
        'clubhouse' |
        'facebook' |
        'instagram' |
        'linkedin' |
        'soundcloud' |
        'spotify' |
        'tiktok' |
        'twitch' |
        'twitter' |
        'youtube'
    )[]
}
const SocialIcons: React.FC<props> = function ({ classes, icons }) {
    setUpTokens(['surface/on-surface']);
    
    return (
        <div className={`social-icons ${classes}`}>
            {icons && <div className="socials">
                {icons.map(icon => <img key={icon} src={require(`@icons/social/${icon}.svg`)} alt=""></img>)}
            </div>}
        </div>
    )

}

export default SocialIcons;
