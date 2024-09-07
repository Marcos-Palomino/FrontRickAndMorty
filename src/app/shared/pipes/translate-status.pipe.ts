import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateStatus'
})
export class TranslateStatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Muerto';
      case 'unknown':
      default:
        return 'Desconocido';
    }
  }
}
