import { Injectable } from '@angular/core';

@Injectable()
export class ViewTypeService {

  selectedView: string = 'card';

  getTypeOfView() {
    return this.selectedView;
  }

  setTypeOfView(selectedView) {
    this.selectedView = selectedView;
  }

}
