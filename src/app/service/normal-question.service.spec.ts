import { TestBed } from '@angular/core/testing';

import { NormalQuestionService } from './normal-question.service';

describe('NormalQuestionService', () => {
  let service: NormalQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
