import propTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends}) => {
    return (
        <ul className={css.friends}>
            {friends.map(el => (
                <FriendListItem key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    firends: propTypes.arrayOf(propTypes.exact({
        id: propTypes.number.isRequired,
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
    }))
}