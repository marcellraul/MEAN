import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = []
  constructor( private photoService: PhotoService, private router : Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe( 
        res => {
          this.photos = res,
          console.log(res)},
        err => console.log(err))
  }
  selectedCard(id :string){
    this.router.navigate(['/photos', id])// lo pasamos a travews del enrutar, importamos alla
    //console.log(id) se hace en el preview
    //this.photoService.getPhoto(id)
      //.subscribe( res => console.log(res),
      //err => console.log(err))
  }

}
