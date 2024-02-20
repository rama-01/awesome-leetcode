export class MyCalendar {
    dates: [number, number][] = []

    get sortedDates() {
        return this.dates.sort((a, b) => a[0] - b[0])
    }

    book(val1: number, val2: number) {
        if (!this.dates.length) {
            this.dates.push([val1, val2])
        }
        for (let i = 0, n = this.sortedDates.length; i < n; i++) {
            if (i === 0 && val2 < this.sortedDates[i][0]) {
                this.dates.push([val1, val2])
            } else if (i === n - 1 && val1 >= this.sortedDates[i][1]) {
                this.dates.push([val1, val2])
            } else if (val1 >= this.sortedDates[i][1] && val2 < this.sortedDates[i + 1][0]) {
                this.sortedDates.push([val1, val2])
            }
        }
    }
}
