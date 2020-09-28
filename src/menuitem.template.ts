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

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { MenuItem } from './menuitem.component';

import '@spectrum/sp-icon';

export function dividerTemplate(this: MenuItem) {
    return html`
    <li class="spectrum-Menu-divider" role="separator"></li>
    `;
}

export function itemTemplate(this: MenuItem) {
    var classes = {
        'is-disabled': this.disabled,
        'is-selected': this.selected
    }
    var iconTemplate = []
    if (this.icon != '') {
        iconTemplate.push(html`<sp-icon name="${this.icon}" class="spectrum-Menu-itemIcon" style="width: 20px; height: 20px; display: contents;"></sp-icon>`);
    }

    return html`
    <li class="spectrum-Menu-item ${classMap(classes)}" role="menuitem" tabindex="0" @click="${(!this.disabled) ? this.handleClick : this.handleDisabledClick}">
        ${iconTemplate}
        <span class="spectrum-Menu-itemLabel">${this.label}</span>
        ${(this.selected && !this.unselectable) ? html`<sp-icon name="CheckmarkMedium" class="spectrum-Menu-checkmark spectrum-Menu-itemIcon"></sp-icon>` : ''}
    </li>
    `;
}
