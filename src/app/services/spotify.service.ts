import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    console.log('hello');

    const headers = new HttpHeaders({
      Authorization:
      // tslint:disable-next-line: max-line-length
      'Bearer BQDGfCtbTXl_w2EKrWetBSoeh6yX0pc0rRqj7RRS2PPjGIkcmRdRANQBQARSielNBVWX4IH21QKWSVV-shKbY8zZuuc7Mwqmsl2qyFKNkkgy0kpKj0pMQfA4hDOtLPoTQ_sFqiKJAzAcwYz7i4f1R7zBKcDvY8c6wE_eSlo&refresh_token=AQD0iCQq5wOFkPYOhxHxL7xRcfP16jCezBKIpf3faJ3KgQYjQWh66ODBZMRfCUxL95X7U6xW2DcA3GRRKMYaA74qMLRl6S9P4RU861X_OH-8AtdZ1R3nFkFp59lyeXtZyA4'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map(data => data['albums'].items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(idArtist: string) {
    return this.getQuery(`artists/${idArtist}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));

  }
}
