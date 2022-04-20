import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://randompicturegenerator.com/img/car-generator/gd4bacbd6972d21d93a99ef3e16e8a577bb49f3ad917acf3eefa98ee44b6acb90a055cf53d852f38005d878209ecb23d8_640.jpg',
      description: 'Carro'
    },
    {
      url: 'https://randompicturegenerator.com/img/car-generator/g9616fc8cd93b5012465c80487bca207748ff921a9a499a227fd3daf03b47e558b1ed2c44aa0de649f489e73485010229_640.jpg',
      description: 'Carro'
    }
  ];

}
