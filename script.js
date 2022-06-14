const teamInput = document.querySelector('#team-input')

teamInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        let teamValue = document.querySelector('#team-input').value.toLowerCase().trim()

        for (let [key, value] of Object.entries(countries)) {
            if (value.includes(teamValue)) { // se a chave (grupo A, grupo B...) tiver o valor do input
                for (let index = 0; index < value.length;) { // verifica cada posição do grupo
                    if (value[index] === teamValue) { // se a posição tiver o país do input
                        value.splice(index, 1)
                        console.log(key)
                        
                        let group = document.querySelector('#' + key).lastElementChild
                        group.children[index].innerHTML += '<div class="answer">' + teamValue.toUpperCase() + '</div>'  
                        break
                    }
                    index++
                }
            }
        }
    }
})

const countries = {
    groupA: [
        'catar',
        'equador',
        'senegal',
        'holanda'
    ],
    groupB: [
        'inglaterra',
        'irã',
        'estados unidos',
        'país de gales'
    ],
    groupC: [
        'argentina',
        'arábia saudita',
        'méxico',
        'polônia'
    ],
    groupD: [
        'frança',
        'austrália',
        'dinamarca',
        'tunísia'
    ],
    groupE: [
        'espanha',
        'costa rica',
        'alemanha',
        'japão'
    ],
    groupF: [
        'bélgica',
        'canadá',
        'marrocos',
        'croácia'
    ],
    groupG: [
        'brasil',
        'sérvia',
        'suíça',
        'camarões'
    ],
    groupH: [
        'portugal',
        'gana',
        'uruguai',
        'coreia do sul'
    ]
}