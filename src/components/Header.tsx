import React from "react"
import './Header.scss';

export type IHeaderProps = {
    /** Title for the display */
    title: string;

    /** Subtitle for the heading component */
    subTitle?: string | null;
}


const Header = ({ title, subTitle = null }: IHeaderProps) => {
    return (
        <header className="Header">
            <div className="Title">{title}</div>
            {subTitle && <div className="SubTitle">{subTitle}</div> }
        </header>
    )
}


export default Header;