webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var update_matche_component_1 = __webpack_require__("./src/app/update-matche/update-matche.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent, pathMatch: 'full' },
    { path: 'update', component: update_matche_component_1.UpdateMatcheComponent, pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h1>\n    <img style=\"height: 20%; width: 20%;\" src=\"../assets/images/fifa2018.png\" alt=\"fifa2018 icon\">\n  </h1>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WorldCup Russia 2018';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var update_matche_component_1 = __webpack_require__("./src/app/update-matche/update-matche.component.ts");
var matches_service_1 = __webpack_require__("./src/app/matches.service.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                update_matche_component_1.UpdateMatcheComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [matches_service_1.MatcheService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".box1 {\n    color: white;\n    width: 400px;\n    height: 850px;\n    padding-top: 10px;\n    margin: 5px;\n    background-color:black;\n    border: 2px solid black;\n    border-radius: 15px;\n}\n.item-a {\n    -ms-grid-column: 1;\n    grid-column: 1;\n}\n.item-b {\n    -ms-grid-column: 2;\n    grid-column: 2;\n}\n.item-c {\n    -ms-grid-column: 3;\n    grid-column: 3;\n}\n.item-d {\n    -ms-grid-column: 4;\n    grid-column: 4;\n}\n.item-e {\n    -ms-grid-column: 5;\n    grid-column: 5;\n}\n.item-f {\n    -ms-grid-column: 6;\n    grid-column: 6;\n}\n.item-g {\n    -ms-grid-column: 7;\n    grid-column: 7;\n}\n.container {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 60px 12px 25px 190px 25px 12px 25px;\n        grid-template-columns: 60px 12px 25px 190px 25px 12px 25px;\n    -ms-grid-rows: 40px 10px;\n        grid-template-rows: 40px 10px;\n    grid-auto-flow: column;\n    -ms-flex-line-pack: start;\n        align-content: flex-start; \n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<marquee behavior=\"scroll\" direction=\"left\"> ***  Next game or In action  ***  Next game or In action ***   Next game or In action  ***</marquee>\n\n<div class=\"tile is-parent\">\n    <article class=\"tile is-child notification is-info\">\n\n\n      <nav class=\"level\">\n          <div class=\"level-item has-text-centered\">\n              <div>\n              <h1><b>{{ nextTime }}</b></h1>\n              <p class=\"heading\">Team Home</p>\n              <p class=\"title\"> {{ teamHome }}</p>\n            </div>\n          </div>\n          <div class=\"level-item has-text-centered\">\n            <div>\n              <p class=\"title\">vs</p>\n            </div>\n          </div>\n          <div class=\"level-item has-text-centered\">\n              <div>\n                <p class=\"heading\">Team Away</p>\n                <p class=\"title\"> {{ teamAway }}</p>\n              </div>\n            </div>\n      </nav>\n    </article>\n</div>\n\n<!-- Image of round -->\n<figure class=\"image is-1x1\">\n    <img src=\"../assets/images/Sweden_Matche.jpg\">\n  </figure>\n\n\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n\n<div class=\"box1\">\n  <progress class=\"progress is-success\" value=\"8\" max=\"16\">50%</progress>\n  <div *ngFor=\"let m of matches\">\n    <section class=\"container\" >\n      <!-- <div class=\"item-a\"> \n        <a href=\"https://www.fifa.com/worldcup/groups/\">{{m.group}}</a> \n      </div>  -->\n      <div class=\"item-a\">\n        <p>{{m.date }}</p>\n      </div>\n      <div class=\"item-c\">\n        <figure class=\"image is-20x20\">\n          <!-- <img src=\"m['teamHomeFlag'] }}\"> -->\n            <img src=\"../assets/images/{{m.teamHome}}.png\" alt=\"Team Home icon\">\n        </figure>\n      </div>\n      <div class=\"item-d\">\n        <a href=\"https://www.fifa.com/worldcup/teams/\"> {{ m['teamHome'] }} {{ m['scoreTeamHome'] }} x {{ m['scoreTeamAway'] }} {{ m['teamAway'] }} </a>\n      </div>\n      <div class=\"item-e\">\n        <figure class=\"image is-20x20\">\n            <!-- <img src=\"m['teamAwayFlag'] }}\"> -->\n          <img src=\"../assets/images/{{m.teamAway}}.png\" alt=\"Team Away icon\">\n        </figure> \n\n      </div>\n      <div *ngIf=\"!m.done; else second\" class=\"item-g\">\n          <p> {{ m.time}}</p>\n      </div>\n      <ng-template #second>\n        <figure class=\"image is-10x10 item-g\">\n          <div class=\"item-f\"><span><img src=\"../assets/images/check.png\"></span></div>\n        </figure> \n        </ng-template>\n\n    </section>\n  </div>\n  </div>\n</div>\n<!-- New Scores table -->\n<figure class=\"image is-1x1\">\n  <img src=\"../assets/images/Tabela.png\">\n</figure>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var matches_service_1 = __webpack_require__("./src/app/matches.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(matcheService) {
        this.matcheService = matcheService;
        this.teamHome = '';
        this.teamAway = '';
        this.nextTime = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getListOfMatches();
    };
    DashboardComponent.prototype.getListOfMatches = function () {
        var _this = this;
        this.matcheService.dashboard(function (res) {
            _this.matches = res;
            // var group  = this.matches[0].group;
            var offset = new Date().getTimezoneOffset();
            var tGame = false;
            for (var i = 0; i < _this.matches.length; i++) {
                var time = parseInt(_this.matches[i].time) - (offset / 60) - 3;
                if (time > 12) {
                    time = time - 12;
                }
                ;
                _this.matches[i].time = time + ':' + '00';
                if (_this.matches[i].scoreTeamHome || _this.matches[i].scoreTeamHome == 0) {
                    _this.matches[i].done = true;
                }
                else if (!tGame) {
                    // this.nextGame = (this.matches[i].teamHome+' x '+this.matches[i].teamAway);
                    _this.teamHome = _this.matches[i].teamHome;
                    _this.teamAway = _this.matches[i].teamAway;
                    _this.nextTime = _this.matches[i].date + ' - ' + _this.matches[i].time;
                    tGame = true;
                    _this.matches[i].done = false;
                }
                _this.matches[i].date = _this.matches[i].date.substr(0, 6);
                // if (this.matches[i].group === group && i>0) {
                //   this.matches[i].group = '';
                // } else {
                //   group = this.matches[i].group;
                // } 
            }
        });
    };
    DashboardComponent.prototype.update = function (id) {
        var _this = this;
        this.matcheService.updateMatche((id), function (res) {
            console.log('This called update matches!');
            _this.getListOfMatches();
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [matches_service_1.MatcheService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/matches.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var Rxjs_1 = __webpack_require__("./node_modules/Rxjs/Rx.js");
var MatcheService = /** @class */ (function () {
    function MatcheService(_http) {
        this._http = _http;
        this.matchesObserver = new Rxjs_1.BehaviorSubject([]);
    }
    MatcheService.prototype.dashboard = function (matches) {
        this._http.get('list').subscribe(function (res) {
            console.log('Success in getting matches: ', res.json());
            matches(res.json());
        }, function (err) {
            console.log('Error in getting matches: ', err);
        });
    };
    MatcheService.prototype.updateMatche = function (matche, callback) {
        this._http.put('/update/' + matche['_id'], { matche: matche }).subscribe(function (res) {
            console.log('Success editing matche', res.json());
            callback(res.json());
        }, function (err) {
            console.log('Something wrong editing matche', err);
        });
    };
    MatcheService.prototype.updateResults = function (matches, callback) {
        this._http.post('matches', { matches: matches }).subscribe(function (res) {
            console.log('Success in loading matches: ', res.json());
            matches(res.json());
        }, function (err) {
            console.log('Error in loading matches: ', err);
        });
    };
    MatcheService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MatcheService);
    return MatcheService;
}());
exports.MatcheService = MatcheService;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/update-matche/update-matche.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-matche/update-matche.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Update new results: </h1>\n\n<button class=\"button\" (click)=\"loadMatches()\">Load Machets</button>\n\n<nav class=\"level\">\n        <div class=\"level-item has-text-centered\">\n          <div>\n            <p class=\"heading\">Tweets</p>\n            <p class=\"title\">Brazil</p>\n          </div>\n        </div>\n        <div class=\"level-item has-text-centered\">\n          <div>\n            <p class=\"heading\">Following</p>\n            <p class=\"title\">Peru</p>\n          </div>\n        </div>\n      </nav>"

/***/ }),

/***/ "./src/app/update-matche/update-matche.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var matches_service_1 = __webpack_require__("./src/app/matches.service.ts");
var UpdateMatcheComponent = /** @class */ (function () {
    function UpdateMatcheComponent(matcheService) {
        this.matcheService = matcheService;
    }
    UpdateMatcheComponent.prototype.ngOnInit = function () {
    };
    UpdateMatcheComponent.prototype.loadMatches = function (matches) {
        console.log('This called update matches!!!!');
        // this.matcheService.updateResults((matches), (res) => {
        //   console.log('This called update matches!');
        //   this.matches = res;
        // });
    };
    UpdateMatcheComponent = __decorate([
        core_1.Component({
            selector: 'app-update-matche',
            template: __webpack_require__("./src/app/update-matche/update-matche.component.html"),
            styles: [__webpack_require__("./src/app/update-matche/update-matche.component.css")]
        }),
        __metadata("design:paramtypes", [matches_service_1.MatcheService])
    ], UpdateMatcheComponent);
    return UpdateMatcheComponent;
}());
exports.UpdateMatcheComponent = UpdateMatcheComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map