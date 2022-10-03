import React, { useState } from 'react'
import { SocialIcon } from "react-social-icons"
type Props = {
    url: string;
}

function SocialIconComponent({ url }: Props) {
    const [hover, setHover] = useState("gray")
    return (
        <SocialIcon
            url={url}
            onMouseOver={() => setHover(old => old === "gray" ? "#F7AB0A" : "gray")}
            onMouseOut={() => setHover(old => old === "gray" ? "#F7AB0A" : "gray")}
            fgColor={hover}
            bgColor="transparent"

        />
    )
}

export default SocialIconComponent