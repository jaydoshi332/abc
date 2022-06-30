import { TestBed } from '@angular/core/testing';

import { NormalQuizService } from './normal-quiz.service';

describe('NormalQuizService', () => {
  let service: NormalQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
