import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuService } from '../services/app.menu.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html'
})
export class ApplicationComponent implements OnInit {

  public menuClick!: boolean;

  public menuButtonClick!: boolean;

  public topbarMenuButtonClick!: boolean;

  public topbarMenuClick!: boolean;

  public topbarMenuActive!: boolean;

  public activeTopbarItem!: Element;

  public layoutMode: string = 'overlay';

  public sidebarActive!: boolean;

  public mobileMenuActive!: boolean;

  public darkMenu: boolean = false;

  public isRTL: boolean = false;

  public menuHoverActive!: boolean;

  public resetMenu!: boolean;

  public configActive!: boolean;

  public configClick!: boolean;

  public inputStyle: string = 'outlined';

  public ripple: boolean = true;

 public compactMode: boolean = false;

   constructor(
       private menuService: MenuService,
       private primengConfig: PrimeNGConfig
   ) { }

   ngOnInit(): void {
     this.primengConfig.ripple = true;
   }
   onWrapperClick() {
     if (!this.menuClick && !this.menuButtonClick) {
         this.mobileMenuActive = false;
     }

     if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
         this.topbarMenuActive = false;
         this.activeTopbarItem = null;
     }

     if (!this.menuClick) {
         if (this.isHorizontal()) {
             this.menuService.reset();
         }

         this.menuHoverActive = false;
     }

     if (this.configActive && !this.configClick) {
         this.configActive = false;
     }

     this.configClick = false;
     this.menuClick = false;
     this.menuButtonClick = false;
     this.topbarMenuClick = false;
     this.topbarMenuButtonClick = false;
 }

 onMenuButtonClick(event: Event) {
     this.menuButtonClick = true;

     if (this.isMobile()) {
         this.mobileMenuActive = !this.mobileMenuActive;
     }

     event.preventDefault();
 }

 onTopbarMobileMenuButtonClick(event: Event) {
     this.topbarMenuButtonClick = true;
     this.topbarMenuActive = !this.topbarMenuActive;
     event.preventDefault();
 }

 onTopbarRootItemClick(event: Event, item: Element) {
     if (this.activeTopbarItem === item) {
         this.activeTopbarItem = null; } else {
         this.activeTopbarItem = item; }

     event.preventDefault();
 }

 onTopbarMenuClick(event: Event) {
     this.topbarMenuClick = true;
 }

 onSidebarClick(event: Event) {
     this.menuClick = true;
     this.resetMenu = false;
 }

 onConfigClick(event) {
     this.configClick = true;
 }

 onRippleChange(event) {
     this.ripple = event.checked;
 }

 onToggleMenuClick(event: Event) {
     this.layoutMode = this.layoutMode !== 'static' ? 'static' : 'overlay';
     event.preventDefault();
 }

 isMobile() {
     return window.innerWidth <= 1024;
 }

 isTablet() {
     const width = window.innerWidth;
     return width <= 1024 && width > 640;
 }

 isDesktop() {
     return window.innerWidth > 1024;
 }

 isHorizontal() {
     return this.layoutMode === 'horizontal';
 }

 isOverlay() {
     return this.layoutMode === 'overlay';
 }

}
