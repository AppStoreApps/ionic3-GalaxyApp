import { Component } from '\@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'pagina2-page',
    templateUrl: 'pagina2.html'
})

export class Pagina2Page {

    personaje: any;
    constructor(private navParams: NavParams ){
        // this.personaje = navParams.data.personaje;
        this.personaje = navParams.get('personaje')
        console.log('Parametros recibidos en pagina de personaje', navParams );
        console.log('Parametros del personaje', this.personaje );
    }
}