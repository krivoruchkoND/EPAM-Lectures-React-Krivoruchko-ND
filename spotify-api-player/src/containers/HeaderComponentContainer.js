import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import { setUserProfileModalShown } from '../actions'

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  setUserProfileModalShown,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
