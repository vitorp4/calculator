function showPress(x){
    var eSpanb = window.document.querySelector('span#displaybottom')
    var eSpant = window.document.querySelector('span#displaytop')
    
    if(eSpant.innerHTML != '' && !['\u00F7','\u00D7','-','+'].includes(x)){
        eSpant.innerHTML = ''
        eSpanb.innerHTML = `${x}`
    }
    else if(eSpant.innerHTML != '' && ['\u00F7','\u00D7','-','+'].includes(x)){
        eSpant.innerHTML = ''
        eSpanb.innerHTML += `${x}`
    }
    else if(eSpant.innerHTML == '' && eSpanb.innerHTML == '0' && !['\u00F7','\u00D7','-','+'].includes(x)){
        eSpanb.innerHTML = `${x}`
    }
    else if(eSpant.innerHTML == '' && eSpanb.innerHTML == '0' && ['\u00F7','\u00D7','-','+'].includes(x)){
        eSpanb.innerHTML += `${x}`
    }
    else if(eSpant.innerHTML == '' && eSpanb.innerHTML != '0'){
        eSpanb.innerHTML += `${x}`
    } 
}

function deleteChar(){
    var eSpanb = window.document.querySelector('span#displaybottom')
    var eSpant = window.document.querySelector('span#displaytop')
    var str = eSpanb.innerHTML

    eSpant.innerHTML = ''

    if(str.length > 1)
        eSpanb.innerHTML = str.slice(0, str.length-1)
    else 
        eSpanb.innerHTML = '0'
}

function deleteAll(){
    var eSpanb = window.document.querySelector('span#displaybottom')
    var eSpant = window.document.querySelector('span#displaytop')

    eSpanb.innerHTML = '0'
    eSpant.innerHTML = ''
}

function calculate(){
    var eSpanb = window.document.querySelector('span#displaybottom')
    var eSpant = window.document.querySelector('span#displaytop')
    const regex = /([\+\-]?\d*\.?\d+)([\u00F7\u00D7\-\+])([\+\-]?\d*\.?\d+)/
    var str = eSpanb.innerHTML
    var res;

    if(str.match(regex) == null)
        window.alert("Invalid Syntax")
    else{
        var match = str.match(regex)
        var num1 = Number(match[1])
        var num2 = Number(match[3])

        switch(match[2]){
            case '\u00F7':
                if(num2 == '0')
                    window.alert('Division by ZERO')
                else
                    res = num1 / num2
                break
            case '\u00D7':
                res = num1 * num2
                break
            case '-':
                res = num1 - num2
                break
            case '+':
                res = num1 + num2
                break
        }
        eSpant.innerHTML = str + '='
        eSpanb.innerHTML = parseFloat(res.toFixed(5))
    }
}
