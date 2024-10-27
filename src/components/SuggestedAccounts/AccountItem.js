import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountItemPreview from './AccountItemPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={AccountItemPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b0a65f90de4ad337a487a02002dd4f2b.jpeg?lk3s=30310797&nonce=6471&refresh_token=180772475f7ea44f6d78a4912cd43d5b&x-expires=1730016000&x-signature=CxnyYbdyp2TojKJEyCCzzrUXPDc%3D&shp=30310797&shcp=-"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <strong className={cx('nick-name')}>mynhan</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        <p className={cx('name')}>Mỹ Nhân Thiên Hạ</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
