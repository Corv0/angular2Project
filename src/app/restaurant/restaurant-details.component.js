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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurant_services_1 = require("./services/restaurant.services");
var RestaurantDetailsComponent = (function () {
    function RestaurantDetailsComponent(route, router, _restoServices) {
        this.route = route;
        this.router = router;
        this._restoServices = _restoServices;
        this.title = "";
    }
    RestaurantDetailsComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var id = this.route.snapshot.params['id'];
        this.resto = this._restoServices.getRestaurantById(id);
        console.log(this.resto);
        console.log("ID detailPage " + id);
    };
    RestaurantDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/restaurant']);
    };
    return RestaurantDetailsComponent;
}());
RestaurantDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "resto-details",
        templateUrl: "restaurant-details.component.html",
        styleUrls: ['./css/restaurant.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, restaurant_services_1.RestaurantServices])
], RestaurantDetailsComponent);
exports.RestaurantDetailsComponent = RestaurantDetailsComponent;
//# sourceMappingURL=restaurant-details.component.js.map