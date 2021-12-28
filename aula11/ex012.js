var hora = 
console.log(`Sao exatamente ${hora} horas`)
if (hora<12 && hora >=6) {
    console.log('Bom dia')
}else if (hora>=12 && hora<=18) {
    console.log('Boa tarde')
}else if (hora>18 && hora<=22) {
    console.log ('Boa noite')
}else  {
    console.log('Bom descanço')
}