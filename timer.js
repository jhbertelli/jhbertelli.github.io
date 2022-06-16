const timer = document.querySelector('#timer')
let minute = 6
let second = '00'
timer.textContent = minute + ':' + second

teamInput.addEventListener('click', () => {
    if (minute == 6) {
        let counter = setInterval(() => {

            if (totalCountries === 32) {
                clearInterval(counter)
                return
            }

            if (second == 0) {
                minute--
                second = 60
            }

            second--

            if (second < 10) {
                second = '0' + second
            }

            timer.textContent = minute + ':' + second

            if (minute == 0 && second == 0) {
                clearInterval(counter)

                if (totalCountries == 1) {
                    document.querySelector('main').innerHTML += '<div id="you-lost"><h3>Você perdeu!</h3><h4>Infelizmente, você não conseguiu acertar todos os países. Você acertou ' + totalCountries + ' país.</h4><button>Tentar novamente</button></div>'
                } else {
                    document.querySelector('main').innerHTML += '<div id="you-lost"><h3>Você perdeu!</h3><h4>Infelizmente, você não conseguiu acertar todos os países. Você acertou ' + totalCountries + ' países.</h4><button>Tentar novamente</button></div>'
                }

                let youLost = document.querySelector('#you-lost')
                
                youLost.children[2].addEventListener('click', () => {
                    location.reload()
                })
            }

        }, 1000)
    }
})
