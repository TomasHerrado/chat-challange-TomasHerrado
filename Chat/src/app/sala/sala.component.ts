import { Component } from '@angular/core';
import { MensajeComponent } from "../mensaje-usuario/mensaje-usuario.component";


@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  mensajes: { usuario: string, texto: string }[] = [];

  agregarMensaje(mensaje: { usuario: string, texto: string }) {
    this.mensajes.push(mensaje);
  }
  
}