import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
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
    );
}

export default AccountItem;
