import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceDirective } from './debounce.directive';


export * from './debounce.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DebounceDirective,
  ],
  exports: [
    DebounceDirective,
  ]
})
export class Debounce {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Debounce
    };
  }
}
