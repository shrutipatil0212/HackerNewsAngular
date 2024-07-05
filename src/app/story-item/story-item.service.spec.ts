import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoryItemService } from './story-item.service';

describe('StoryItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [StoryItemService], 
    });
  });

  it('should create', () => {
    const service: StoryItemService = TestBed.inject(StoryItemService);
    expect(service).toBeTruthy();
  });
});
