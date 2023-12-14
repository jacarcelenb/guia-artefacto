import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  urlVideo: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  CambiarUrlVideo(urlVideo: string, cambio: boolean): void {
    this.urlVideo = "../../../assets/Anteproyecto/" + urlVideo + ".mp4";
    if (cambio) {
    this.urlVideo = "../../../assets/Tesis/" + urlVideo +".mp4";
    }

  }

}
