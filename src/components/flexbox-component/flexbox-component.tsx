import { Component, h } from '@stencil/core';

@Component({
  tag: 'flexbox-component',
  styleUrl: 'flexbox-component.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class FlexboxComponent {
  render() {
    <div class="flex-container1">
      <div class="div1">div1 text</div>
      <div class="div2">
        div2 <p>text</p>
      </div>
    </div>;
  }
}
