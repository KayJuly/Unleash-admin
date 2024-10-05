import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  headTitle1?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[]
  data?: Menu[]
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public isDisplay: boolean;
  public language: boolean = false;
  public isShow: boolean = false;
  public search!: boolean;

  constructor() { }

  menuItems: Menu[] = [
    {
      headTitle1: "Admin Menu",
    },
    {
      id: 1,
      level: 1,
      title: "Dashboard",
      icon: "home",
      type: "sub",
      active: true,
      children: [
        { path: "/dashboard/calender", title: "Calender", type: "link" },
      ],
    },
    {
      id: 2,
      level: 1,
      title: "Users",
      icon: "user",
      type: "sub",
      active: false,
      children: [
        { path: "/users-page", title: "Profile", type: "link" },
        { path: "/users-page/users-progress", title: "Progress", type: "link" },
      ],
    },
    {
      id: 3,
      level: 1,
      title: "Trainings",
      icon: "learning",
      type: "sub",
      active: false,
      children: [
        { path: "/trainings-page", title: "Trainings Management", type: "link" },
        { path: "/monitoring-training", title: "Monitoring training", type: "link" },
      ],
    },
    // { level: 1, id: 12, path: "/task", bookmark: true, title: "Tasks", icon: "task", type: "link" },
  ]

  horizontalMenu: Menu[] = [{}];

  item = new BehaviorSubject<Menu[]>(this.menuItems);
  horizontalItem = new BehaviorSubject<Menu[]>(this.horizontalMenu);
}

