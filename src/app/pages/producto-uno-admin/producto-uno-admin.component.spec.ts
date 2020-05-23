import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoUnoAdminComponent } from './producto-uno-admin.component';

describe('ProductoUnoAdminComponent', () => {
  let component: ProductoUnoAdminComponent;
  let fixture: ComponentFixture<ProductoUnoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoUnoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoUnoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
