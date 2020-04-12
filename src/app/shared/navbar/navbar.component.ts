import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Portfolio',
      link: '/portfolio',
    },
    {
      title: 'Videos',
      link: '/videos',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
