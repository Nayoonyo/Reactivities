import { action, makeObservable, observable } from 'mobx';

export default class CounterStore {
    title= 'Counter Store';
    count = 42 ;
    events: string[]=[
        `Initial count is ${this.count}`,
    ]

    constructor() {
        makeObservable(this,{
            title: observable,
            count: observable,
            increment: action.bound,
            decrement: action
        });
    }

    increment = (amount =1)=>{
        this.count += amount;
        this.events.push(`Incremented by ${amount}, new count is ${this.count}`);
    }

    decrement =(amount = 1)=>{
        this.count -= amount;
        this.events.push(`Decremented by ${amount}, new count is ${this.count}`);
    }

    get eventCount() {
        return this.events.length;
    }
}