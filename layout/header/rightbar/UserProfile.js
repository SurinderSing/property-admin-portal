import Link from 'next/link'
import React from 'react'
import { FileText, LogIn, User } from 'react-feather'

const UserProfile = () => {
    return (
        <li className="profile-avatar onhover-dropdown">
            <div>
                <img src="/assets/images/avatar/3.jpg" className="img-fluid" alt='' />
            </div>
            <ul className="profile-dropdown onhover-show-div">
                <li>
                    <Link href='/manage-users/profile'>
                        <span>Account </span>
                        <User />
                    </Link>
                </li>
                <li>
                    <Link href='/authentication/login'>
                        <span>Log in</span>
                        <LogIn />
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default UserProfile