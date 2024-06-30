import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })

export class RouterService {

    routingEvent: EventEmitter<string> = new EventEmitter<string>();

    emitRoutingEvent(route: string): void {
        this.routingEvent.emit(route);
    }

}