import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
public chapters = [
{ 
  title: "Chapter 1 | The Beginning of the End",
url: "/chapter1",
pg: 1
}, 
{
  title: 'Chapter 2 | The Time it wasn\'t the End ',
  url: '/chapter2', 
  pg: 2
  }, 
  {
    title: 'Chapter 3 | The Time it was Almost the End ',
    url: '/chapter3', 
    pg: 3
    }, 
    {
      title: 'Chapter 4 | The End of the End ',
      url: '/chapter4', 
      pg: 4
      }, 
      {
        title: 'Chapter 5 | The Real, Actual End of the Beginning',
        url: '/chapter5', 
        pg: 5
        }
]
  constructor() { }

  ngOnInit() {
  }

}
