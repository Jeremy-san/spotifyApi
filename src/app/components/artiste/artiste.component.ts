import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.scss']
})
export class ArtisteComponent implements OnInit {

  artist: any;
  isLoading: boolean;
  topTracks: any[] = [];

  constructor(private spotify: SpotifyService, private actRouter: ActivatedRoute) {
    this.isLoading = true;

    this.actRouter.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   private getArtist(id: string) {
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.isLoading = false;
    });
  }

  private getTopTracks(idArtist: string) {
    this.spotify.getTopTracks(idArtist)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

}
