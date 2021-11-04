import React, { FC } from 'react'
import SidebarData from '../../data/Sidebar'
import SidebarLink from './SidebarLink'

const SidebarMenu: FC = () => {
    return (
        <ul className="metismenu">
            {SidebarData.map((item, i) => {
                return <SidebarLink key={i} {...item} />
            })}
        </ul>
    )
}

export default SidebarMenu
