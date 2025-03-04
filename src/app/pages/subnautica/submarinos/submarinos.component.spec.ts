import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarinosComponent } from './submarinos.component';

describe('SubmarinosComponent', () => {
  let component: SubmarinosComponent;
  let fixture: ComponentFixture<SubmarinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmarinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmarinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
