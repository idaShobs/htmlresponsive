import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'side-bar-component',
  styleUrl: 'side-bar-component.css',
  shadow: true,
})
export class SideBarComponent {
  @Prop()
  menuItemIcon: string;

  @Prop()
  menuItemName: string;

  render() {
    return (
      <div class="main-box">
        <img src={this.menuItemIcon} />
        <div>{this.menuItemName}</div>
      </div>
    );
  }
}
