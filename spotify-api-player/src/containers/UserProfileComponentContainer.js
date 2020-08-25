import { connect } from 'react-redux';
import UserProfileComponent from '../components/UserProfileComponent/UserProfileComponent';
import { setUserProfileModalShown, setUserProfile } from '../actions'

const mapStateToProps = state => ({
  isShown: state.modal.userProfileModalShown,
  user: state.userProfile,
  token: state.token,
});

const mapDispatchToProps = {
  setUserProfileModalShown,
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileComponent);
