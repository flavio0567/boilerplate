import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatcheComponent } from './update-matche.component';

describe('UpdateMatcheComponent', () => {
  let component: UpdateMatcheComponent;
  let fixture: ComponentFixture<UpdateMatcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMatcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
