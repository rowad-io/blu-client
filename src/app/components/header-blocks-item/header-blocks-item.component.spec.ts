import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlocksItemComponent } from './header-blocks-item.component';

describe('HeaderBlocksItemComponent', () => {
  let component: HeaderBlocksItemComponent;
  let fixture: ComponentFixture<HeaderBlocksItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBlocksItemComponent]
    });
    fixture = TestBed.createComponent(HeaderBlocksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
