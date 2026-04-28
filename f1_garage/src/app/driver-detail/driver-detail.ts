import { Component, Input } from '@angular/core';
import { Piloti } from '../f1.model';

@Component({
  selector: 'app-driver-detail',
  imports: [],
  templateUrl: './driver-detail.html',
  styleUrl: './driver-detail.css',
})
export class DriverDetail {
  @Input() i!: Piloti;
}
