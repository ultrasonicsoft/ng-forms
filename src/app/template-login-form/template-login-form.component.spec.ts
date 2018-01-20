import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLoginFormComponent } from './template-login-form.component';

describe('TemplateLoginFormComponent', () => {
  let component: TemplateLoginFormComponent;
  let fixture: ComponentFixture<TemplateLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
