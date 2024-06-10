function setup() {
    const upButtons = document.querySelectorAll('.up');
    const downButtons = document.querySelectorAll('.down');

    upButtons.forEach(button => {
        button.addEventListener('click', function () {
            const li = button.parentElement;
            const prevLi = li.previousElementSibling;
            if (prevLi) {
                li.parentElement.insertBefore(li, prevLi);
            }
        });
    });

    downButtons.forEach(button => {
        button.addEventListener('click', function () {
            const li = button.parentElement;
            const nextLi = li.nextElementSibling;
            if (nextLi) {
                li.parentElement.insertBefore(nextLi, li);
            }
        });
    });
}

document.body.innerHTML = `
<div class="displayed">
    <div class="container">
        <ol>
        <li><button class="up" type="button">up!</button>Swift (iOS)<button class="down" type="button">Down!</button></li>
        <li><button class="up" type="button">up!</button>JavaScript (React Native)<button class="down" type="button">Down!</button></li>
        <li><button class="up" type="button">up!</button>Dart (Flutter)<button class="down" type="button">Down!</button></li>
        <li><button class="up" type="button">up!</button>Kotlin (Android)<button class="down" type="button">Down!</button></li>
        <li><button class="up" type="button">up!</button>Java (Android)<button class="down" type="button">Down!</button></li>
        </ol>
    </div>
</div>`;

setup();
document.getElementsByTagName('button')[2].click();

console.log(document.body.innerHTML);