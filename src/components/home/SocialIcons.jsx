import Links from "../SocialLinks"
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function SocialIcons(){
    return(
        <>
            <div className="social_icons">
                <Tooltip title="LinkedIn account" placement="top" arrow slots={{transition: Zoom }}>
                    <a href={Links.linkedInUrl} target="_blank"><FaLinkedin/></a>
                </Tooltip>
                <Tooltip title="Github account" placement="top" arrow slots={{transition: Zoom }}>
                    <a href={Links.gitHubUrl} target="_blank"><FaGithub/></a>
                </Tooltip>
                <Tooltip title="Facebook account" placement="top" arrow slots={{transition: Zoom }}>
                    <a href={Links.faceBookUrl} target="_blank"><FaFacebook/></a>
                </Tooltip>
            </div>
        </>
    )
}