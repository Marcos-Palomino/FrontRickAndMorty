import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateGender'
})
export class TranslateGenderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Male':
        return 'Masculino';
      case 'Female':
        return 'Femenino';
      case 'Genderless':
        return 'Sin género';
      case 'unknown':
      default:
        return 'Desconocido';
    }
  }
}
