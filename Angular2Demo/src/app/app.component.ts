import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                <h1>{{getfullName()}}</h1>
                <input type='text' id='txtinput' value='Narasimha'>
                <button [disabled]='isDisabled'>Click Me</button>
                <button disabled='{{isDisabled}}'>Click Me</button>

                <h1>{{pageHeader ? pageHeader : 'No Header'}}</h1>
                <img src={{imagePath}} class="img-rounded"/>
                <img [src] ='imagePath' class="img-responsive"/>
                <span [innerHtml]='goodHtml'></span>
                <my-employee></my-employee>
               </div>`
})
export class AppComponent {
    pageHeader: string = null;
    imagePath: string = 'https://scotch.io/wp-content/uploads/2014/01/angular-forms.jpg';

    firstName: string = 'John';
    lastName: string = 'Mark';

    isDisabled: boolean = false;

    goodHtml: string = 'Good Html';
    getfullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
