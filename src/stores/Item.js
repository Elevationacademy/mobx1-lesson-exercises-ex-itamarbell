import { observable, action } from 'mobx'

export class Item {
    @observable name
    @observable completed = false
    @observable location = "Super Sell"
    constructor(name) {
        this.name = name
    }
    checkItem (checked) {
       
    } 
}