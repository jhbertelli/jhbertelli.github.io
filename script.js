const teamInput = document.querySelector('#team-input')

teamInput.addEventListener('keypress', (event) => {    
    let teamValue = document.querySelector('#team-input').value.toLowerCase().trim()

    for (let [key, value] of Object.entries(countries)) {
        for (let groupCountries = 0; groupCountries < value.length; groupCountries++) {
            for (let countryVariations = 0; countryVariations < value[groupCountries].length; countryVariations++) { // laço for para cada variação de escrita
                if (value[groupCountries][countryVariations] === teamValue) { // se o país do input for igual ao país da posição
                    let group = document.querySelector('#' + key).lastElementChild

                    if (group.children[groupCountries].childElementCount == 1) { // se a resposta não for inserida antes
                        group.children[groupCountries].innerHTML += '<div class="answer">' + value[groupCountries][0].toUpperCase() + '</div>'
                        document.querySelector('#team-input').value = ''
                        group.scrollIntoView()
                        break
                    }
                }
            }
        }
    }
})

const countries = {
    groupA: [
        ['catar'],
        ['equador'],
        ['senegal'],
        ['holanda']
    ],
    groupB: [
        ['inglaterra'],
        ['irã', 'ira'],
        ['estados unidos', 'eua'],
        ['país de gales', 'pais de gales']
    ],
    groupC: [
        ['argentina'],
        ['arábia saudita', 'arabia saudita'],
        ['méxico', 'mexico'],
        ['polônia', 'polonia']
    ],
    groupD: [
        ['frança', 'franca'],
        ['austrália', 'australia'],
        ['dinamarca'],
        ['tunísia', 'tunisia']
    ],
    groupE: [
        ['espanha'],
        ['costa rica/nova zelândia', 'costa rica', 'nova zelândia', 'nova zelandia'],
        ['alemanha'],
        ['japão', 'japao']
    ],
    groupF: [
        ['bélgica', 'belgica'],
        ['canadá', 'canada'],
        ['marrocos'],
        ['croácia', 'croacia']
    ],
    groupG: [
        ['brasil'],
        ['sérvia', 'servia'],
        ['suíça', 'suiça', 'suíca', 'suica'],
        ['camarões', 'camaroes']
    ],
    groupH: [
        ['portugal'],
        ['gana'],
        ['uruguai'],
        ['coreia do sul']
    ]
}