/*
const Xkun_list = [
    {
        "Xkun":"ITOUkun",
        "n": 110
    },
    {
        "Xkun":"SATOUkun",
        "n": 310
    },
    {
        "Xkun":"SIDOU",
        "n": 410
    },
    {
        "Xkun":"GOTOUkun",
        "n": 510
    },
    {
        "Xkun":"MUTOUkun",
        "n": 610
    },
    {
        "Xkun":"KUDOUkun",
        "n": 910
    },

]
*/
const Xkun_list = [
    {
        "Xkun":"ITOUkun",
        "n": 110
    },
    {
        "Xkun":"SATOUkun",
        "n": 310
    },
    {
        "Xkun":"SIDOU",
        "n": 410
    },
    {
        "Xkun":"GOTOUkun",
        "n": 510
    },
    {
        "Xkun":"MUTOUkun",
        "n": 610
    },
    {
        "Xkun":"KUDOUkun",
        "n": 910
    },

]

function main(){
    let startTime = 0;
    let random_list = [];
    for(let i=0;i<10;i++){
        let random = Math.floor(Math.random() * Xkun_list.length);
        random_list.push(random)
    };

    let Xkun_object;
    function Xkun_display(){
        const random_list_zero = random_list.shift();
        Xkun_object = Xkun_list[random_list_zero]
        document.getElementById('Xkun_name').textContent = Xkun_object.Xkun;
    };
    Xkun_display()
    startTime = new Date().getTime();

    function inputHandler(e){
        if(e.target.value && Xkun_object.n == e.target.value){
           if(random_list.length >= 1){
            Xkun_display();
            e.target.value = '';
           }else{
            alert(`${new Date().getTime() - startTime}ms`);
            start_screen();
            e.target.value = '';
            document.getElementById('Xkun_n').removeEventListener('change',inputHandler);
           }
        }
    }

    document.getElementById('Xkun_n').addEventListener('change',inputHandler)
}

function start_screen(){
    let cnt = 4;
    start_screen_div.textContent = "スペースを押して開始";
    start_screen_div.style.display = 'block';
    function start(){
        function countDown(){
            if(cnt > 1){
            cnt--
            start_screen_div.textContent = cnt;
            }else{
                start_screen_div.style.display = 'none';
                document.getElementById('Xkun_n').focus();
                clearInterval(countDown_interval);
                main();
            }
        };
        let countDown_interval = setInterval(countDown,1000)
        countDown();
        document.removeEventListener('keydown',keyCheck);
    }
    let keyCheck = (e)=>{
        if(e.code == 'Space') start();
    }
    document.addEventListener('keydown',keyCheck)
};
start_screen()
