import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNgFormComponent } from './products-ng-form.component';

describe('ProductsNgFormComponent', () => {
  let component: ProductsNgFormComponent;
  let fixture: ComponentFixture<ProductsNgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
