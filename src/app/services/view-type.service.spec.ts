import { TestBed, inject } from '@angular/core/testing';

import { ViewTypeService } from './view-type.service';

describe('ViewTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewTypeService]
    });
  });

  it('should ...', inject([ViewTypeService], (service: ViewTypeService) => {
    expect(service).toBeTruthy();
  }));
});
