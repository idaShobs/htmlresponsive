import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-texts',
  styleUrl: 'my-texts.css',
  shadow: true,
})
export class MyTexts {
  render() {
    return (
      <div>
        <p class="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>

        <p class="video-stats">3.4M views &#183; 6 months ago</p>

        <p class="video-author">Marques Brownlee &#10003;</p>

        <p class="video-description">Talking tech and AI on the heels of Google I/O. Also a daily driver phone reveal from Google's CEO. Shoutout to Sundar!</p>

        <p class="apple-text">
          Shop early for the best selection of holiday favourites. <span class="shop-link">Shop now &#62;</span>
        </p>
      </div>
    );
  }
}
