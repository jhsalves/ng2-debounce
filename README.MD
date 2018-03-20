# @ng2-debounce-direcive

Angular 2 directive to add debounce behaviour on elements based in a list of events 

## Installation

To install this library, run:

```bash
$ npm install ng2-debounce-directive --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-debounce-directive
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import your library
import { Debounce } from 'ng2-debounce-directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    Debounce.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<input appDebounce [delay]="700" [events]="['keyup','mouseover',...]" (func)="some_binding_method()" [(ngModel)]="attribute">
```

###Tested events

| Event name  | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |           
|onclick      | Fires on a mouse click on the element                                   |
|ondblclick   | Fires on a mouse double-click on the element                            |
|onmousedown  | Fires when a mouse button is pressed down on an element                 |         
|onmousemove  | Fires when the mouse pointer is moving while it is over an element      |           
|onmouseout   | Fires when the mouse pointer moves out of an element                    |       
|onmouseover  | Fires when the mouse pointer moves over an element                      |     
|onmouseup    | Fires when a mouse button is released over an element                   |       
|onmousewheel | Deprecated. Use the onwheel attribute instead                           |
|onwheel      | Fires when the mouse wheel rolls up or down over an element             |           
|onkeydown    | Fires when a user is pressing a key                                     |
|onkeypress   | Fires when a user presses a key                                         |
|onkeyup      | Fires when a user releases a key                                        |

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Jonathas](mailto:jhsalves@gmail.com)
