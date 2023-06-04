import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
MovieApiServiceService;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  moveieDetailsResult: any;
  movieVideo: any;
  movieCast: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId#');

    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.service.movieDetails(id).subscribe((result: any) => {
      console.log(result, 'getMovieDetails##');
      this.moveieDetailsResult = result;
    });
  }

  getVideo(id: any) {
    this.service.movieTrailer(id).subscribe((result: any) => {
      console.log(result, 'getMovietrailer##');
      result.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.movieVideo = element.key;
        }
      });
    });
  }

  getCast(id: any) {
    this.service.movieCast(id).subscribe((result: any) => {
      console.log(result, 'movieCast##');
      this.movieCast = result.cast;
    });
  }
}
