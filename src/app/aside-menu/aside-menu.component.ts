import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  constructor() {}

  menuList = [
    { label: 'Inicio', icon: '🏠', active: false, notification: 0 },
    { label: 'Negociaciones', icon: '😳', active: false, notification: 1 },
    { label: 'Firmas', icon: '🔏', active: false, notification: 0 },
    { label: 'Gestión', icon: '🌎', active: true, notification: 0 },
  ];
  ngOnInit(): void {}
}
