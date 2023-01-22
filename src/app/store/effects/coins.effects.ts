import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable()
export class CoinsEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Coins API] Fetch Coins'),
    mergeMap(() => this.apiService.getCoins()
      .pipe(
        map(coinsRes => ({ type: '[Coins API] Fetch Coins Success', payload: coinsRes })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
