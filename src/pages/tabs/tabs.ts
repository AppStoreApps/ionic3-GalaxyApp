import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// pages
import { LlamadasPage } from './../tab-llamadas/llamadas';
import { MensajesPage } from './../tab-mensajes/mensajes';
import { AudioPage } from './../tab-audio/audio';



@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})

export class TabsPage {

    llamadas: any;
    mensajes: any;
    audio: any;

    constructor(){
        
        this.llamadas = LlamadasPage;
        this.mensajes = MensajesPage;
        this.audio = AudioPage;

        console.log('pagina tabs');
    }
}

