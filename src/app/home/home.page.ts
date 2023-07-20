import { Component } from '@angular/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public pickFiles = async () => {
    const result = await FilePicker.pickFiles({
      types: ['application/pdf'],
      multiple: false,
    });
    console.log(result.files[0]);
  };

}
