import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornioComponent } from './unicornio.component';

describe('UnicornioComponent', () => {
  let component: UnicornioComponent;
  let fixture: ComponentFixture<UnicornioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnicornioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnicornioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
