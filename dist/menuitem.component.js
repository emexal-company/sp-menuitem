import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import menuitemStyles from './menuitem.styles';
import { dividerTemplate, itemTemplate } from './menuitem.template';
let MenuItem = class MenuItem extends Base {
    constructor() {
        super(...arguments);
        this.label = '';
        this.icon = '';
        this.divider = false;
        this.disabled = false;
        this.selected = false;
        this.unselectable = false;
    }
    handleClick(e) {
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
    handleDisabledClick(e) { }
    render() {
        if (this.divider) {
            return dividerTemplate.call(this);
        }
        else {
            return itemTemplate.call(this);
        }
    }
};
MenuItem.componentStyles = menuitemStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MenuItem.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MenuItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "divider", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "unselectable", void 0);
MenuItem = __decorate([
    customElement('sp-menuitem')
], MenuItem);
export { MenuItem };
//# sourceMappingURL=menuitem.component.js.map