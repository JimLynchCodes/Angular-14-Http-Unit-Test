import { Component, OnInit } from '@angular/core';
import { Stuff } from './data-stuff.model';
import { DataStuffService } from './data-stuff.service';
import { placeholderStuff } from './data-stuff.placeholder';

@Component({
  selector: 'app-data-stuff',
  templateUrl: './data-stuff.component.html',
  styleUrls: ['./data-stuff.component.scss']
})
export class DataStuffComponent implements OnInit {

  gotData: boolean = false;
  stuff: Stuff = placeholderStuff;

  constructor(private stuffService: DataStuffService) { }

  async ngOnInit(): Promise<void> {
    this.stuff = await this.stuffService.getStuff();
    this.gotData = true;
  }

}
