import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsExampleComponent } from './threejs-example.component';

describe('ThreejsExampleComponent', () => {
  let component: ThreejsExampleComponent;
  let fixture: ComponentFixture<ThreejsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
