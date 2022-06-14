const teamInput = document.querySelector('#team-input')
let totalCountries = 0

teamInput.addEventListener('keyup', (event) => {    
    let teamValue = document.querySelector('#team-input').value.toLowerCase().trim()

    for (let [key, value] of Object.entries(countries)) {
        for (let groupCountry = 0; groupCountry < value.length; groupCountry++) {
            for (let countryVariations = 0; countryVariations < value[groupCountry].length; countryVariations++) { // laço for para cada variação de escrita
                if (value[groupCountry][countryVariations] === teamValue) { // se o país do input for igual ao país da posição
                    let group = document.querySelector('#' + key).lastElementChild

                    if (group.children[groupCountry].childElementCount == 1) { // se a resposta não for inserida antes
                        group.children[groupCountry].innerHTML += '<div class="answer">' + value[groupCountry][0].toUpperCase() + '</div>'
                        document.querySelector('#team-input').value = ''
                        group.scrollIntoView()
                        totalCountries++
                        if (totalCountries === 32) {
                            document.querySelector('main').innerHTML += '<div id="congratulations"><h3>Parabéns!</h3><h4>Você acertou todos os países presentes na copa.</h4><button>Fechar</button></div>'
                            let congratulations = document.querySelector('#congratulations')
                            
                            congratulations.children[2].addEventListener('click', () => {
                                congratulations.remove()
                            })
                        }
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
        ['país de gales', 'pais de gales', 'gales']
    ],
    groupC: [
        ['argentina'],
        ['arábia saudita', 'arabia saudita', 'arábia', 'arabia'],
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
        ['costa rica'],
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
        ['coreia do sul', 'coreia']
    ]
}