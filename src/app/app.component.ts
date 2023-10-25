import { Component, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  img="";
  // @ViewChild('screen', { static: true }) screen: any;

  constructor(private captureService:NgxCaptureService){
    
  }
  ngOnInit() {
    // this.captureService
    //   .getImage(this.screen.nativeElement, true)
    //   .pipe(
    //     tap((img) => {
    //       this.img = img;
    //       console.log(img);
    //       var download = document.createElement('a');
    //       download.href = this.img;
    //       download.download = 'screen1.png';
    //       download.click();
    //     })
    //   )
    //   .subscribe();
  }
  
}
