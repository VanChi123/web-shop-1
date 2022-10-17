import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducePagesComponent } from './introduce-pages.component';

describe('IntroducePagesComponent', () => {
  let component: IntroducePagesComponent;
  let fixture: ComponentFixture<IntroducePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
