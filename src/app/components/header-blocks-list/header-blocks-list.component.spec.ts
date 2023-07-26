import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlocksListComponent } from './header-blocks-list.component';

describe('HeaderBlocksListComponent', () => {
  let component: HeaderBlocksListComponent;
  let fixture: ComponentFixture<HeaderBlocksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBlocksListComponent]
    });
    fixture = TestBed.createComponent(HeaderBlocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
