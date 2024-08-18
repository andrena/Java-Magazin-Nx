import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserControllerService } from './generated/openapi';
import { EMPTY } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{provide: UserControllerService, useValue: {getCurrentUser: () => EMPTY}}]
    }).compileComponents();
  });

  it('creates', () => {
    expect(TestBed.createComponent(AppComponent)).toBeTruthy()
  });
});
