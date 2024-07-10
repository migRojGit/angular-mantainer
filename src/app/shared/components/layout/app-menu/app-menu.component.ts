import { Component, OnInit } from '@angular/core';
import { ApplicationComponent } from 'src/app/application/application.component';


@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit {

  public model!: any[];
  public notIcon: boolean = true;


  public stateOnline:boolean = true;
  public stateOnlineOff:boolean = false;
  public stateOnlineAfk:boolean = false;

  constructor(
      public app: ApplicationComponent,
      ) {}

  ngOnInit() {



    this.model = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['dashboard'] },
      { label: 'Búsqueda', icon: 'pi pi-fw pi-search', routerLink: ['search'] },
      {
        label: 'Resumen',
        icon: 'pi pi-fw pi-book',
        routerLink: ['resume'],
        badge: 6,
        // items: [
        //   {
        //     label: 'Form Layout',
        //     icon: 'pi pi-fw pi-id-card',
        //     routerLink: ['/uikit/formlayout'],
        //   },
        //   {
        //     label: 'Input',
        //     icon: 'pi pi-fw pi-check-square',
        //     routerLink: ['/uikit/input'],
        //   },
        //   {
        //     label: 'Button',
        //     icon: 'pi pi-fw pi-mobile',
        //     routerLink: ['/uikit/button'],
        //     class: 'rotated-icon',
        //   },
        //   {
        //     label: 'Table',
        //     icon: 'pi pi-fw pi-table',
        //     routerLink: ['/uikit/table'],
        //   },
        //   {
        //     label: 'List',
        //     icon: 'pi pi-fw pi-list',
        //     routerLink: ['/uikit/list'],
        //   },
        //   {
        //     label: 'Tree',
        //     icon: 'pi pi-fw pi-share-alt',
        //     routerLink: ['/uikit/tree'],
        //   },
        //   {
        //     label: 'Panel',
        //     icon: 'pi pi-fw pi-tablet',
        //     routerLink: ['/uikit/panel'],
        //   },
        //   {
        //     label: 'Overlay',
        //     icon: 'pi pi-fw pi-clone',
        //     routerLink: ['/uikit/overlay'],
        //   },
        //   {
        //     label: 'Media',
        //     icon: 'pi pi-fw pi-image',
        //     routerLink: ['/uikit/media'],
        //   },
        //   {
        //     label: 'Menu',
        //     icon: 'pi pi-fw pi-bars',
        //     routerLink: ['/uikit/menu'],
        //   },
        //   {
        //     label: 'Message',
        //     icon: 'pi pi-fw pi-comment',
        //     routerLink: ['/uikit/message'],
        //   },
        //   {
        //     label: 'File',
        //     icon: 'pi pi-fw pi-file',
        //     routerLink: ['/uikit/file'],
        //   },
        //   {
        //     label: 'Chart',
        //     icon: 'pi pi-fw pi-chart-bar',
        //     routerLink: ['/uikit/charts'],
        //   },
        //   {
        //     label: 'Misc',
        //     icon: 'pi pi-fw pi-circle-off',
        //     routerLink: ['/uikit/misc'],
        //   },
        // ],
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['products'],
        items: [
          {
            label: 'Item I',
            icon: 'pi pi-fw pi-desktop',
            // routerLink: ['utilities/display'],
          },
          {
            label: 'Item II',
            icon: 'pi pi-fw pi-external-link',
            // routerLink: ['utilities/elevation'],
          },
          {
            label: 'Item III',
            icon: 'pi pi-fw pi-directions',
            // routerLink: ['utilities/flexbox'],
          },
          {
            label: 'Item IV',
            icon: 'pi pi-fw pi-search',
            // routerLink: ['utilities/icons'],
          },
          {
            label: 'Item V',
            icon: 'pi pi-fw pi-pencil',
            // routerLink: ['utilities/text'],
          },
          {
            label: 'Item VI',
            icon: 'pi pi-fw pi-star-o',
            // routerLink: ['utilities/widgets'],
          },
          {
            label: 'Item VII',
            icon: 'pi pi-fw pi-th-large',
            // routerLink: ['utilities/grid'],
          },
          {
            label: 'Item VIII',
            icon: 'pi pi-fw pi-arrow-right',
            // routerLink: ['utilities/spacing'],
          },
          {
            label: 'Item IX',
            icon: 'pi pi-fw pi-align-center',
            // routerLink: ['utilities/typography'],
          },
        ],
      },
      {
        label: 'Atención',
        icon: 'pi pi-fw pi-users',
        badge: 8,
        badgeStyleClass: 'teal-badge',
        items: [
          {
            label: 'Item I',
            icon: 'pi pi-fw pi-pencil',
            // routerLink: ['/pages/crud'],
          },
          {
            label: 'Item II',
            icon: 'pi pi-fw pi-calendar-plus',
            // routerLink: ['/pages/calendar'],
          },
          {
            label: 'Item III',
            icon: 'pi pi-fw pi-globe',
            // url: 'assets/pages/landing.html',
            // target: '_blank',
          },
          {
            label: 'Item IV',
            icon: 'pi pi-fw pi-sign-in',
            // routerLink: ['/login'],
          },
          {
            label: 'Item V',
            icon: 'pi pi-fw pi-dollar',
            // routerLink: ['/pages/invoice'],
          },
          {
            label: 'Item VI',
            icon: 'pi pi-fw pi-question-circle',
            // routerLink: ['/pages/help'],
          },
          {
            label: 'Item VII',
            icon: 'pi pi-fw pi-times-circle',
            // routerLink: ['/error'],
          },
          {
            label: 'Item VIII',
            icon: 'pi pi-fw pi-exclamation-circle',
            // routerLink: ['/notfound'],
          },
          {
            label: 'Item IX',
            icon: 'pi pi-fw pi-lock',
            // routerLink: ['/access'],
          },
          {
            label: 'Item X',
            icon: 'pi pi-fw pi-circle-off',
            // routerLink: ['/pages/empty'],
          },
        ],
      },
      {
        label: 'Transacciones',
        icon: 'pi pi-fw pi-sync',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
                ],
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
                ],
              },
            ],
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
                ],
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Reclamos',
        icon: 'pi pi-fw pi-thumbs-down',
        routerLink: ['claims']
      },
      {
        label: 'Documentación',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: ['documentation'],
      },
    ];
  }

  onMenuClick() {
    this.app.menuClick = true;
  }

}

