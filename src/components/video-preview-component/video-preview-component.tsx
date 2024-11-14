import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'video-preview-component',
  styleUrl: 'video-preview-component.css',
  shadow: true,
})
export class VideoPreviewComponent {
  @Prop()
  author: string;

  @Prop()
  stats: string;

  @Prop()
  videoTitle: string;

  @Prop()
  imgSrc: string;

  @Prop()
  channelImgSrc: string;

  @Prop()
  videoTime: string;

  render() {
    return (
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src={this.imgSrc} />
          <div class="video-time">{this.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src={this.channelImgSrc} />
          </div>

          <div class="video-info">
            <p class="video-title">{this.videoTitle}</p>

            <p class="video-stats">{this.stats}</p>

            <p class="video-author">{this.author}</p>
          </div>
        </div>
      </div>
    );
  }
}
