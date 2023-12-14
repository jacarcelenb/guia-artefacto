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
    recurso:"Plantilla en Overleaf",
    descripcion: "Enlace de la plantilla para el perfil y tesis de grado.",
    enlace: "https://www.overleaf.com/3363858527tbbhvcyhjfbg#6fee52"
  })

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
console.log(this.listaRecursos)
}
}
