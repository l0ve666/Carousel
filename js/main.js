const body = document.querySelector(`body`)

body.style.background = `#EADF53`

const css = document.querySelector(`.btn`)
const html = document.querySelector(`.btn1`)
const js = document.querySelector(`.btn2`)

css.addEventListener(`mouseover`, (e) => {
    css.style.cursor = `pointer`

    css.addEventListener(`click`, (e) => {
        body.style.backgroundColor = `#EFADC3`
        css.classList.toggle(`clB`)
        body.style.transition = `.2s linear`
        current.style.marginLeft = `-300px`
        current.style.transition = `.2s linear`
    })
})

const current = document.querySelector(`#current`)

html.addEventListener(`mouseover`, (e) => {
    html.style.cursor = `pointer`

    html.addEventListener(`click`, (e) => {
        html.classList.toggle(`clB`)
        body.style.background = `#EADF53`
        body.style.transition = `.2s linear`
        current.style.marginLeft = `0px`
        current.style.transition = `.2s linear`
    })
})

js.addEventListener(`mouseover`, (e) => {
    js.style.cursor = `pointer`

    js.addEventListener(`click`, (e) => {
        body.style.backgroundColor = `#9091E3`
        js.classList.toggle(`clB`)
        body.style.transition = `.2s linear`
        current.style.marginLeft = `-600px`
        current.style.transition = `.2s linear`
    })
})




