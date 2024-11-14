import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-buttons',
  styleUrl: 'my-buttons.css',
  shadow: true,
})
export class MyButtons {
  render() {
    return (
      <div class="container">
        <button class="subscribe-button">SUBSCRIBE</button>
        <buton class="join-button">JOIN</buton>
        <button class="tweet-button">Tweet</button>
      </div>
    );
  }
}
