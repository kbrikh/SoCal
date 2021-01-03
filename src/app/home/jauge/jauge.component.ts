import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

const START_AT = 0;
@Component({
    selector: 'app-jauge',
    templateUrl: './jauge.component.html',
    styleUrls: ['./jauge.component.css'],
})
export class JaugeComponent implements OnInit, OnChanges {
    @Input() color: string;
    @Input() percent: any;
    @Input() card: boolean = true;
    public myIntervals: any;
    public min = START_AT;
    public radius: number = 90;
    public canvas: HTMLCanvasElement;
    public canvasWidth: number = 300;
    public canvasHeight: number = 300;
    public context: CanvasRenderingContext2D;

    constructor(private elm: ElementRef) {}

    ngOnInit(): void {
        this.draw(this.percent);
    }

    draw(percent): void {
        this.canvas = this.elm.nativeElement.querySelector('#score canvas');
        percent = parseInt(percent, 10);
        percent = percent > 0 && percent <= 100 ? percent : 0;
        this.increment(percent);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.draw(changes.percent.currentValue);
    }

    /*
     **	setInterval de increment(min, max, target)
     **	@param max: int - entre 0 et 100
     */
    increment(max): any {
        for (let idx = 0; idx <= max; idx++) {
            this.circle(idx);
        }
    }

    /*
     **	Fonction qui dessine le cercle
     **	@param i:number - nombre de 0 à 100
     **	@param target : elt HTML - l'élément canvas cible
     */
    circle(i: number): void {
        const data = i;
        const cx = this.canvasWidth / 2;
        const cy = this.canvasHeight / 2;

        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;

        this.context = this.canvas.getContext('2d');

        this.context.font = '30px Arial';
        this.context.fillText((data > 0 ? '-' : ' ') + data + '%', 120, 155);
        this.context.beginPath();
        this.context.arc(cx, cy, this.radius, 0, 2 * Math.PI);
        this.context.lineWidth = 20;
        this.context.strokeStyle = '#fff';
        this.context.shadowOffsetX = 2;
        this.context.shadowBlur = 10;
        this.context.shadowColor = 'rgba(0,0,0,0.1)';

        this.context.stroke();

        if (data) {
            this.context.beginPath();
            this.context.arc(
                cx,
                cy,
                this.radius,
                (-1 / 2) * Math.PI,
                (data / 100) * 2 * Math.PI - (1 / 2) * Math.PI
            );
            this.context.lineWidth = 20;
            this.context.strokeStyle = this.color;
            this.context.shadowOffsetX = 3;
            this.context.shadowBlur = 10;
            this.context.shadowColor = 'rgba(0,0,0,0.2)';

            this.context.stroke();
        }
    }
}
