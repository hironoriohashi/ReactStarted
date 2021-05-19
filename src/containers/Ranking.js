import {connect} from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

const mapStateToProps = (state, ownProps) => ({
    categoryId: ownProps.categoryId,
    category: state.Ranking.category,
    ranking: state.Ranking.ranking,
    error: state.Ranking.error,
});

const mapDispatchToProps = dispatch => ({
    // onMount と onUpdate を fetchRanking を接続
    onMount (categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    },
    onUpdate (categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
