import {connect} from 'react-redux';
import MoveList from '../../components/MoveList';

const mapStateToProps = (store) => ({
  history: store.history
})

const mapDispatchToProps = (dispatch) => {
  return {    
  }
}

const MoveListContainer = connect(mapStateToProps, null)(MoveList);

export default MoveListContainer;