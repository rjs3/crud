import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   // tslint:disable-next-line:curly
   if (!items) return [];
   return items.filter(it => it[field] === value);
 }
}
