window.onload = draw;

function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var n = canvas.width = canvas.offsetWidth - 2;
    var iterations = canvas.height = canvas.offsetHeight - 2;
    var x_old = new Array(n + 2).join('0').split('');
    var x = new Array(n + 2).join('0').split('');

    x[(n / 2)] = '1';

    for (i = 1; i < n + 1; i++) {
        if (x[i] == '1') {
            ctx.fillRect(i, 0, 1, 1);
            console.log('*')
        }
    }

    for (j = 1; j < iterations - 1; j++) {
        x_old = x.slice();
        for (i = 1; i < n + 1; i++) {
            var a = x_old.slice(i - 1, i + 2).join('') == '001';
            var b = x_old.slice(i - 1, i + 2).join('') == '010';
            var c = x_old.slice(i - 1, i + 2).join('') == '011';
            var d = x_old.slice(i - 1, i + 2).join('') == '100';

            if (a || b || c || d) {
                x[i] = '1';
            } else {
                x[i] = '0';
            }
        }
        x[0] = x[n];
        x[n + 1] = x[1];
        for (i = 1; i < n + 1; i++) {
            if (x[i] == 1) {
                ctx.fillRect(i, j, 1, 1);
            }
        }
    }
}
