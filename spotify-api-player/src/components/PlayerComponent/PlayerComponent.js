import React, { Component } from 'react';
import './PlayerComponent.css';

class PlayerComponent extends Component {
  render() {
    const { item, is_playing, progress_ms } = this.props;
    return (
      <div className='App'>
        <div className='main-wrapper'>
          <div className='now-playing__img'>
            <img src={item.album.images[0].url} alt='albumImg'/>
          </div>
          <div className='now-playing__side'>
            <div className='now-playing__name'>{item.name}</div>
            <div className='now-playing__artist'>
              {item.artists[0].name}
            </div>
            <div className='now-playing__status'>
              {is_playing ? 'Playing' : 'Paused'}
            </div>
            <div className='progress'>
              <div
                className='progress__bar'
                style={{width: (progress_ms * 100 / item.duration_ms) + '%'}}
              />
            </div>
          </div>
          <div className='background' style={ {backgroundImage:`url(${item.album.images[0].url})`}} />{' '}
        </div>
      </div>
    );
  }
}
export default PlayerComponent;
