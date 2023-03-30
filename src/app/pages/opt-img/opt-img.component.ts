import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-opt-img',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './opt-img.component.html',
  styleUrls: ['./opt-img.component.scss'],
})
export class OptImgComponent {
  public images: string[] = [
    'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
}
