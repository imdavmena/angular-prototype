import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  constructor() {}

  menuList = [
    { label: 'Inicio', icon: '๐ ', active: false, notification: 0 },
    { label: 'Negociaciones', icon: '๐ณ', active: false, notification: 1 },
    { label: 'Firmas', icon: '๐', active: false, notification: 0 },
    { label: 'Gestiรณn', icon: '๐', active: true, notification: 0 },
  ];
  ngOnInit(): void {}
}
