import {Component, ChangeDetectionStrategy, Input, ContentChildren, QueryList} from '@angular/core';
import {NglProgressItem} from './progress-item';

@Component({
 selector: 'ngl-progress',
 templateUrl: './progress.pug',
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglProgress {
  @ContentChildren(NglProgressItem) items: QueryList<NglProgressItem>;
}
