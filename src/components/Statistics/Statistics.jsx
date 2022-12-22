import propTypes from 'prop-types';
import css from './Statistics.module.css';
import { setBg } from 'components/Adds/RandomColor';

export const Statistics = ({ title, stats }) =>{
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(el => (
                    <li className={css.item} key={el.id} style={{ backgroundColor: setBg(), color: "#fff"}} >
                            <span>{ el.label}</span>
                            <span>{ el.percentage}%</span>
                    </li>) 
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    })
    ), 
}