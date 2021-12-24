import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  @Output() selectedPage = new EventEmitter<string>();
    
    changeMenu(selectedValue: string){
        this.selectedPage.emit(selectedValue)
    }
}