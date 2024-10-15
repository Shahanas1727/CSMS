import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPageComponent } from './cp-page.component';

describe('CpPageComponent', () => {
  let component: CpPageComponent;
  let fixture: ComponentFixture<CpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
