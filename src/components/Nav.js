import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Nav({categories}) {
    // FYI: 遷移先のパスの生成
    // カテゴリIDが1の場合は /all
    // それ以外は /category/{カテゴリID}
    const to = category => (
        category.id === '1'
            ? '/all'
            : `category/${category.id}`
    );

    return (
        <ul>
            {categories.map(category => (
                <li key={`nav-item-${category.id}`}>
                    <Link to={to(category)}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
Nav.propTypes = {
    // state.shopping.categories の構造
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
};