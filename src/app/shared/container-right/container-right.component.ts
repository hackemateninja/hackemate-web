import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-container-right',
  templateUrl: './container-right.component.html',
  styleUrls: ['./container-right.component.scss']
})
export class ContainerRightComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
