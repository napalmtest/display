module.exports = display = function (m) {
    var text = [];
    for (var j = 0; j < m.x * 2 + 1; j++) {
        var line = [];
        if (0 == j % 2)
            for (var k = 0; k < m.y * 4 + 1; k++)
                if (0 == k % 4)
                    line[k] = '+';
                else if (j > 0 && m.verti[j / 2 - 1][Math.floor(k / 4)])
                    line[k] = ' ';
                else
                    line[k] = '-';
        else
            for (var k = 0; k < m.y * 4 + 1; k++)
                if (0 == k % 4)
                    if (k > 0 && m.horiz[(j - 1) / 2][k / 4 - 1])
                        line[k] = ' ';
                    else
                        line[k] = '|';
                else
                    line[k] = ' ';
        if (0 == j)
            line[1] = line[2] = line[3] = ' ';
        if (m.x * 2 - 1 == j)
            line[4 * m.y] = ' ';
        text.push(line.join('') + '\r\n');
    }
    return text.join('');
}