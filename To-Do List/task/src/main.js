const taskList = document.getElementById('task-list')


function startScreen () {
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i)
        let template = `${localStorage.getItem(key)}`
        taskList.insertAdjacentHTML('afterbegin', `${template}`)
    }
    let buttons = document.getElementsByClassName('delete-btn')
    Array.from(buttons).forEach(function(b) {
        b.addEventListener('click', function (e){
                let item = e.target.parentElement
                taskList.removeChild(item)
                localStorage.removeItem(`${item.dataset.id}`)
        });
    });

    let checkboxes = document.getElementsByClassName('check-btn')
    console.log(checkboxes)
    Array.from(checkboxes).forEach(function (element) {
        element.addEventListener('click', function () {
            let span = element.parentNode.parentNode.querySelector('span')
            span.classList.toggle('task-done')
            let item = span.parentElement
            element.checked ? checked = 'checked' : checked = ''
            let template = `<li data-id="${item.dataset.id}"><label>
                    <input type="checkbox" class="check-btn" ${checked}>
                    </label>
                    <span class="${span.classList}">${span.textContent}</span>
                    <button class="delete-btn"></button>
                    </li>`
            localStorage.setItem(`${item.dataset.id}`, template)
        })

        });
}

startScreen()

let str = ''
/* ADD TASK LOGIC */
document.getElementById('add-task-button').addEventListener('click', function (){
    let taskText = document.getElementById('input-task').value
    function liCreate(text){
        let liElement = document.createElement('li')

        function checkboxCreate() {
            let label = document.createElement('label')
            let input = document.createElement('input')
            input.setAttribute('type', 'checkbox')
            input.setAttribute('class', 'check-btn')
            input.addEventListener('click', function (e) {
                let span = e.target.parentElement.nextSibling
                let item = span.parentElement
                span.classList.toggle('task-done')
                input.checked ? checked = 'checked' : chacked = ''
                let template = `<li data-id="${item.dataset.id}"><label>
                    <input type="checkbox" class="check-btn" ${checked}>
                    </label>
                    <span class="${span.classList}">${taskText}</span>
                    <button class="delete-btn"></button>
                    </li>`
                localStorage.setItem(`${item.dataset.id}`, template)
            })
            label.appendChild(input)
            liElement.appendChild(label)
        }

        function spanCreate (text) {
            let span = document.createElement('span')
            span.setAttribute('class', 'task')
            let spanText = document.createTextNode(text)
            span.appendChild(spanText)
            liElement.appendChild(span)
        }

        function deleteButtonCreate () {
            let deleteButton = document.createElement('button')
            deleteButton.setAttribute('class', 'delete-btn')
            deleteButton.addEventListener('click', function (e){
                let item = e.target.parentElement
                taskList.removeChild(item)
                localStorage.removeItem(`${item.dataset.id}`)
            })
            liElement.appendChild(deleteButton)
        }
        checkboxCreate()
        spanCreate(text)
        deleteButtonCreate()

        liElement.setAttribute('data-id', `${++localStorage.length}`)

        let template = `<li data-id="${++localStorage.length}"><label>
                    <input type="checkbox" class="check-btn">
                    </label>
                    <span class="task">${taskText}</span>
                    <button class="delete-btn"></button>
                    </li>`
        localStorage.setItem(`${++localStorage.length}`, template)

        return liElement
    }
    taskList.appendChild(liCreate(taskText))

    document.getElementById('input-task').value = ''
})

