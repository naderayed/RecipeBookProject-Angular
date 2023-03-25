import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector :"app-header",
  templateUrl:"header.component.html",
  styleUrls:["header.component.css"]
})
export class HeaderComponent{

  @Output("loadedFeature") emiterNav = new EventEmitter<string>();


  onSelect(feature: string) {
    this.emiterNav.emit(feature);
  }
}
