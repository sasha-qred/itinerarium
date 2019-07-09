import { Injectable } from '@angular/core';
import { endOfDay, format, isFriday, startOfDay } from 'date-fns';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en';
import ruLocale from 'date-fns/locale/ru';
import zh_cnLocale from 'date-fns/locale/zh_cn';
import { of, pipe } from 'rxjs';
import { delay, map } from 'rxjs/operators';

type Locale = 'de' | 'en' | 'ru' | 'zh_cn';
type DateInfo = string | number | Date;

@Injectable({
  providedIn: 'root',
})
export class HttpMockService {
  public getCurrentDate(locale?: Locale) {
    return of(Date.now()).pipe(this.dateFormat(locale));
  }

  public getStartOfDate(targetDate: DateInfo, locale?: Locale) {
    return of(targetDate).pipe(
      map((date) => startOfDay(date)),
      this.dateFormat(locale),
    );
  }

  public getEndOfDate(targetDate: DateInfo, locale?: Locale) {
    return of(targetDate).pipe(
      map((date) => endOfDay(date)),
      this.dateFormat(locale),
    );
  }

  public isFriday(targetDate: DateInfo) {
    return of(targetDate).pipe(map((date) => isFriday(date)));
  }

  private dateFormat(locale: Locale) {
    return pipe(
      map((timestamp: DateInfo) =>
        format(timestamp, 'Do MMMM YYYY HH:mm', {
          locale: this.getLocale(locale),
        }),
      ),
      delay(1000),
    );
  }

  private getLocale(locale: Locale) {
    switch (locale) {
      case 'de': {
        return deLocale;
      }
      case 'ru': {
        return ruLocale;
      }
      case 'zh_cn': {
        return zh_cnLocale;
      }
      default: {
        return enLocale;
      }
    }
  }
}
