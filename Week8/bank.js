class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    getAccount(name) {
        return this.accounts.find(acc => acc.name === name);
    }

    totalVolume() {
        return this.accounts.reduce((sum, acc) => sum + acc.currentAmount, 0);
    }

    richestUser() {
        if (this.accounts.length === 0) return null;
        return this.accounts.reduce((max, acc) =>
            acc.currentAmount > max.currentAmount ? acc : max
        );
    }

    transfer(fromName, toName, amount) {
        const fromAcc = this.getAccount(fromName);
        const toAcc = this.getAccount(toName);

        if (!fromAcc || !toAcc) {
            console.log("One of the accounts does not exist");
            return;
        }

        if (fromAcc.currentAmount < amount) {
            console.log("Insufficient funds for transfer");
            return;
        }

        fromAcc.transaction.push(new Transaction("w", amount));
        fromAcc.currentAmount -= amount;

        toAcc.transaction.push(new Transaction("d", amount));
        toAcc.currentAmount += amount;

        console.log(`Transferred ${amount} from ${fromName} to ${toName}`);
    }
}
