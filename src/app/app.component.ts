import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng4-complete-guide';
  loadedComponent = "recipy";
  selectedComponent(recivedData: string){
      this.loadedComponent = recivedData;
  }
}
