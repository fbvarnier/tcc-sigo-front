import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, cogIcon } from '@cds/core/icon';
import { environment } from 'src/environments/environment';

ClarityIcons.addIcons(cogIcon);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tcc-sigo-front';

  webapiurl = environment.webapiurl;

}
