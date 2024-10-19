import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from '˜/assets/images';
import style from './Header.module.scss';
import Button from '˜/components/Button';
import Menu from '˜/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '˜/components/Icons';
import Image from '˜/components/Images';
import Search from '../Search';
import configRoutes from '˜/config/routes';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and healp', to: '/feedback' },

    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@linh' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coins' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/settings' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/#', sparate: true },
];

function Header() {
    const currentUser = true;

    // Handle Item
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle item
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={configRoutes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload Video" placement="bottom" offset={[0, 8]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={200} content="Inbox" placeholder="bottom" offset={[0, 8]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0e6ef38b684740efd00397f93ff09544.jpeg?lk3s=a5d48078&nonce=9668&refresh_token=e33d9921c597f5690790af24a6156a86&x-expires=1728720000&x-signature=oR5At%2BlMEt12sYcXDE0xPD9WnIY%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Nguyen Van A"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
