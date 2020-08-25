import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent/LoginComponent';

const mapStateToProps = state => ({
  isShown: state.modal.loginModalShown,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);