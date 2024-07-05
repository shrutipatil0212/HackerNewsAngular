import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TopStoriesComponent
      ],
      imports: [HttpClientTestingModule, NgxPaginationModule, FormsModule, NgxSpinnerModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HackerNewsProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HackerNewsProject');
  });
});
