import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject, animationFrameScheduler, combineLatest, distinctUntilChanged, endWith, interval, map, switchMap, takeUntil, takeWhile } from 'rxjs';
import { Destroy } from './destroy';

/**
 * Quadratic Ease-Out Function: f(x) = x * (2 - x)
 */
const easeOutQuad = (x: number): number => x * (2 - x);

@Directive({
  selector: '[appCountUpNumbers]',
  providers: [Destroy],
  standalone: true
})
export class CountUpNumbersDirective {
  private readonly count$ = new BehaviorSubject(0);
  private readonly duration$ = new BehaviorSubject(2000);
  private readonly symbol$ = new BehaviorSubject('+');
  private readonly number_delay$ = new BehaviorSubject(2500);

  private readonly currentCount$ = combineLatest([
    this.count$,
    this.duration$,
    this.symbol$,
    this.number_delay$,
  ]).pipe(
    switchMap(([count, duration]) => {
      // get the time when animation is triggered
      const startTime = animationFrameScheduler.now();

      return interval(0, animationFrameScheduler).pipe(
        // calculate elapsed time
        map(() => animationFrameScheduler.now() - startTime),
        // calculate progress
        map((elapsedTime) => elapsedTime / duration),
        // complete when progress is greater than 1
        takeWhile((progress) => progress <= 1),
        // apply quadratic ease-out
        // for faster start and slower end of counting
        map(easeOutQuad),
        // calculate current count
        map((progress) => Math.round(progress * count)),
        // make sure that last emitted value is count
        endWith(count),
        distinctUntilChanged()
      );
    })
  );

  @Input('countUp')
  set count(count: number) {
    this.count$.next(count);
  }

  @Input()
  set duration(duration: number) {
    this.duration$.next(duration);
  }

  @Input()
  set symbol(symbol: string) {
    this._symbol = symbol
    this.symbol$.next(symbol);
  }

  _symbol: string = '+';

  @Input()
  set number_delay(number_delay: number) {
    this._number_delay = number_delay;
    this.number_delay$.next(number_delay);
  }

  _number_delay: number = 2500

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly destroy$: Destroy
  ) {}

  ngOnInit(): void {
    this.displayCurrentCount();
  }

  private displayCurrentCount(): void {
    this.currentCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentCount) => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          `${currentCount.toLocaleString()} ${this._symbol}`
        );
      });
  }
}
