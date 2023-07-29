import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ChevronsRight } from 'react-feather';
import { SidebarMenuItem } from '../../data/sidebarMenu';

const SidebarMenu = () => {
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState();
    const [chiledMenu, setChiledMenu] = useState();

    useEffect(() => {
        if (router.asPath) {
            SidebarMenuItem.forEach((item) => {
                if (item.children) {
                    item.children.forEach((child) => {
                        if (child.path === router.asPath) { setChiledMenu(child.title); setActiveMenu(item.title); return true }
                        else return false;
                    })
                } else {
                    if (item.path === router.asPath) { setActiveMenu(item.title); return true }
                    else return false;
                }
            })
        }
    }, [router])

    return (
        <ul className="sidebar-menu custom-scrollbar">
            {
                SidebarMenuItem && SidebarMenuItem.map((item, i) => {
                    return (
                        <li key={i} className="sidebar-item">
                            {item.type === 'link' && <Link href={`${item.path}`} className={`sidebar-link only-link ${activeMenu === item.title ? 'active' : ''}`} onClick={() => { setActiveMenu(prev => prev !== item.title && item.title) }}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>}
                            {
                                item.type === 'sub' &&
                                <a href="#" className={`sidebar-link ${activeMenu === item.title ? 'active' : ''}`} onClick={() => { setActiveMenu(prev => prev !== item.title && item.title) }}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    <div className="according-menu"><i className="fa fa-angle-right" /></div>
                                </a>
                            }
                            {
                                Array.isArray(item.children) &&
                                <ul className={`nav-submenu menu-content ${item.title === activeMenu ? 'd-block' : 'd-none'}`}>
                                    {item.children.map((child, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={`${child.path}`} className={`${child.title === chiledMenu ? 'active' : ''}`} onClick={() => { setChiledMenu(child.title) }}>
                                                    <ChevronsRight />
                                                    {child.title}
                                                    {
                                                        child.badge && <span className="label label-shadow ms-1">New</span>
                                                    }
                                                </Link>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            }
                        </li>
                    )
                })
            }
            <li>
                <div className="upgrade-box">
                    <img src="/assets/images/svg/1.svg" className="img-fluid" alt='' />
                    <h6>Need Help</h6>
                    <Link href='https://pixelstrap.freshdesk.com/support/home' target='_blank' className="p-0 m-0">
                        <span className="d-block">{'Raise ticket at "support@pixelstrap.com"'}</span>
                    </Link>
                    <Link href='https://themeforest.net/user/pixelstrap/portfolio' target='_blank' className="btn btn-pill btn-gradient btn-sm mt-2 fw-bold">
                        Buy Now
                    </Link>
                </div>
            </li>
        </ul>
    )
}

export default SidebarMenu