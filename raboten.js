function solve() {
    var date = new Date("July 20, 2016 15:00:00");
    var nextDate = date.getDate() + 20;
    date.setDate(nextDate);
    var newDate = date.toLocaleString();
console.log(date)
}
solve()