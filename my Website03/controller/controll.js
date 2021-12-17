const showTyping = document.getElementById('typing');
const phrases = [ 'developer', 'web designer', 'software developer' ];
let i = 0, j = 0;
let isDeleting = false;
let currentPhrase = []
let isEnd = false;
function loop ()
{
    if (i < phrases.length) {
        showTyping.innerHTML = currentPhrase.join('');
        isEnd = false;
        if (!isDeleting && j <= phrases[ i ].length) {
            currentPhrase.push([ phrases[ i ][ j ] ])
            j++;
            showTyping.innerHTML = currentPhrase.join('');
        }
        if (isDeleting && j <= phrases[ i ].length) {
            currentPhrase.pop([ phrases[ i ][ j ] ])
            j--;
            showTyping.innerHTML = currentPhrase.join('');
        }
        if (j == phrases[ i ].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (isDeleting && j == 0) {
            currentPhrase = []
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    // const normatSpeed = Math.random() * (80 - 50) + 50;
    let time = isEnd ? 2000 : isDeleting ? speedUp : speedUp;
    setTimeout(loop, time)
}
loop();
