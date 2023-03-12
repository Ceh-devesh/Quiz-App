console.log('Assignment-5')

$(document).ready(function () {

    $('body').html('<h1>The Quiz App</h1>')

    $('body').append('<div id=container></div>')

    var scoreContainer = document.createElement('div')
    scoreContainer.id = 'score-container'

    var scoreText = document.createElement('h6')
    scoreText.id = 'scoreText'
    scoreText.innerText = 'Score:'

    var score = document.createElement('h1')
    score.id = 'score'
    score.classList.add('score')
    score.innerText = Number(0)

    var total = document.createElement('h1')
    total.classList.add('score')
    total.innerText = '/5'

    scoreContainer.append(scoreText, score, total)

    $('body').append(scoreContainer)

    $.ajax({
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz',
        method: 'GET',
        success: function (data) {
            console.log(data)
            for (i = 0; i < data.length; i++) {

                var Question = document.createElement('h2')
                Question.id = 'Q' + data[i].id
                Question.innerText = 'Q' + data[i].id + '.' + ' ' + data[i].question


                var options = document.createElement('div')

                for (j = 0; j < data[i].options.length; j++) {
                    var radio = document.createElement('input')
                    radio.type = 'radio'
                    radio.id = data[i].options[j] + data[i].id
                    radio.name = data[i].id
                    radio.value = data[i].options[j]

                    var label = document.createElement('label')
                    label.setAttribute('for', data[i].options[j] + data[i].id)
                    label.innerText = data[i].options[j]

                    var br = document.createElement('br')

                    $(options).append(radio, label, br)
                }

                var hr = document.createElement('hr')

                $('#container').append(Question, options, hr)

            }

            $('#container').append('<button id=btn>Submit</button>')

            $('button').on('click', function () {

                var ans1 = document.getElementById("Helga's Diadem1")
                var ans2 = document.getElementById("Grawp2")
                var ans3 = document.getElementById("Defense Against Dark Arts3")
                var ans4 = document.getElementById("Ravenclaw4")
                var ans5 = document.getElementById("Herbology5")

                var final = 0

                if (ans1.checked) {
                    final += 1
                }

                if (ans2.checked) {
                    final += 1
                }

                if (ans3.checked) {
                    final += 1
                }

                if (ans4.checked) {
                    final += 1
                }

                if (ans5.checked) {
                    final += 1
                }

                score.innerText = final
            })
        }
    })
})

