

function initialize() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const currentDiv = button.parentElement;
            const currentDivIndex = Array.from(currentDiv.parentElement.children).indexOf(currentDiv);

            if (button.classList.contains('downButton')) {
                // Move current div down
                if (currentDivIndex < currentDiv.parentElement.children.length - 1) {
                    const nextDiv = currentDiv.parentElement.children[currentDivIndex + 1];

                    // Get the title elements
                    const currentTitle = currentDiv.querySelector('span');
                    const nextTitle = nextDiv.querySelector('span');

                    // Swap the title content
                    const nextTitleText = nextTitle.textContent;
                    nextTitle.textContent = currentTitle.textContent;
                    currentTitle.textContent = nextTitleText;

                    // Swap the children of the spans 
                    const nextChildren = Array.from(nextTitle.children);
                    const currentChildren = Array.from(currentTitle.children);
                    nextTitle.innerHTML;
                    currentTitle.innerHTML;
                    nextChildren.forEach(child => currentTitle.appendChild(child));
                    currentChildren.forEach(child => nextTitle.appendChild(child));
                }
            } else if (button.classList.contains('upButton')) {
                // Move current div up
                if (currentDivIndex > 0) {
                    const previousDiv = currentDiv.parentElement.children[currentDivIndex - 1];

                    // Get the title elements
                    const currentTitle = currentDiv.querySelector('span');
                    const previousTitle = previousDiv.querySelector('span');

                    // Swap the title content
                    const previousTitleText = previousTitle.textContent;
                    previousTitle.textContent = currentTitle.textContent;
                    currentTitle.textContent = previousTitleText;

                    // Swap the children of the spans
                    const previousChildren = Array.from(previousTitle.children);
                    const currentChildren = Array.from(currentTitle.children);
                    previousTitle.innerHTML;
                    currentTitle.innerHTML;
                    previousChildren.forEach(child => currentTitle.appendChild(child));
                    currentChildren.forEach(child => previousTitle.appendChild(child));
                }
            }
        });
    });
}


document.body.innerHTML = `
<div class="displayed">
    <div class="container">
        <div>
            <span>Escovar os dentes</span>
            <button class="downButton" type="button">&darr;</button>
        </div>
        <div>
            <span>Tomar café</span>
            <button class="downButton" type="button">&darr;</button>
            <button class="upButton" type="button">&uarr;</button>
        </div>
         <div>
            <span>Ler e-mails</span>
            <button class="downButton" type="button">&darr;</button>
            <button class="upButton" type="button">&uarr;</button>
        </div>
        <div>
            <span>Ligar o computador</span>
            <button class="upButton" type="button">&uarr;</button>
      </div>
    </div>
</div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);