import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem.js';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable }) {
    return (
        <div className={cx('wapper')}>
            <p className={cx('lable')}>{lable}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
