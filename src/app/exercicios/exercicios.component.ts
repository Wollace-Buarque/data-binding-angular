import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.scss']
})
export class ExerciciosComponent {

  helloWorld: string = "Olá, mundo!"
  link: string = "https://www.youtube.com.br"

  paragraphColor: string = ""
  backgroundColor: string = ""

  textToShowIndex: number = 1

  changeParagraph() {
    this.paragraphColor = this.randomRGB()
    this.backgroundColor = this.randomRGB()
  }

  changeTextToShow(index: number) {
    this.textToShowIndex = index
  }

  private randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
  }

}
