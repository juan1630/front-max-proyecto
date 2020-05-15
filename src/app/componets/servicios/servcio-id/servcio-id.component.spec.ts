import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServcioIDComponent } from './servcio-id.component';

describe('ServcioIDComponent', () => {
  let component: ServcioIDComponent;
  let fixture: ComponentFixture<ServcioIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServcioIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServcioIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
