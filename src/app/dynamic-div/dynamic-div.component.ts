import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit, AfterViewInit {
  currentPosition = window.pageYOffset;
  divPerIteration:number = 10;
  elements:number = 0;
  @ViewChild('wrapper', { static:false }) divEl!: ElementRef;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    fromEvent(window,'scroll').pipe(debounceTime(500)).subscribe((res)=>{
      const parentYPosition:number = this.divEl.nativeElement.getBoundingClientRect().bottom;
      let scroll = window.pageYOffset;
      if (scroll > this.currentPosition && (parentYPosition-600) <= (window.innerHeight)  ) {
        this.loadDiv();
      }
      this.currentPosition = scroll;
    });
  }
  showButtonalert(counter:number){
    alert('Button '+ counter);
  }
  ngAfterViewInit(){
    this.renderer.setStyle(this.divEl.nativeElement,'min-height',(window.innerHeight+200)+'px');
    this.loadDiv();
    
  }

  loadDiv(){
    for(let i= 0; i < this.divPerIteration;i++){
      this.elements++;

      let customButton = this.renderer.createElement('button');
      customButton.className= 'btn';
      this.renderer.setProperty(customButton,'innerHTML','Button '+ this.elements);
      // if(this.elements %10==0){
      //   customButton.addEventListener("click",this.showButtonalert.bind(null,this.elements));
      // }
      customButton.addEventListener("click",this.showButtonalert.bind(null,this.elements));

      let customdiv = this.renderer.createElement('div');
      customdiv.classList.add('element');
      this.renderer.appendChild(customdiv,customButton);
      this.renderer.appendChild(this.divEl.nativeElement,customdiv);
    }

  }
}
