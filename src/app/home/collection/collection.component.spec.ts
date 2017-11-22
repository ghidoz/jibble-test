import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponent } from './collection.component';
import { COLLECTION_RESPONSE } from '../../../tests/collection.fixture';
import { Collection } from '../../core/collection/collection.interface';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    component.collection = COLLECTION_RESPONSE[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteCollection', () => {
    it('should emit delete event', () => {
      let emittedCollection: Collection;
      component.onDelete.subscribe((collection: Collection) => {
        emittedCollection = collection;
      });
      component.deleteCollection();
      expect(emittedCollection).toEqual(COLLECTION_RESPONSE[0]);
    });
  });
});
