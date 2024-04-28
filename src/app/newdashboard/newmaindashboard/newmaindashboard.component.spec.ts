import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmaindashboardComponent } from './newmaindashboard.component';

describe('NewmaindashboardComponent', () => {
  let component: NewmaindashboardComponent;
  let fixture: ComponentFixture<NewmaindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewmaindashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewmaindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
