import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../core/collection/collection.interface';

@Component({
  selector: 'jb-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @Input() collection: Collection;

  constructor() { }

  ngOnInit() {
  }

}
