"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var restaurant_list_component_1 = require("./restaurant-list.component");
var restaurant_services_1 = require("./services/restaurant.services");
var RestaurantModule = (function () {
    function RestaurantModule() {
    }
    return RestaurantModule;
}());
RestaurantModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [restaurant_list_component_1.RestaurantListComponent],
        exports: [restaurant_list_component_1.RestaurantListComponent],
        providers: [restaurant_services_1.RestaurantServices] // DECLARER DES SERVICES
    })
], RestaurantModule);
exports.RestaurantModule = RestaurantModule;
//# sourceMappingURL=restaurant.module.js.map