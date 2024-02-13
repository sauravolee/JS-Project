let con = document.querySelector('#container');
let love = document.querySelector('i');

con.addEventListener('dblclick', ()=>{
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = '0.6';
    love.style.color = 'red';

    setTimeout(()=>{
        love.style.opacity = '0';
    },1000)

    setTimeout(()=>{
        love.style.transform = 'translate(-50%, -50%) scale(0)';
        love.style.color = 'transparent';
    },1500)
})