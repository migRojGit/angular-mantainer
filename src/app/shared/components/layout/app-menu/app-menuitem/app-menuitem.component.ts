import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ApplicationComponent } from 'src/app/application/application.component';
import { MenuService } from 'src/app/services/app.menu.service';



@Component({
  selector: '[app-menuitem]',
  templateUrl: './app-menuitem.component.html',
  host: {
    '[class.active-menuitem]': 'active'
  },
  animations: [
    trigger('children', [
        state('void', style({
            height: '0px'
        })),
        state('hiddenAnimated', style({
            height: '0px'
        })),
        state('visibleAnimated', style({
            height: '*'
        })),
        state('visible', style({
            height: '*',
            'z-index': 100
        })),
        state('hidden', style({
            height: '0px',
            'z-index': '*'
        })),
        transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        transition('void => visibleAnimated, visibleAnimated => void',
            animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {

  @Input() item: any;

  @Input() index: number;

  @Input() root: boolean;

  @Input() parentKey: string;

  active = false;

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  key: string;

  constructor(public app: ApplicationComponent, public router: Router, private menuService: MenuService) {
      this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
          // deactivate current active menu
          if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
              this.active = false;
          }
      });

      this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
          this.active = false;
      });

      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(params => {
              if (this.app.isHorizontal()) {
                  this.active = false;
              } else {
                  if (this.item.routerLink) {
                      this.updateActiveStateFromRoute();
                  } else {
                      this.active = false;
                  }
              }
          });
  }

  ngOnInit() {
      if (!this.app.isHorizontal() && this.item.routerLink) {
          this.updateActiveStateFromRoute();
      }

      this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  updateActiveStateFromRoute() {
      this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
  }

  itemClick(event: Event) {
      // avoid processing disabled items
      if (this.item.disabled) {
          event.preventDefault();
          return true;
      }

      // navigate with hover in horizontal mode
      if (this.root) {
          this.app.menuHoverActive = !this.app.menuHoverActive;
      }

      // notify other items
      this.menuService.onMenuStateChange(this.key);

      // execute command
      if (this.item.command) {
          this.item.command({originalEvent: event, item: this.item});
      }

      // toggle active state
      if (this.item.items) {
          this.active = !this.active;
      } else {
          // activate item
          this.active = true;

          // hide overlay menus
          if (this.app.isMobile()) {
              this.app.sidebarActive = false;
              this.app.mobileMenuActive = false;
          }

          // reset horizontal menu
          if (this.app.isHorizontal()) {
              this.menuService.reset();
          }
      }
  }

  onMouseEnter() {
      // activate item on hover
      if (this.root && this.app.menuHoverActive && this.app.isHorizontal() && this.app.isDesktop()) {
          this.menuService.onMenuStateChange(this.key);
          this.active = true;
      }
  }

  ngOnDestroy() {
      if (this.menuSourceSubscription) {
          this.menuSourceSubscription.unsubscribe();
      }

      if (this.menuResetSubscription) {
          this.menuResetSubscription.unsubscribe();
      }
  }

}

