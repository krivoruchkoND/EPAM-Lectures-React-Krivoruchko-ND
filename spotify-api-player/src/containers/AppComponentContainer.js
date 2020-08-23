import { connect } from 'react-redux';
import AppComponent from '../components/AppComponent/AppComponent';
import { setToken, setCurrentlyPlaying, setHaveData } from '../actions';

const mapStateToProps = state => ({
  token: state.token,
  item: state.item,
  is_playing: state.is_playing,
  progress_ms: state.progress_ms,
  no_data: state.no_data,
});

const mapDispatchToProps = {
  setToken,
  setCurrentlyPlaying,
  setHaveData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
