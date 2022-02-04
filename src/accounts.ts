import { getRandomId } from "./utils.js";

export interface Entry {
    id: number;
    concept: string;
    amount: number;
    category : CategoryEnum;
}

export enum CategoryEnum {
    expense = "Expense",
    income = "Income"
}

export interface Account {
    id: number;
    name: string;
    addEntry(entry:Entry) : boolean;
    deleteEntryById(id:number) : boolean;
    getBalance() :number;
    getEntries() :Entry[]
}

export class Account implements Account {
    private entries: Entry[];
    private balance: number;

    constructor( account: Account = {} as Account) {
        this.id = account.id || getRandomId();
        this.name = account.name || "Nueva Cuenta";
        this.entries = account.entries || [];
        this.balance = account.balance ||  0;
    }


    addEntry(entry: Entry): boolean {
        this.entries.push(entry);
        this.updateBalance();
        return true;
    }

}

