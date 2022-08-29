$(() => {
    
    let formElem = $('form');
    let subtitleElem = $('.js-subtitle');
    let titleElem = $('.js-title');
    let descriptionElem = $('.js-description');
    let listTasksElem = $('.js-list-tasks');

    function chechedSubTitle() {
        if (listTasksElem.children().length > 0) {
            subtitleElem.css('display', 'none');
        } else {
            subtitleElem.css('display', 'block');
        }
    }

    function createNote(title, description) {
        let task = `
            <li class="js-note">
                <article class="mission">
                    <header class="action">
                        <div class="title-task">
                            <h3>${title}</h3>
                            <button type="button" class="delete js-delete" aria-label="удалить заметку"></button>
                        </div>
                        <button type="button" class="arrow js-arrow-hidden" aria-label="скрыть заметку"></button>
                    </header>

                    <p class="task-description">
                        ${description}
                    </p>
                </article>
            </li>
        `;

        listTasksElem.append(task);

        chechedSubTitle();
    }

    function deleteNote(note) {
        note.remove();

        chechedSubTitle();
    }


    formElem.submit((event) => {
        event.preventDefault();
        let title = titleElem.val();
        let description = descriptionElem.val();
        createNote(title, description);
    });

    listTasksElem.on('click', '.js-delete', (event) => {
        let note = event.target.closest('li');
        deleteNote(note);
    });

    listTasksElem.on('click', '.js-arrow-hidden', (event) => {
        let collapseArrow = $(event.target);
        let note = event.target.closest('article');

        if (note.lastElementChild.style.display !== 'none') {
            collapseArrow.css('background-image', 'url(\'img/arrow_right.jpg\')');
        } else {
            collapseArrow.css('background-image', 'url(\'img/arrow_down.jpg\')');
        }
        
        $(note.lastElementChild).slideToggle();
    });
});