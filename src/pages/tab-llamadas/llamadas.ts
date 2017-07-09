import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONAJES } from './../../data-fake/personajes.data';
import { Pagina2Page } from './../pagina2/pagina2';





@Component({
    selector: 'page-llamadas',
    templateUrl: 'llamadas.html'

})

export class LlamadasPage {
    personajes: any[];
   

    constructor( private navCtrl: NavController ){

        this.personajes = PERSONAJES;
        console.log('Personajes en llamadas',this.personajes);
    }

    navigateTo(personaje){
        //La información se recojerá en la página cargada con navParams.
        this.navCtrl.push(Pagina2Page, { personaje });
        console.log('personaje seleccionado', personaje);
    }
}