import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public reductions = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
    public inputPrice: string;
    public newPrice: number;
    public custom: boolean = false;
    public customReduc: number;

    constructor() {}

    getOffPrice(reduction: number): void {
        let price = parseFloat(this.inputPrice);
        const reduc = reduction / 100;

        this.customReduc = reduction;

        if (isNaN(price)) {
            price = 0;
        }

        this.newPrice = price * (1 - reduc);
        this.newPrice = Math.round(this.newPrice * 100) / 100;
    }

    customChange(ev) {
        this.getOffPrice(parseInt(ev.detail.value, 10));
    }
}
