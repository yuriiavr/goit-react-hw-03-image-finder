import propTypes from 'prop-types';

import css from './Profile.module.css';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profile}>

            <div className={css.description}>
                <img className={css.avatar} key={username} src={avatar} alt="User avatar" />
                <p className={css.username}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.stat}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.stat}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.stat}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
            </ul>

        </div>
    )
}

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
  
    stats: propTypes.exact({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    })
}