import { Component } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  characters: any [];
  
  currentPage: number;

  numPages: number;
  
 
  constructor(private charactersService: CharactersService){
    this.characters = [];
    this.currentPage = 1;
    this.numPages = 0;
  }

   ngOnInit(){
    this.charactersService.getAll(this.currentPage)
    .then(response=>{
      this.characters = response['results'];
      this.numPages = response['info']['pages'];
    })
    .catch(error =>{
      console.log(error); 
    })
    
  }

  async changePage(flag: boolean){
    if(flag  ){
      this.currentPage--;
    }
    else{
      this.currentPage++;
    }
    const response = await this.charactersService.getAll(this.currentPage);
    this.characters = response['results'];

  }
}
