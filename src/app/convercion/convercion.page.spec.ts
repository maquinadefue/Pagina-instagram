import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvercionPage } from './convercion.page';

describe('ConvercionPage', () => {
  let component: ConvercionPage;
  let fixture: ComponentFixture<ConvercionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvercionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
