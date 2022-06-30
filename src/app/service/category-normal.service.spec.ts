import { TestBed } from '@angular/core/testing';

import { CategoryNormalService } from './category-normal.service';

describe('CategoryNormalService', () => {
  let service: CategoryNormalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryNormalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
