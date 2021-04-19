import { Observable } from "rxjs";
import { Historique } from "../models/historique.model";


export class Excercice2Service {
    historiques :Historique[]= [];
    operations = ["Addition", "Soustraction", "Division", "Multiplication"];

    /**
     * This function returns the result of operation choosen
     * @param nombre1 
     * @param nombre2 
     * @param operation 
     * @returns the result
     */
    onApplyOpperation(nombre1: number, nombre2: number, operation: string) {
        let resultat = 0;
        switch (operation) {
            case "Addition":
                resultat = nombre1 + nombre2;
                break;
            case "Soustraction":
                resultat = nombre1 - nombre2;
                break;
            case "Division":
                resultat = nombre1 / nombre2;
                break;
            case "Multiplication":
                resultat = nombre1*nombre2;
                break;
            default:
                resultat = 0;
                break;
        }
        return resultat;
    }

    /**
     * This function add the history of each operation
     * @param historique 
     */
    onAddHistorique(historique: Historique){
        this.historiques.push(historique);
    }

    /**
     * This function returns all histories
     * @returns 
     */
    onGetAllHistorique(){
        return new Observable<Historique[]>(
            observer =>{
                observer.next(this.historiques);
            }
        );
    }
    /**
     * 
     * @returns Reset the history
     */
    onResetHistorique(){
        return this.historiques=[];
    }
}