import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../../core/collection/collection.interface';

@Component({
  selector: 'jb-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @Input() collection: Collection;
  @Output() onDelete: EventEmitter<Collection> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteCollection() {
    this.onDelete.emit(this.collection);
  }

}
