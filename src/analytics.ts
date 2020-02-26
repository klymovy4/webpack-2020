import * as $ from 'jquery'

function createAnalytics(): object {
    let counter = 0
    let destroyed: boolean = false
    console.log('test');


    const listener = (): number => counter++
    $(document).on('click', listener)
    return {
        destroy() {
            $(document).off('click', listener)
            destroyed = true
        },
        getClicks() {
            if (destroyed) {
                return `Аналитика удалена всего кликов было ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()