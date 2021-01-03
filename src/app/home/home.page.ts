import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public reductions = [
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        85,
        90,
    ];
    public inputPrice: string;
    public newPrice: number;
    public custom: boolean = false;
    public customReduc: number = 0;

    constructor() {}

    getOffPrice(reduction: number): void {
        let price = parseFloat(this.inputPrice);
        const reduc = reduction / 100;

        this.customReduc = reduction;

        if (isNaN(price)) {
            price = 0;
        }

        this.compute(price, reduc);
    }

    compute(price: number, reduc: number): void {
        this.newPrice = Math.round(price * (1 - reduc) * 100) / 100;
    }

    customChange(ev): void {
        this.getOffPrice(parseInt(ev.detail.value, 10));
    }

    updateOnChange(ev): void {
        if (this.customReduc) {
            let price = parseFloat(ev.detail.value);

            if (isNaN(price)) {
                price = 0;
            }

            this.compute(price, this.customReduc / 100);
        }
    }
}
