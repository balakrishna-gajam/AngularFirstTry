import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GB Krishna - AngularPro';
  appCompName = "gbkrishna";

  public childEventReceiver(data){
      console.log('hi child.. its parent... iam receiving you.. '+data)
  }

}
