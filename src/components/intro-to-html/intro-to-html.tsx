import { Component, h } from '@stencil/core';
import { CONSTANTS } from '../../assets/globals';

@Component({
  tag: 'intro-to-html',
  styleUrl: 'intro-to-html.css',
  shadow: true,
  assetsDirs: ['../../assets'],
})
export class IntroToHtml {
  render() {
    return (
      <div>
        <header class="header-container">
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
              <div class="tooltip">Youtube Apps</div>
            </div>

            <div class="notifications-icon-container">
              <img class="notifications-icon" src={CONSTANTS.notifications} />
              <div class="notifications-count">3</div>
              <div class="tooltip">Notifications</div>
            </div>

            <img class="main-channel-icon" src={CONSTANTS.mainChannel} />
          </div>
        </header>
        <nav class="side-bar">
          <side-bar-component menuItemIcon={CONSTANTS.home} menuItemName="Home"></side-bar-component>
          <side-bar-component menuItemIcon={CONSTANTS.explore} menuItemName="Explore"></side-bar-component>
          <side-bar-component menuItemIcon={CONSTANTS.subscriptions} menuItemName="Subscriptions"></side-bar-component>
          <side-bar-component menuItemIcon={CONSTANTS.originals} menuItemName="Originals"></side-bar-component>
          <side-bar-component menuItemIcon={CONSTANTS.youtubeMusic} menuItemName="Youtube Music"></side-bar-component>
          <side-bar-component menuItemIcon={CONSTANTS.library} menuItemName="Library"></side-bar-component>
        </nav>

        <main>
          <section class="videos-grid">
            <video-preview-component
              author="Marques Brownlee &#10003;"
              videoTitle="Talking Tech and AI with Google CEO Sundar Pichai!"
              stats="3.4M views &#183; 6 months ago"
              imgSrc={CONSTANTS.videoSrc1}
              channelImgSrc={CONSTANTS.chanelImg1}
              videoTime="14:20"
            ></video-preview-component>
            <video-preview-component
              author="Markiplier"
              videoTitle="Try Not To Laugh Challenge #9"
              stats="19M views &#183; 4 years ago"
              imgSrc={CONSTANTS.videoSrc2}
              channelImgSrc={CONSTANTS.chanelImg2}
              videoTime="8:22"
            ></video-preview-component>
            <video-preview-component
              author="Marques Brownlee &#10003;"
              videoTitle="Talking Tech and AI with Google CEO Sundar Pichai!"
              stats="3.4M views &#183; 6 months ago"
              imgSrc={CONSTANTS.videoSrc3}
              channelImgSrc={CONSTANTS.chanelImg3}
              videoTime="9:13"
            ></video-preview-component>
            <video-preview-component
              author="Markiplier"
              videoTitle="Try Not To Laugh Challenge #9"
              stats="19M views &#183; 4 years ago"
              imgSrc={CONSTANTS.videoSrc4}
              channelImgSrc={CONSTANTS.chanelImg4}
              videoTime="22:09"
            ></video-preview-component>
            <video-preview-component
              author="Marques Brownlee &#10003;"
              videoTitle="Talking Tech and AI with Google CEO Sundar Pichai!"
              stats="3.4M views &#183; 6 months ago"
              imgSrc={CONSTANTS.videoSrc5}
              channelImgSrc={CONSTANTS.chanelImg5}
              videoTime="11:17"
            ></video-preview-component>
            <video-preview-component
              author="Markiplier"
              videoTitle="Try Not To Laugh Challenge #9"
              stats="19M views &#183; 4 years ago"
              imgSrc={CONSTANTS.videoSrc6}
              channelImgSrc={CONSTANTS.chanelImg6}
              videoTime="19:59"
            ></video-preview-component>
            <video-preview-component
              author="Markiplier"
              videoTitle="Try Not To Laugh Challenge #9"
              stats="19M views &#183; 4 years ago"
              imgSrc={CONSTANTS.videoSrc4}
              channelImgSrc={CONSTANTS.chanelImg4}
              videoTime="10:13"
            ></video-preview-component>
            <video-preview-component
              author="Marques Brownlee &#10003;"
              videoTitle="Talking Tech and AI with Google CEO Sundar Pichai!"
              stats="3.4M views &#183; 6 months ago"
              imgSrc={CONSTANTS.videoSrc5}
              channelImgSrc={CONSTANTS.chanelImg5}
              videoTime="7:12"
            ></video-preview-component>
            <video-preview-component
              author="Markiplier"
              videoTitle="Try Not To Laugh Challenge #9"
              stats="19M views &#183; 4 years ago"
              imgSrc={CONSTANTS.videoSrc6}
              channelImgSrc={CONSTANTS.chanelImg6}
              videoTime="13:17"
            ></video-preview-component>
          </section>
        </main>
      </div>
    );
  }
}
