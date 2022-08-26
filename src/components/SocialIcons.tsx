import { styled } from "@mui/system";
import React, { ReactNode } from "react";
import { setUpTokens } from "../utils/ThemeParse";


setUpTokens(['surface/on-surface']);

export interface SocialIconProps {
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


const TarkaSocialIcons = styled('div')`
    .socials {
        background-color: transparent;
        color: var(--surface-on-surface);
        width: fit-content;
        border-radius: 100px;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 18px;

        padding: 18px;
    }

`

const SocialIcons: React.FC<SocialIconProps> = function ({ classes, icons }) {

    
    return (
        <TarkaSocialIcons className={`social-icons ${classes}`}>
            {icons && <div className="socials">
                {icons.map(icon => <img key={icon} src={require(`@icons/social/${icon}.svg`)} alt=""></img>)}
            </div>}
        </TarkaSocialIcons>
    )

}

export default SocialIcons;