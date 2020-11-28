import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndResumeComponent } from './contact-and-resume.component';

describe('ContactAndResumeComponent', () => {
  let component: ContactAndResumeComponent;
  let fixture: ComponentFixture<ContactAndResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAndResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAndResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
