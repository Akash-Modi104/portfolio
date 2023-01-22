import { Directive,ElementRef } from '@angular/core';
import { BreakpointObserver,Breakpoints} from '@angular/cdk/layout'

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(private elementref :ElementRef,private bp:BreakpointObserver) { 
    this.bp
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) => {
        for (let breakpoint of Object.keys(result.breakpoints))
          if (result.breakpoints[breakpoint]) {
            if (breakpoint === Breakpoints.HandsetPortrait)
              this.elementref.nativeElement.classList.remove('pc');

            if (breakpoint === Breakpoints.WebLandscape)
              this.elementref.nativeElement.classList.add('pc');
          }
      },
    });
}

}
