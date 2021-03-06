"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = null;
        this.imagePath = 'https://scotch.io/wp-content/uploads/2014/01/angular-forms.jpg';
        this.firstName = 'John';
        this.lastName = 'Mark';
        this.isDisabled = false;
        this.goodHtml = 'Good Html';
    }
    AppComponent.prototype.getfullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                <h1>{{getfullName()}}</h1>\n                <input type='text' id='txtinput' value='Narasimha'>\n                <button [disabled]='isDisabled'>Click Me</button>\n                <button disabled='{{isDisabled}}'>Click Me</button>\n\n                <h1>{{pageHeader ? pageHeader : 'No Header'}}</h1>\n                <img src={{imagePath}} class=\"img-rounded\"/>\n                <img [src] ='imagePath' class=\"img-responsive\"/>\n                <span [innerHtml]='goodHtml'></span>\n                <my-employee></my-employee>\n               </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map