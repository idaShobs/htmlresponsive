import { Component, h } from '@stencil/core';
import { CONSTANTS } from '../../assets/globals';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
  assetsDirs: ['../../assets'],
})
export class HeaderComponent {
  render() {
    <div>
      <div class="left-section">
        <img class="hamburger-menu" src={CONSTANTS.hamburger} />
        <img class="youtube-logo" src={CONSTANTS.youtubeLogo} />
      </div>
      <div class="middle-section">
        <input class="search-bar" type="text" placeholder="Search"></input>
        <button class="search-btn">
          <img class="search-icon" src={CONSTANTS.search} />
          <div class="tooltip">Search</div>
        </button>
        <button class="voice-btn">
          <img class="voice-icon" src={CONSTANTS.microphone} />
          <div class="tooltip">Search with your voice</div>
        </button>
      </div>
      <div class="right-section">
        <div class="upload-icon-container">
          <img class="upload-icon" src={CONSTANTS.upload} />
          <div class="tooltip">Create</div>
        </div>

        <div class="youtube-apps-icon-container">
          <img class="youtube-apps-icon" src={CONSTANTS.youtubeApps} />
        </div>

        <div class="notifications-icon-container">
          <img class="notifications-icon" src={CONSTANTS.notifications} />
          <div class="notifications-count">3</div>
        </div>

        <img class="main-channel-icon" src={CONSTANTS.mainChannel} />
      </div>
    </div>;
  }
}
