import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  panelOpenState:boolean = false;
  pregunta = {
    pregunta:'',
    respuesta: ''
  }
  listaPreguntas: any = [];
  constructor() { }

  ngOnInit(): void {
    this.CargarPreguntas()
  }

 CargarPreguntas(): void {
  this.listaPreguntas.push({
    pregunta:'¿Porqué debo aprender LaTeX?',
    respuesta: 'Aprender LaTeX puede ser beneficioso por varias razones, especialmente si estás involucrado en la creación de documentos científicos, académicos o técnicos. ',
    mostrar: false,
    enlace:""
  })
  this.listaPreguntas.push({
    pregunta:'¿Cómo puedo insertar tablas en LaTeX?',
    respuesta: 'Para insertar tablas en LaTeX, puedes utilizar el entorno tabular, el siguiente enlace contiene información sobre el manejo de tablas en LaTeX.',
    mostrar: false,
    enlace:"https://manualdelatex.com/tutoriales/tablas"
  })
  this.listaPreguntas.push({
    pregunta:'¿Cómo puedo insertar figuras en LaTeX?',
    respuesta: 'Para insertar figuras en LaTeX, puedes utilizar el entorno figure junto con el comando \includegraphics, el siguiente enlace contiene información sobre el manejo de figuras en LaTeX.',
    mostrar: false,
    enlace:"https://www.youtube.com/watch?v=_Mup8ykt1sw"
  })
  this.listaPreguntas.push({
    pregunta:'¿Cómo puedo insertar código fuente en LaTeX?',
    respuesta: 'Para insertar código fuente en LaTeX, puedes utilizar el paquete listings.',
    mostrar: false,
    enlace:"https://es.overleaf.com/learn/latex/Code_listing"
  })

  this.listaPreguntas.push({
    pregunta:'¿Cómo puedo realizar citas en LaTeX?',
    respuesta: 'Para realizar citas en LaTeX, puedes utilizar el sistema de gestión de bibliografía BibTeX junto con el estilo de citación que prefieras, el siguiente enlace contiene información.',
    mostrar: false,
    enlace:"https://www.youtube.com/watch?v=efrbQ37aowM"
  })
  this.listaPreguntas.push({
    pregunta:'¿Cómo puedo insertar listas en LaTeX?',
    respuesta: 'Puedes insertar listas en LaTeX utilizando los entornos itemize (viñetas) y enumerate (números), el siguiente enlace contiene más información.',
    mostrar: false,
    enlace:"https://manualdelatex.com/tutoriales/listas-y-enumeraciones"
  })
  this.listaPreguntas.push({
    pregunta:'¿Cómo puedo insertar fórmulas matemáticas en LaTeX?',
    respuesta: 'Para insertar fórmulas matemáticas en LaTeX, puedes utilizar distintos modos, pero los más comunes son el modo en línea y el modo de pantalla completa, el siguiente enlace contiene más información.',
    mostrar: false,
    enlace:"https://manualdelatex.com/tutoriales/ecuaciones"
  })
  this.listaPreguntas.push({
    pregunta:'¿Puedo utilizar otras herramientas a parte de Overleaf?',
    respuesta: 'Si a parte de Overleaf existen otras opciones como TeXstudio, TeXMaker e incluso se puede utilizar con VScode utilizando la extensión LaTeX Workshop.',
    mostrar: false,
    enlace:""
  })

  this.listaPreguntas.push({
    pregunta:'¿Dónde puedo aprender LaTeX?',
    respuesta: 'Existen varios recursos en canales de Youtube pero la documentación completa se encuentra en la página oficial de  The LaTeX Project o puede revisar este enlace de Overleaf donde se enseña rapidamente el manejo de LaTeX.',
    mostrar: false,
    enlace:"https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes"
  })
 }

}
