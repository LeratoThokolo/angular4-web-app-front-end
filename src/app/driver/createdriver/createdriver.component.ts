import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PnpdriverService } from '../../service/pnpdriver.service';
import { Pnpdriver } from '../pnpdriver';


@Component({
  selector: 'app-createdriver',
  templateUrl: './createdriver.component.html',
  styleUrls: ['./createdriver.component.css']
})
export class CreatedriverComponent implements OnInit {

  private pnpDriver: Pnpdriver;


  constructor(private _pnpDriverService: PnpdriverService, private _router: Router) { }

  ngOnInit() {

    this.pnpDriver = new Pnpdriver();

  }

  saveDriver() {

    this._pnpDriverService.addDriver(this.pnpDriver)
    .subscribe((response) => {

      console.log(response);

      this._router.navigate(['/admin-admin-panel']);

    }, (error) => {

      console.log(error);

    });

  }

}
