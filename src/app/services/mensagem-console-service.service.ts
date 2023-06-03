import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { IMensagem } from '../shared/modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleServiceService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }
   
  info(mensagem: string): void {
    this.abrirSnack(mensagem, ['info-snackbar']);
    console.log(mensagem);
  }
  sucesso(mensagem: string): void {
    this.abrirSnack(mensagem, ['success-snackbar']);
    console.log(mensagem);
  }
  erro(mensagem: string): void {
    this.abrirSnack(mensagem, ['error-snackbar'])
    console.log(mensagem);
  }

  alerta(mensagem: string): void {
    this.abrirSnack(mensagem, ['success-snackbar']);
    alert(mensagem);
  }

  abrirSnack(mensagem: string, classesExtras: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = classesExtras;
    this.snackBar.open(mensagem, 'X', config);
  }
}
