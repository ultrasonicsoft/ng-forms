import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLoginFormComponent } from './html-login-form.component';

describe('HtmlLoginFormComponent', () => {
  let component: HtmlLoginFormComponent;
  let fixture: ComponentFixture<HtmlLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
