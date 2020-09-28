import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export function dividerTemplate() {
    return html `
    <li class="spectrum-Menu-divider" role="separator"></li>
    `;
}
export function itemTemplate() {
    var classes = {
        'is-disabled': this.disabled,
        'is-selected': this.selected
    };
    var iconTemplate = [];
    if (this.icon != '') {
        iconTemplate.push(html `<sp-icon name="${this.icon}" class="spectrum-Menu-itemIcon" style="width: 20px; height: 20px; display: contents;"></sp-icon>`);
    }
    return html `
    <li class="spectrum-Menu-item ${classMap(classes)}" role="menuitem" tabindex="0" @click="${(!this.disabled) ? this.handleClick : this.handleDisabledClick}">
        ${iconTemplate}
        <span class="spectrum-Menu-itemLabel">${this.label}</span>
        ${(this.selected && !this.unselectable) ? html `<sp-icon name="CheckmarkMedium" class="spectrum-Menu-checkmark spectrum-Menu-itemIcon"></sp-icon>` : ''}
    </li>
    `;
}
//# sourceMappingURL=menuitem.template.js.map