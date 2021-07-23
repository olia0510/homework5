// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

const par = document.getElementById('content');

console.log(par);
//
// // -- отримує текст з блоку з id "rules"
//
const rul = document.getElementById('rules');

console.log(rul);

// // замініть текст параграфа з id 'content' на будь-який інший
//
par.innerText = 'Меду́зи (Medusozoa) — підтип вільноплавних морських тварин типу кнідарії, які мають драглисте тіло, що складається з шапки у формі парасолі та тягучих помацків.'
//
// // замініть текст параграфа з id 'rules' на будь-який інший

rul.innerHTML = 'Мальвіна - це «дівчинка з кучерявим блакитними волоссям», «найкрасивіша лялька з лялькового театру сеньйора Карабаса Барабаса», у неї порцелянова голова і тулуб, набитий ватою. Мальвіна тікає від жорстокого Карабаса Барабаса в ліс і живе в ньому до зустрічі з Буратіно. Про неї піклується все живе, що мешкає в лісі: «звірі, птахи, і деякі з комах дуже полюбили її, - тому що вона була вихована і лагідна дівчинка ... Звірі постачали її всім необхідним для життя». Головним супутником Мальвіни є пудель Артемон.'

// // змініть кожному елементу колір фону на червоний

    par.style.backgroundColor = 'red';
    rul.style.backgroundColor = 'red';

// змініть кожному елементу колір тексту на синій

    par.style.color = 'blue';
    rul.style.color = 'blue';

// отримати весь список класів елемента з id=rules і вивести їх в console.log

const vah = document.getElementsByTagName('rules');
console.log(vah)
// отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

const vof = document.getElementsByClassName('fc_rules');
console.log(vof)
for (const vofElement of vof) {
    vofElement.onclick =function (ev){
        console.log(ev.target.innerText = 'привіт')
    }
}


// поміняти колір тексту у всіх елементів fc_rules на червоний
const vof1 = document.getElementsByClassName('fc_rules');
console.log(vof1)
for (const vof1Element of vof1) {
    vof1Element.style.color = 'red'
}
