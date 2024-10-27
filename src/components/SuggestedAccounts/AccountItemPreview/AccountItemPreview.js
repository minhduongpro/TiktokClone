import classNames from 'classnames/bind';
import styles from './AccountItemPreview.module.scss';
import Button from '˜/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '˜/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountItemPreview() {
    return (
        <PopperWrapper className={cx('wapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b0a65f90de4ad337a487a02002dd4f2b.jpeg?lk3s=30310797&nonce=6471&refresh_token=180772475f7ea44f6d78a4912cd43d5b&x-expires=1730016000&x-signature=CxnyYbdyp2TojKJEyCCzzrUXPDc%3D&shp=30310797&shcp=-"
                    alt="avatar"
                />
                <Button outline className={cx('follow-btn')}></Button>
            </div>
            <div className={cx('body')}>
                <strong className={cx('nickname')}>mynhaan</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                <p className={cx('name')}>Mỹ Nhân Thiên Hạ</p>
            </div>
            <div className={cx('analyts')}>
                <p>
                    <strong className={cx('number')}>221.3K </strong>
                    <span className={cx('lable')}>Followers</span>
                    <strong className={cx('number')}>2.5M </strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </div>
        </PopperWrapper>
    );
}

export default AccountItemPreview;
