import React, { ReactNode} from "react";
import './SocialIcons.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";

interface props {
    icons: (
        'applemusic'| 
        'clubhouse' | 
        'facebook'  | 
        'instagram' |
        'linkedin'  | 
        'soundcloud'| 
        'spotify'   | 
        'tiktok'    |
        'twitch'    | 
        'twitter'   | 
        'youtube'
    )[]
}
const SocialIcons: React.FC<props> = function ({ icons }) {
  setUpTokens(['surface/on-surface']);

  return (
    <div className="SocialIcons">
        <div className="socials">
            {icons.map(icon => <img src={require(`@icons/social/${icon}.svg`)} alt=""></img>)}
        </div>
    </div>
  )
}

export default SocialIcons;
