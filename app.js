function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var n = canvas.width;
    var iterations = n;

    x_old = new Array(n + 2).join('0').split('');
    x = new Array(n + 2).join('0').split('');

    if (n % 2 == 0) {
        x[(n / 2)] = '1';
    } else {
        x[(n / 2) + 1] = '1';
    }

    for (i = 1; i < n + 1; i++) {
        if (x[i] == '1') {
            ctx.fillRect(i - 1, 0, 1, 1);
        }
    }

    for (j = 1; j < iterations - 1; j++) {
            x_old = x.slice();
        for (i = 1; i < n + 1; i++) {
            var a = x_old.slice(i-1,i+2).join('') == '001';
            var b = x_old.slice(i-1,i+2).join('') == '010';
            var c = x_old.slice(i-1,i+2).join('') == '011';
            var d = x_old.slice(i-1,i+2).join('') == '100';

            if (a || b || c || d) {
                x[i] = '1';
            } else {
                x[i] = '0';
            }
        }
        x[0] = x[n];
        x[n + 1] = x[1];
        for(i = 1; i < n + 1; i++) {
            if(x[i] == 1) {
                ctx.fillRect(i,j, 1, 1);
            }
        }
    }
}
