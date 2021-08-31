function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'TBGAnimation';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["charset", "UTF-8"], [1, "OuterContainer"], [1, "Content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TBG Animation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_content_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]],
      styles: [".OuterContainer[_ngcontent-%COMP%] {\n  row-gap: 3em;\n}\n\n.TopBar[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  border-radius: 25px;\n}\n\n.Content[_ngcontent-%COMP%] {\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3V0ZXJDb250YWluZXIge1xuICByb3ctZ2FwOiAzZW07XG59XG5cbi5Ub3BCYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uQ29udGVudCB7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbiJdfQ== */", ".OuterContainer[_ngcontent-%COMP%] {\n  row-gap: 3em;\n}\n\n.TopBar[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  border-radius: 25px;\n}\n\n.Content[_ngcontent-%COMP%] {\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3V0ZXJDb250YWluZXIge1xuICByb3ctZ2FwOiAzZW07XG59XG5cbi5Ub3BCYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uQ29udGVudCB7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _topbar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./topbar/top-bar.component */
    "./src/app/topbar/top-bar.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _content_angle_selection_angle_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./content/angle-selection/angle-selection.component */
    "./src/app/content/angle-selection/angle-selection.component.ts");
    /* harmony import */


    var _content_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./content/grid/grid.component */
    "./src/app/content/grid/grid.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _content_explainations_explainations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./content/explainations/explainations.component */
    "./src/app/content/explainations/explainations.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _topbar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _content_angle_selection_angle_selection_component__WEBPACK_IMPORTED_MODULE_5__["AngleSelectionComponent"], _content_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _content_explainations_explainations_component__WEBPACK_IMPORTED_MODULE_8__["ExplainationsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _topbar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _content_angle_selection_angle_selection_component__WEBPACK_IMPORTED_MODULE_5__["AngleSelectionComponent"], _content_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _content_explainations_explainations_component__WEBPACK_IMPORTED_MODULE_8__["ExplainationsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/angle-selection/angle-selection.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/content/angle-selection/angle-selection.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AngleSelectionComponent */

  /***/
  function srcAppContentAngleSelectionAngleSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngleSelectionComponent", function () {
      return AngleSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AngleSelectionComponent = /*#__PURE__*/function () {
      function AngleSelectionComponent() {
        _classCallCheck(this, AngleSelectionComponent);

        this.angleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.angle = 0.0;
      }

      _createClass(AngleSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeAngle",
        value: function changeAngle() {
          this.angleChanged.emit(this.angle);
        }
      }]);

      return AngleSelectionComponent;
    }();

    AngleSelectionComponent.ɵfac = function AngleSelectionComponent_Factory(t) {
      return new (t || AngleSelectionComponent)();
    };

    AngleSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AngleSelectionComponent,
      selectors: [["app-angle-selection"]],
      outputs: {
        angleChanged: "angleChanged"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "slideContainer"], ["type", "range", "id", "angleSelection", "min", "-15", "max", "15", "step", "0.01", 1, "slider", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "angleField", 1, "textInput", 3, "ngModel", "ngModelChange"]],
      template: function AngleSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngleSelectionComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.angle = $event;
          })("ngModelChange", function AngleSelectionComponent_Template_input_ngModelChange_1_listener() {
            return ctx.changeAngle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngleSelectionComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.angle = $event;
          })("ngModelChange", function AngleSelectionComponent_Template_input_ngModelChange_2_listener() {
            return ctx.changeAngle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.angle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.angle);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".slideContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 0.5em;\n  display: grid;\n  grid-template-columns: 2.5fr 0.5fr;\n}\n\n.slider[_ngcontent-%COMP%] {\n  grid-column: 1 / 2;\n  margin-top: 0.95em;\n}\n\n.textInput[_ngcontent-%COMP%] {\n  grid-column: 2 / 3;\n  margin-left: 1em;\n  margin-bottom: 0.5em;\n}\n\ninput[type=text][_ngcontent-%COMP%]{\n  font-size: 1.5em;\n  width: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hbmdsZS1zZWxlY3Rpb24vYW5nbGUtc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9hbmdsZS1zZWxlY3Rpb24vYW5nbGUtc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNWZyIDAuNWZyO1xufVxuXG4uc2xpZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBtYXJnaW4tdG9wOiAwLjk1ZW07XG59XG5cbi50ZXh0SW5wdXQge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRde1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogNGVtO1xufVxuIl19 */", ".Content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  row-gap: 0.5em;\n\n}\n\n.AngleSelection[_ngcontent-%COMP%] {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.Grid[_ngcontent-%COMP%] {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.explainations[_ngcontent-%COMP%]{\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  padding-left: 0.5em;\n  padding-right: 2em;\n}\n\n.slideContainer[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\ninput[type=\"range\"][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  height: 3px; \n  background: #969696; \n  outline: none; \n  opacity: 0.7;  \n  transition: opacity .2s;\n}\n\n.slider[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 30px;\n  height: 30px;\n  background: #1e90ff;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #1e90ff;\n  cursor: pointer;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQWdCO09BQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVyxFQUFFLHFCQUFxQjtFQUNsQyxtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxZQUFZLEVBQUUsdURBQXVELEVBQzVDLG9DQUFvQztFQUM3RCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHJvdy1nYXA6IDAuNWVtO1xuXG59XG5cbi5BbmdsZVNlbGVjdGlvbiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uR3JpZCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uZXhwbGFpbmF0aW9uc3tcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDM7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn1cblxuLnNsaWRlQ29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgYmFja2dyb3VuZDogIzk2OTY5NjsgLyogR3JleSBiYWNrZ3JvdW5kICovXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXG4gIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG59XG5cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogIzFlOTBmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMWU5MGZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngleSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-angle-selection',
          templateUrl: './angle-selection.component.html',
          styleUrls: ['./angle-selection.component.css', './../content.component.css']
        }]
      }], function () {
        return [];
      }, {
        angleChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./grid/grid.component */
    "./src/app/content/grid/grid.component.ts");
    /* harmony import */


    var _explainations_explainations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./explainations/explainations.component */
    "./src/app/content/explainations/explainations.component.ts");
    /* harmony import */


    var _angle_selection_angle_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./angle-selection/angle-selection.component */
    "./src/app/content/angle-selection/angle-selection.component.ts");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);

        this.angle = 0.;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeAngle",
        value: function changeAngle(angle) {
          this.angle = angle;
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 4,
      vars: 1,
      consts: [[1, "Content"], [1, "Grid", 3, "angle"], [1, "explainations"], [1, "AngleSelection", 3, "angleChanged"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-grid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-explainations", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-angle-selection", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("angleChanged", function ContentComponent_Template_app_angle_selection_angleChanged_3_listener($event) {
            return ctx.changeAngle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("angle", ctx.angle);
        }
      },
      directives: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _explainations_explainations_component__WEBPACK_IMPORTED_MODULE_2__["ExplainationsComponent"], _angle_selection_angle_selection_component__WEBPACK_IMPORTED_MODULE_3__["AngleSelectionComponent"]],
      styles: [".Content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  row-gap: 0.5em;\n\n}\n\n.AngleSelection[_ngcontent-%COMP%] {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.Grid[_ngcontent-%COMP%] {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.explainations[_ngcontent-%COMP%]{\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  padding-left: 0.5em;\n  padding-right: 2em;\n}\n\n.slideContainer[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\ninput[type=\"range\"][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  height: 3px; \n  background: #969696; \n  outline: none; \n  opacity: 0.7;  \n  transition: opacity .2s;\n}\n\n.slider[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 30px;\n  height: 30px;\n  background: #1e90ff;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #1e90ff;\n  cursor: pointer;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQWdCO09BQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVyxFQUFFLHFCQUFxQjtFQUNsQyxtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxZQUFZLEVBQUUsdURBQXVELEVBQzVDLG9DQUFvQztFQUM3RCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHJvdy1nYXA6IDAuNWVtO1xuXG59XG5cbi5BbmdsZVNlbGVjdGlvbiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uR3JpZCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uZXhwbGFpbmF0aW9uc3tcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDM7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn1cblxuLnNsaWRlQ29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgYmFja2dyb3VuZDogIzk2OTY5NjsgLyogR3JleSBiYWNrZ3JvdW5kICovXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXG4gIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG59XG5cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogIzFlOTBmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMWU5MGZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          template: "\n    <div class=\"Content\">\n      <app-grid class=\"Grid\" [angle] = \"angle\"></app-grid>\n      <app-explainations class=\"explainations\"></app-explainations>\n      <app-angle-selection class=\"AngleSelection\" (angleChanged)=\"changeAngle($event)\"></app-angle-selection>\n    </div>\n  ",
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/explainations/explainations.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/content/explainations/explainations.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExplainationsComponent */

  /***/
  function srcAppContentExplainationsExplainationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplainationsComponent", function () {
      return ExplainationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExplainationsComponent = /*#__PURE__*/function () {
      function ExplainationsComponent() {
        _classCallCheck(this, ExplainationsComponent);
      }

      _createClass(ExplainationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExplainationsComponent;
    }();

    ExplainationsComponent.ɵfac = function ExplainationsComponent_Factory(t) {
      return new (t || ExplainationsComponent)();
    };

    ExplainationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExplainationsComponent,
      selectors: [["app-explainations"]],
      decls: 51,
      vars: 0,
      consts: [[1, "text"], ["href", "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/Graphene", "target", "_blank"], ["href", "http://jarilloherrero.mit.edu/", "target", "_blank"], ["href", "https://www.mit.edu/", "target", "_blank"], ["href", "https://www.nature.com/articles/nature26160", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/Twistronics", "target", "_blank"], ["href", "mailto: christian.eckhardt@mpsd.mpg.de", "target", "_blank"], ["href", "https://lab.sentef.org/", "target", "_blank"], ["href", "https://github.com/ce335805/TBGAnimator", "target", "_blank"]],
      template: function ExplainationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Moir\xE9 Patterns and Twisted Bilayer Graphene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This app interactively introduces the principle of Moir\xE9 patterns. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " According to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wikipedia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ": \" [...] moir\xE9 patterns [...] are large-scale interference patterns that can be produced when an opaque ruled pattern with transparent gaps is overlaid on another similar pattern.\" In the here shown case the Moir\xE9 pattern is produced by overlaying two hexagonal lattice-structures with one another twisting the upper one by a chosen angle - try it out! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Relation to Physics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Moir\xE9 pattern on the left resembles that of twisted bilayer graphene. This is a material that is formed by placing two hexagonal lattices of Carbon atoms (so called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Graphene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ") ontop of each other and twisting them. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " In 2018 the group of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pablo Jarillo-Herrero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " found fascinating physical properties of this material - espacially at a so called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "magic angle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " of 1.05\xB0 - type it in and look at the pattern! They published their results in the journal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "nature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " By now there exist many more examples of materials that realize a Moir\xE9 pattern. Their properties are subject to intense research under the topic of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Twistronics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Want to learn more?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Fell free to contanct me via ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " or visit our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "group-website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " You can check out the code for this animation on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #93291b;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: 'Enriqueta', arial, serif;\n  line-height: 1.25;\n  margin: 0 0 10px;\n  font-size: 40px;\n  font-weight: bold;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: 'Enriqueta', arial, serif;\n  line-height: 1.25;\n  margin: 0 0 10px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #333333\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #93291b;\n  text-decoration: none;\n}\n\np[_ngcontent-%COMP%] {\n  color: #333333;\n  font-family: \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.5625;\n  margin-bottom: 15px;\n}\n\na.read-more[_ngcontent-%COMP%] {\n  background-color: #93291b;\n  border: 1px solid #333333;\n  border-radius: 3px 3px 3px 3px;\n  box-shadow: 0 0 1px #93291b inset;\n  color: #f5f5f5;\n  padding: 5px;\n}\n\na.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #be3523;\n  border-radius: 3px 3px 3px 3px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9leHBsYWluYXRpb25zL2V4cGxhaW5hdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9leHBsYWluYXRpb25zL2V4cGxhaW5hdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEsXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzkzMjkxYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0VucmlxdWV0YScsIGFyaWFsLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdFbnJpcXVldGEnLCBhcmlhbCwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMSBhLFxuaDEgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMzMzMzMzNcbn1cblxuaDEgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTMyOTFiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnAge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTYyNTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuYS5yZWFkLW1vcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMyOTFiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzkzMjkxYiBpbnNldDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuYS5yZWFkLW1vcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUzNTIzO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuIl19 */", ".OuterContainer[_ngcontent-%COMP%] {\n  row-gap: 3em;\n}\n\n.TopBar[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  border-radius: 25px;\n}\n\n.Content[_ngcontent-%COMP%] {\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3V0ZXJDb250YWluZXIge1xuICByb3ctZ2FwOiAzZW07XG59XG5cbi5Ub3BCYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uQ29udGVudCB7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExplainationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-explainations',
          templateUrl: './explainations.component.html',
          styleUrls: ['./explainations.component.css', '../../app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/grid/grid.component.ts":
  /*!************************************************!*\
    !*** ./src/app/content/grid/grid.component.ts ***!
    \************************************************/

  /*! exports provided: GridComponent */

  /***/
  function srcAppContentGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
      return GridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["gridCanvas"];

    var GridComponent = /*#__PURE__*/function () {
      function GridComponent() {
        _classCallCheck(this, GridComponent);

        this.viewInitialized = false;
        this.angle = 0.;
        this.unitLength = 10;
        this.frameWidth = 1131;
        this.frameHeight = 800;
        this.gridWidth = this.frameWidth / 1.2;
        this.gridHeight = this.frameHeight / 1.2;
        this.sin60 = 0.86602540378;
        this.cos60 = 0.5;
      }

      _createClass(GridComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.viewInitialized) {
            return;
          }

          this.draw();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.viewInitialized = true;
          this.context = this.gridCanvas.nativeElement.getContext('2d');
          this.draw();
        }
      }, {
        key: "onMouseWheel",
        value: function onMouseWheel(event) {
          this.onScroll(event);
        }
      }, {
        key: "onScroll",
        value: function onScroll(e) {
          if (e.deltaY > 0 && this.unitLength > 3) {
            this.unitLength = this.unitLength - 0.02 * this.unitLength;
          } else if (e.deltaY < 0 && this.unitLength < 30) {
            this.unitLength = this.unitLength + 0.02 * this.unitLength;
          }

          this.draw();
        }
      }, {
        key: "draw",
        value: function draw() {
          this.context.save();
          this.context.clearRect(0, 0, this.frameWidth, this.frameHeight);
          this.drawScale();
          this.context.strokeStyle = 'rgb(0,64,255)';
          this.context.lineWidth = 1.5;
          this.drawHexagonGrid();
          this.context.translate(this.frameWidth / 2, this.frameHeight / 2);
          this.context.rotate(Math.PI / 180 * this.angle);
          this.context.translate(-this.frameWidth / 2, -this.frameHeight / 2);
          this.context.strokeStyle = 'rgb(0,187,4)';
          this.drawHexagonGrid();
          this.context.restore();
        }
      }, {
        key: "drawHexagonGrid",
        value: function drawHexagonGrid() {
          this.context.save();
          var hightOfLine = (1 + this.cos60) * this.unitLength;
          var widthOfColumn = 2 * this.sin60 * this.unitLength;
          this.context.translate((this.frameWidth - this.gridWidth) / 2, (this.frameHeight - this.gridHeight) / 2);
          var numberOfLines = this.gridHeight / Math.floor(hightOfLine);

          for (var line = 0; line < numberOfLines; line++) {
            var parity = 2 * (line % 2) - 1;
            var numberOfColumns = this.gridWidth / Math.floor(widthOfColumn);
            this.drawLine(numberOfColumns);
            this.context.translate(parity * this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
          }

          this.context.restore();
        }
      }, {
        key: "drawLine",
        value: function drawLine(numberInLine) {
          this.context.save();

          for (var col = 0; col < numberInLine; col++) {
            this.drawHexagon();
            this.context.translate(2 * this.sin60 * this.unitLength, 0);
          }

          this.context.restore();
        }
      }, {
        key: "drawHexagon",
        value: function drawHexagon() {
          this.context.beginPath();
          this.context.moveTo(-this.sin60 * this.unitLength, this.cos60 * this.unitLength);
          this.context.lineTo(-this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
          this.context.lineTo(0, (2 * this.cos60 + 1) * this.unitLength);
          this.context.lineTo(this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
          this.context.lineTo(this.sin60 * this.unitLength, this.cos60 * this.unitLength);
          this.context.stroke();
        }
      }, {
        key: "drawScale",
        value: function drawScale() {
          this.context.save();
          var nm = this.unitLength / 0.142;
          var yOffset = this.frameHeight - this.gridHeight;
          var fontSize = 20;
          this.context.font = fontSize + 'px Arial';
          this.context.beginPath();
          this.context.moveTo(5, yOffset);
          this.context.lineTo(15, yOffset);
          this.context.moveTo(10, yOffset);
          this.context.lineTo(10, nm + yOffset);
          this.context.moveTo(5, nm + yOffset);
          this.context.lineTo(15, nm + yOffset);
          this.context.strokeStyle = 'rgb(40,40,40)';
          this.context.lineWidth = 2;
          this.context.stroke();
          this.context.fillText('1nm', fontSize / 2 + 8, yOffset + nm / 2 + fontSize / 4, 100);
          this.context.restore();
        }
      }]);

      return GridComponent;
    }();

    GridComponent.ɵfac = function GridComponent_Factory(t) {
      return new (t || GridComponent)();
    };

    GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridComponent,
      selectors: [["app-grid"]],
      viewQuery: function GridComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridCanvas = _t.first);
        }
      },
      hostBindings: function GridComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function GridComponent_wheel_HostBindingHandler($event) {
            return ctx.onMouseWheel($event);
          });
        }
      },
      inputs: {
        angle: "angle"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "grid"], [3, "width", "height"], ["gridCanvas", ""]],
      template: function GridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.frameWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.frameHeight);
        }
      },
      styles: ["canvas[_ngcontent-%COMP%] {\n  border: 2px solid rgba(0,0,0,0);\n  transition: 300ms;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ncmlkL2dyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9ncmlkL2dyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid',
          templateUrl: './grid.component.html',
          styleUrls: ['./grid.component.css']
        }]
      }], function () {
        return [];
      }, {
        gridCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gridCanvas', {
            "static": false
          }]
        }],
        angle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseWheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['wheel', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/topbar/top-bar.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/topbar/top-bar.component.ts ***!
    \*********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopbarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)();
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 3,
      vars: 0,
      consts: [[1, "HeaderWriting"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Twisted Bilayer Graphene (TBG) Animator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".HeaderWriting[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Noto Sans, sans-serif;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5IZWFkZXJXcml0aW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogTm90byBTYW5zLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          template: "\n    <div class=\"HeaderWriting\">\n      <h1>Twisted Bilayer Graphene (TBG) Animator</h1>\n    </div>\n  ",
          styleUrls: ['./top-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/chris/SoftwareEngineering/codebase/TBGAnimation/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map