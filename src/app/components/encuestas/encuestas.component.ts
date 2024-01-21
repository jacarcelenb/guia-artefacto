import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  listaEncuestas: any[] = [];
  constructor() { }

  ngOnInit(): void {

    this.listaEncuestas.push(
      {
        descripcion: "Encuesta sobre el uso de Microsoft Word",
        enlace: "https://forms.office.com/r/iYrgegVFPU"
      }
    )

    this.listaEncuestas.push(
      {
        descripcion: "Encuesta sobre el uso del artefacto de software",
        enlace: "https://forms.office.com/Pages/ResponsePage.aspx?id=aRS-jZzHIU6dQ8pl2enEdREvStO2_EdLrnfqRh2pDmxUMFMzOU84QVo1WU02UkZEWVNEUE5OQllDNC4u"
      }
    )
  }

}
