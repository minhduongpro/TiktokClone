import config from '˜/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '˜/components/Icons';

import SuggestedAccounts from '˜/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts lable={'Suggested accounts'} />
            <SuggestedAccounts lable={'Following accounts'} />
        </aside>
    );
}

export default Sidebar;
