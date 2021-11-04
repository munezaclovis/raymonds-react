import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

type subMenuLinkType = {
    label: string;
    to: string;
}

type Props = {
    id?: string;
    label: string;
    icon?: string;
    to?: string;
    content?: subMenuLinkType[];
}

const SidebarLink: FC<Props> = ({ id, label, icon, to, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (content !== undefined) {
            setIsOpen(!isOpen);
        } else {
            to && history.push(to)
        }
    }

    if (id) {
        return <li className="header">{label}</li>
    } else {
        return (
            <li>
                <NavLink to={to ?? `#`} onClick={onClick} className={`${content ? "has-arrow" : ""}`}>
                    <i className={icon}></i>
                    <span>{label}</span>
                </NavLink>
                {content &&
                    <ul className={`collapse${isOpen ? ' in' : ''}`}>
                        <li>
                            {content.map((subItem, i) => {
                                return (
                                    <NavLink key={i} to={subItem.to}>
                                        <span>{subItem.label}</span>
                                    </NavLink>
                                )
                            })}
                        </li>
                    </ul>
                }
            </li>
        );
    }
}

export default SidebarLink
