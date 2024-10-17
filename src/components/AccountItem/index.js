import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '˜/components/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/907e06ea831a589a489123e5de7ef637~c5_300x300.webp?lk3s=a5d48078&nonce=75105&refresh_token=bd5fd87ed4e6c8ead627616f43111a50&x-expires=1727010000&x-signature=ETF%2FKfUWvvY%2FSkrM3gPJlnth5dU%3D&shp=a5d48078&shcp=c1333099"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
