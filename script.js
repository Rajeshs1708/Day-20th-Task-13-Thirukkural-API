
let inp1 = document.getElementById('input')
let form1 = document.getElementById('form')
let container=document.getElementById('container')

form1.addEventListener('submit',(e)=>{
    e.preventDefault()
    let value = inp1.value
    func1()
    Thirulural(value)

})

let func1=()=>{
if(inp1.value===''){
    alert('Enter Thirukkural Poem No')
}
}


const Thirulural =async(value)=>{
try{
    let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${value}`)
    let data = await res.json()

    console.log(data);
        let ul = document.createElement('ul')
        let tamilul = document.createElement('ul')
        let englishul = document.createElement('ul')

        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let li3= document.createElement('li')
        let li4= document.createElement('li')
        let li5= document.createElement('li')
        let li6= document.createElement('li')
        let li7= document.createElement('li')
        let li8= document.createElement('li')
        let li9= document.createElement('li')
        let li10= document.createElement('li')
        let li11= document.createElement('li')
        let li12= document.createElement('li')
        let li13= document.createElement('li')
        let br= document.createElement('br')
        let hr= document.createElement('hr')

        li1.innerText = `The kural poem number = ${data.number}`
        li2.innerText = `Chapter_tamil = ${data.chap_tam}`
        li3.innerText = `Chapter_english =${data.chap_eng}`
        li4.innerText = `Chaptergroup_tamil = ${data.chapgrp_tam}`
        li5.innerText = `Chaptergroup_english = ${data.chapgrp_eng}`
        li6.innerText = `Tamil_explanation = ${data.tam_exp}`
        li7.innerText = `English_explanation = ${data.eng_exp}`
        li8.innerText = `Section_tamil = ${data.sect_tam}`
        li9.innerText = `Section_english = ${data.sect_eng}`
        li10.innerText = `Line1 = ${data.line1}`
        li11.innerText = `Line2 = ${data.line2}`
        li12.innerText = `English = ${data.eng}`
        li13.innerText = `The kural poem number = ${data.number}`
        tamilul.append(li1,li2,li4,li6,li8,li10,li11)
        englishul.append(li13,li3,li5,li7,li9,li12)
        ul.append(tamilul,br,englishul,hr)
        container.append(ul)

    }
catch(error){
        console.log(error);
    }
    
}
