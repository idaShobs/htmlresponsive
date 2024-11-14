import { Component, h } from '@stencil/core';

@Component({
  tag: 'grid-component',
  styleUrl: 'grid-component.css',
})
export class GridComponent {
  render() {
    return (
      <div>
        <div class="container">
          <div class="column1">20percent of vw</div>
          <div class="column2">
            div2<p>80 percent of vw</p>
          </div>
        </div>
        <div class="container2">
          <div class="column1">div1</div>
          <div class="column2">1fr: take up remaining space</div>
        </div>

        <div class="container3">
          <div class="column1">div1</div>
          <div class="column2">1fr: take up remaining space</div>
          <div class="column1">2fr: take up remaining space but twice as wide as 1fr column</div>
        </div>
        <div class="container4">
          <div class="column1">div1</div>
          <div class="column2">1fr: take up remaining space</div>
          <div class="column1">2fr: take up remaining space but twice as wide as 1fr column</div>
        </div>
      </div>
    );
  }
}
