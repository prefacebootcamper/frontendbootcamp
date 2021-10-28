document.addEventListener('DOMContentLoaded', () => {
    // function to add HTML code to add card
    const addCard = (title, progress, description) => `
    <div class="col-12 col-md-6 col-lg-3">
        <div class="card">

            <div class="card-header">
                <h5>${title}</h5>
                <div class="badge ${progress == 100 ? 'bg-success' : 'bg-warning'}">${progress == 100 ? 'Finished' : 'In progress'}</div>
            </div>

            <div class="card-body">
                <p>${description}</p>
            </div>

            <ul class="list-group list-group-flush"> <!--Progress-->
                <li class="list-group-item">
                    <p>Progress ${parseInt(progress)}%</span></p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" 
                        aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </li>
            </ul>

        </div>                      
    </div>
    `

    // click button
	document.getElementById('new-task').addEventListener('click', () => {
        let task_button = document.getElementById('new-task');
        task_button.innerText == "New Task" ? task_button.innerText = "Close Task" : task_button.innerText = "New Task";

        let form = document.getElementById('input-task');
        form.style.display == "none" || form.style.display == "" ? form.style.display = "block" : form.style.display = "none";
    });

	// form input
    document.getElementById('submit-btn').addEventListener('click', () => {
        let title = document.getElementById('task-name').value;
        let progress = document.getElementById('progress').value;
        let description = document.getElementById('description').value;

        if (title == '' || progress == '' || description == '') {
            alert('Please fill in all the required fields!');
        } else {
            if (parseInt(progress) >= 0 && parseInt(progress) <= 100) {
                progress = parseInt(progress);
                document.getElementById('cardholder').innerHTML += addCard(title, progress, description);
            } else {
                alert("Please input an appropriate percentage!");
            }
        }

        document.getElementById('task-name').value = '';
        document.getElementById('progress').value = '';
        document.getElementById('description').value = '';
    });

});

// change labels 
document.addEventListener('mouseover', () => {
   
    cards = document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('dblclick', () => {
            cards[i].getElementsByClassName('badge')[0].innerHTML = cards[i].getElementsByClassName('badge')[0].innerHTML == "On hold" ? "In progress" : (cards[i].getElementsByClassName('progress-bar')[0].getAttribute('aria-valuenow') != 100 ? 'On hold' : 'Finished')
            if (cards[i].getElementsByClassName('badge')[0].innerHTML == "On hold") {
                cards[i].getElementsByClassName('badge')[0].classList.remove('bg-warning')
                cards[i].getElementsByClassName('badge')[0].classList.add('bg-danger')
            } else if (cards[i].getElementsByClassName('badge')[0].innerHTML == "In progress") {
                cards[i].getElementsByClassName('badge')[0].classList.remove('bg-danger')
                cards[i].getElementsByClassName('badge')[0].classList.add('bg-warning')
            }
        });
    };

});


