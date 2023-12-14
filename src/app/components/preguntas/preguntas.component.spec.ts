import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasComponent } from './preguntas.component';

describe('PreguntasComponent', () => {
  let component: PreguntasComponent;
  let fixture: ComponentFixture<PreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Each question should have a 'mostrar' property set to false
  it('should have a \'mostrar\' property set to false for each question', () => {
    const component = new PreguntasComponent();
    component.CargarPreguntas();
    component.listaPreguntas.forEach((question: any) => {
      expect(question.mostrar).toBe(false);
    });
  });

});
