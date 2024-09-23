import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductooPage } from './productoo.page';

describe('ProductooPage', () => {
  let component: ProductooPage;
  let fixture: ComponentFixture<ProductooPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
