import { TestBed } from '@angular/core/testing';

import { RestfulTaskService } from './restful-task.service';

describe('RestfulTaskService', () => {
  let service: RestfulTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestfulTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
