import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-userdetail',
  templateUrl: './aside-userdetail.component.html',
  styleUrls: ['./aside-userdetail.component.scss'],
})
export class AsideUserdetailComponent implements OnInit {
  constructor() {}

  initialName = 'MC';
  fullName = 'Melanie caraballo';
  email = 'mcaraballo@wepsys.net';
  ngOnInit(): void {}
}
