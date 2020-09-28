/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/


import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import menuitemStyles from './menuitem.styles';
import { dividerTemplate, itemTemplate } from './menuitem.template';

@customElement('sp-menuitem')
export class MenuItem extends Base {
  public static componentStyles = menuitemStyles;

  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: Boolean }) public divider: boolean = false;
  @property({ type: Boolean }) public disabled: boolean = false;
  @property({ type: Boolean }) public selected: boolean = false;
  @property({ type: Boolean }) public unselectable: boolean = false;

  protected handleClick(e: any) {
    this.selected = !this.selected;
    let changedEvent = new CustomEvent('itemclick', {
      detail: {
        label: this.label,
        selected: this.selected
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changedEvent);
  }

  protected handleDisabledClick(e: any) { }


  protected render() {
    if (this.divider) {
      return dividerTemplate.call(this);
    } else {
      return itemTemplate.call(this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-menuitem': MenuItem;
  }
}
