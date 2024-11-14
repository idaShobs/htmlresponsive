import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'video-preview-component-inline',
  styleUrl: 'video-preview-component-inline.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class VideoPreviewComponentInline {
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

  render() {
    return (
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src={this.imgSrc} />
        </div>
        <div>
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
