import xlsxj from 'xlsx-to-json';

xlsxj({
    input: "prices.xlsx",
    output: "prices.json",
    sheet: "доставка"
}, function(err, result) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    }
});