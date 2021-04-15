console.log('FormData')


function repreContenidoFormData(data) {
    //console.log(data)

    let keys = data.keys()
    let values = data.values()

    //console.log(keys)
    //console.log(values)

    /* console.log('-----keys-----')
    console.log(keys.next())
    console.log(keys.next())
    console.log(keys.next())

    console.log('----values----')
    console.log(values.next())
    console.log(values.next())
    console.log(values.next()) */

    do {
        let clave = keys.next()
        let valor = values.next()
        if(clave.done || valor.done) break

        console.log(clave.value, valor.value)
    }
    while(true)
}

function enviarFormDataAjax(data) {
    let xhr = new XMLHttpRequest
    xhr.open('post','url')
    //xhr.setRequestHeader('content-type','application/json')
    xhr.send(data)
}

function enviarObjetoAjax(data) {
    let xhr = new XMLHttpRequest
    xhr.open('post','url')
    xhr.setRequestHeader('content-type','application/json')
    xhr.send(JSON.stringify(data))
}

/* ---------------------------------------------------- */
/*           Uso de FormData con formularios            */
/* ---------------------------------------------------- */
let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let data = new FormData(form)
    repreContenidoFormData(data)

    enviarFormDataAjax(data)
})

/* ---------------------------------------------------- */
/*      Uso de FormData con carga manual de datos       */
/* ---------------------------------------------------- */
let btnCrear = document.getElementById('btn-crear')
btnCrear.addEventListener('click', () => {
    
    let data = new FormData()
    for(let i=0; i<10; i++) {
        data.append(`Param-${i}`,i)
    }
    repreContenidoFormData(data)

    enviarFormDataAjax(data)
    enviarObjetoAjax({nombre: 'Juan', email: 'j@p'})
})
