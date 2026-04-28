import { Component } from '@angular/core';
import { DriverDetail } from '../driver-detail/driver-detail';
import { Piloti } from '../f1.model';

@Component({
  selector: 'app-driver-list',
  imports: [DriverDetail],
  templateUrl: './driver-list.html',
  styleUrl: './driver-list.css',
})
export class DriverList {
 selectPilota?: Piloti;
  drivers: Piloti[] = [    //drivers e una lista di oggetti di tipo Piloti
    {
      scuderia: 'ferrari',
      name: 'Gino',
      numeroGara: 16,
      punti: 22,
      nazione: 'jamaica'

    },
    {
      scuderia: 'mercedes',
      name: 'Gianpiero',
      numeroGara: 1,
      punti: 233,
      nazione: 'serbia'
    },
    {
      scuderia: 'cadillac',
      name: 'perez',
      numeroGara: 1,
      punti: 233,
      nazione: 'messico'
    }

    
];
pilotaSelezionato(piloti:Piloti) {    //funzione che prende in input un oggetto di tipo Piloti e lo assegna alla variabile selectPilota
  this.selectPilota = piloti;    //assegna alla variabile selectPilota l'oggetto piloti passato come parametro
}
}
