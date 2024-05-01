import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBetsComponent } from './admin-bets.component';

describe('AdminBetsComponent', () => {
  let component: AdminBetsComponent;
  let fixture: ComponentFixture<AdminBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
