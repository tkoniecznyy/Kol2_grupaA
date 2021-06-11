import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TKComponentComponent } from './tk-component.component';
// @ts-ignore
import { describe } from 'jasmine';
// @ts-ignore
import { beforeEach } from 'jasmine';
// @ts-ignore
import { expect } from 'jasmine';
// @ts-ignore
import { it } from 'jasmine';

describe('TKComponentComponent', () => {
  let component: TKComponentComponent;
  let fixture: ComponentFixture<TKComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TKComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TKComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
