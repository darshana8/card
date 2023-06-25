import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintcardComponent } from './printcard.component';

describe('PrintcardComponent', () => {
  let component: PrintcardComponent;
  let fixture: ComponentFixture<PrintcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintcardComponent]
    });
    fixture = TestBed.createComponent(PrintcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
