import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class PageComponent implements OnInit {
  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=ONZlNE4S&id=444C34980714DC1D3B98D911CEB3B3D33F61CCD8&thid=OIP.ONZlNE4Sq3gpjKk4L5P6sQHaFj&mediaurl=https%3a%2f%2fwww.ohmybuhay.com%2fwp-content%2fuploads%2f2019%2f07%2fBC44D4A8-8C6D-401E-999A-A1E637ACC722.jpeg&exph=3024&expw=4032&q=buildings&simid=608026902711376172&FORM=IRPRST&ck=F25336D35C45C6B335289C16551FA076&selectedIndex=12'
  };

  constructor() { }

  ngOnInit() { }
}
