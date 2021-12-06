import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileNavOpen:Boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(event:Event,status:Boolean){
    
    this.isMobileNavOpen= status;
    event.stopPropagation();
  }

  @HostListener('document:click',['$event','$event.target'])
  clickonheader(event:Event,element:HTMLElement){
    console.log(this.isMobileNavOpen,element);
    if(this.isMobileNavOpen==true){
      if(!element?.classList.contains('main-menu')){
        this.isMobileNavOpen = false;
      }else{
        event.stopPropagation();
      }
    }else{
      
    }

    

  }

}
