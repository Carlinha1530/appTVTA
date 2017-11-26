import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { IVideos } from '../../interfaces/ivideo';

/*
  Generated class for the VideoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class VideoServiceProvider {

  // public listaFavoritos: Videos[];
  
  // variavel que receberá a url da api
  public videoUrl = 'http://terceiroanjo.com/api/videos';

  constructor(public http: Http) {
    console.log('Hello VideoServiceProvider Provider');
    // this.storage.get('teste').then((val)=>{
    //   console.log(val);
    // });
  }

  //requisição para listar os carros
  listaVideos():Observable<IVideos[]>{
    return this.http.get(this.videoUrl).map(res => res.json()).catch(this.erro);
  }

  //função de Erro
  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
