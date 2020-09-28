import { Base } from '@spectrum/sp-base';
export declare class MenuItem extends Base {
    static componentStyles: import("lit-element").CSSResult;
    label: string;
    icon: string;
    divider: boolean;
    disabled: boolean;
    selected: boolean;
    unselectable: boolean;
    protected handleClick(e: any): void;
    protected handleDisabledClick(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-menuitem': MenuItem;
    }
}
