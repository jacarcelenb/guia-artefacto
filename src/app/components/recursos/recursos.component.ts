import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  listaRecursos: any= [];
  constructor() { }

  ngOnInit(): void {
    this.CargarRecursos()
  }

CargarRecursos(): void {

 this.listaRecursos.push({
   recurso:"Tablas en LaTeX",
   descripcion: "Herramienta para crear tablas en LaTeX de forma sencilla.",
   enlace: "https://www.tablesgenerator.com/"
 })

 this.listaRecursos.push({
  recurso:"Tablas en LaTeX",
  descripcion: "Herramienta para crear tablas en LaTeX de forma sencilla.",
  enlace: "https://www.latex-tables.com/"
})

this.listaRecursos.push({
  recurso:"Fórmulas matemáticas en LaTeX",
  descripcion: "Herramienta para crear fórmulas matemáticas de forma sencilla.",
  enlace: "https://latex.codecogs.com/eqneditor/editor.php?lang=es-es"
})

this.listaRecursos.push({
  recurso:"Aprender LaTeX en Overleaf",
  descripcion: "Guía para aprender LaTeX en Overleaf.",
  enlace: "https://es.overleaf.com/learn"
})

this.listaRecursos.push({
  recurso:"Curso de LaTeX",
  descripcion: "Curso para aprender LaTeX.",
  enlace: "https://www.youtube.com/watch?v=EQ9RdCUB1Yo&t=4667s"
})
this.listaRecursos.push({
  recurso:"Curso relámpago de LaTeX en Overleaf",
  descripcion: "Curso para aprender LaTeX.",
  enlace: "https://www.youtube.com/watch?v=rofBXQZqJVs&list=PLqvnr4VkcdCSggrRuueDHXNQMzkWzkiW9"
})

this.listaRecursos.push({
  recurso:"Ejemplo Tesis",
  descripcion: "Ejemplo de Tesis",
  enlace: "https://docs.google.com/document/d/196oN9KWwO2o1Mxw8wD3cynVMpLeTXwGd/edit?usp=sharing&ouid=104038044104562954417&rtpof=true&sd=true"
})

this.listaRecursos.push({
  recurso:"Ejemplo Anteproyecto",
  descripcion: "Ejemplo de Perfil de Tesis de grado",
  enlace: "https://docs.google.com/document/d/1sxgKMM_0SqYM1DP1ibmG6q2SAhJDy2UD/edit?usp=sharing&ouid=104038044104562954417&rtpof=true&sd=true"
})

this.listaRecursos.push({
  recurso:"Ejemplo Plantilla  de Tesis LaTeX",
  descripcion: "Ejemplo de la plantilla  de Tesis LaTeX",
  enlace: "https://drive.google.com/file/d/18k4RmbVLEKSIqtbwUX70HMaXIhMOBANR/view?usp=sharing"
})

}
}
