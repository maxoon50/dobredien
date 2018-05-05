import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../../services/server.service';
import {User} from '../../../bo/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
