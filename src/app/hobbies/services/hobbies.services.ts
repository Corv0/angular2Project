import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Hobbies } from "../class/hobbies.class";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do"; // il se contente de regarder à l'intérieur de ce qui est retourné par GET
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";

@Injectable()

export class HobbiesServices{

    private data:any;
    private observable:Observable<any>;
    private url:string = 'app/api/hobbies.json'

    constructor(private http:Http){}

/********************************************************************************************************************/
// propriété qui servira de cache
// les données sont-elles déjà en cache ??
// oui en cache, retourne les données sous forme d'observable
// non pas en cache, une requête est-elle en chemin
// si pas de données en cache et pas de requêtes en cours, requête au service web

    getHobbiesFromAPIWithCache(){
                                           
        if(this.data){
            return Observable.of(this.data);
        }else if(this.observable){
            return this.observable;
        }else {
            this.observable = this.http
                    .get(this.url)
                    .map(response => {
                        this.observable = null;
                        this.data = response.json()
                        return this.data;
                    })
                    .catch(error => {
                     let errorMsg = 'une erreur ${error.status} est survenu en tentant de joindre ${error.url}';
                     return Observable.throw(errorMsg);   
                    });

                    return this.observable;
        }
    }
/********************************************************************************************************************/
/********************************************************************************************************************/

    getHobbiesById(id:any){
        if(!this.data){
            return undefined;
        }
       const result = this.data.filter((hobbie:any) => hobbie.id === id);
       if(result.length > 0){
           return result[0]; // recupère le premier élément du tableau
       }
    }

}