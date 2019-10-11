import { Component, OnInit } from '@angular/core';
import { RomanNumbersService } from '../roman-numbers.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarioActivo: boolean;
  constructor(private romanS: RomanNumbersService) { }

  ngOnInit() {
    console.log(this.romanS.arabicToRoman('54'));

  }

  activarUsuario(): void {
    this.usuarioActivo = true;
  }
}
