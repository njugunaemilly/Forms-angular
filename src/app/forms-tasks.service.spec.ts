import { TestBed } from '@angular/core/testing';

import { FormsTasksService } from './forms-tasks.service';

describe('FormsTasksService', () => {
  let service: FormsTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
