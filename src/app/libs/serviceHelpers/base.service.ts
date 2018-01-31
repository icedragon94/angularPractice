import { Injectable } from '@angular/core';


// This is only example. Need to implement with calls from beckend
@Injectable()
export abstract class BaseService<Model> {
    abstract items: Model[];

    public all(): Model[] {
        return this.items;
    }

    public one(id: number): Model {
        return this.items[0];
    }
}