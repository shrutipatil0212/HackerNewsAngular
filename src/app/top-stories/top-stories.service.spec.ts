import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TopStoriesService } from './top-stories.service';

describe('TopStoriesService', () => {
  let service: TopStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TopStoriesService);
  });

  it('should be created', () => {
    const service: TopStoriesService = TestBed.inject(TopStoriesService);
    expect(service).toBeTruthy();
  });
});
