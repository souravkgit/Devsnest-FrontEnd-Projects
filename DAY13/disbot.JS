const btn = document.querySelector('button');
const input = document.querySelector('input');
const delay = ms => new Promise(res => setTimeout(res, ms));
btn.addEventListener('click', async() => {
    var msg = input.value;
    const splitString = msg.split(" ");
    var siz = splitString[0].length;
    msg = msg.slice(siz + 1);
    var n = parseInt(splitString[0]);
    // console.log(msg)
    var i = 0;
    if (splitString[0] == 'inf') {
        while (i >= 0) {
            fetch('https://discord.com/api/webhooks/860128600937332746/YehlAfJNpfFx29NTHhLGMFE4n3YFPuh0NGeM0uyKEYK0Nw1CDs49IU1dBstWMYSLwf3u', {
                    method: "POST",
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ content: msg })
                })
                .then(res => res.json())
                .then(data => console.log(data))
            i += 1
            await delay(1000);
        }
    } else {
        while (i < n) {
            fetch('https://discord.com/api/webhooks/860128600937332746/YehlAfJNpfFx29NTHhLGMFE4n3YFPuh0NGeM0uyKEYK0Nw1CDs49IU1dBstWMYSLwf3u', {
                    method: "POST",
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ content: msg })
                })
                .then(res => res.json())
                .then(data => console.log(data))
            i += 1
            await delay(1000);
        }
    }
})