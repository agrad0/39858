let bar1 = "Uwielbiam JavaScript";
let bar2 = "Jestem świetnym programistą";
function CompareLength(var1, var2){
    if (var1.length > var2.length) {
        return var1 + 'is longer';
    }   else if (var2.length > var1.length) {
        return var2 + 'is longer';
    }
}
console.log(CompareLength(bar1, bar2));