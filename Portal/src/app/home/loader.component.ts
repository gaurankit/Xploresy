import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {
    constructor(private router: Router){
    }
    
    ngOnInit(): void {
        setTimeout(() => {
            this.router.navigate(['/results']);
        }, 1500 );
    }

}