var data = {
    height: '10',
    radius: '10'
};
var volume = 0;
volume = (22 / 7) * (data.height) * (data.radius) * (data.radius)

function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}
console.log(roundNumber(volume, 4))