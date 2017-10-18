import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadrantService } from '../../../services/quadrant.service';

@Component({
  selector: 'app-maximize',
  templateUrl: './maximize.component.html',
  styleUrls: ['./maximize.component.scss']
})
export class MaximizeComponent implements OnInit {

  private maxType: string;
  constructor(
    private quadrantService: QuadrantService,
    private router: Router
  ) {
    this.maxType = 'MIQ';
  }

  ngOnInit() {
    this.quadrantService.maximizeEvent.subscribe(
      maxType => {
        console.log(maxType);
        setTimeout(_ => {
          this.maxType = maxType;
        }, 100);
      }
    );
    this.quadrantService.IsOnMIQView = false;
  }

  gotoQuadrantView() {
    this.router.navigate(['quadrant']);
  }
  loadMaxView(type) {
    console.log(type);
    this.maxType = type;
    this.quadrantService.MaxType = type;
  }
}
