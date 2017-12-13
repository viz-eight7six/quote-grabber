import Quote from './quote';
import { connect } from 'react-redux';
import { getQuote } from '../actions/project_actions';

const mapStateToProps = state => ({
  quote: state.quote,
  state: state
});

const mapDispatchToProps = dispatch => ({
  getQuote: () => dispatch(getQuote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
