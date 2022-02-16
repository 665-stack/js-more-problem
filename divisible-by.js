// akhane kono shogkha 3 diye divide kora gele likte hove 'foo', 5 diye divide kora gele likte hove 'bar'. abong 3 o 5 duita diyei divide kora gele likte hove 'foobar'. ar jodi kono shogkha diyei divide kora na jay taile shobgulo shongkhai dekhabe
for (let i = 1; i <= 50; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('foobar')
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i)

    }
}
