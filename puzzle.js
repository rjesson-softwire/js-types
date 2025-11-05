const a = {
    b: 2,
    valueOf: function() {return a.b++;}
};

if (a == 2 && a == 3) {
    console.log('How on earth did you get here?');
}