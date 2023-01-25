let subBtn = document.querySelector(".btn");
let city = document.querySelector(".City");
let weather = document.querySelector(".Weather");
let zipCode  =  document.querySelector('.zip');



subBtn.addEventListener('click',(e)=>
{
    let zipCodeValue = zipCode.value;
    e.preventDefault
    getWeather(zipCodeValue);
    
})

 const getWeather = async (zipdata)=>
{
    try{
    
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip='+zipdata+'&appid=51fb8594421778a334e99d5d57e464bd&units=metric')
    if(response.status === 404)
    {
        alert("la la la ")
    }else
    {
        const data = await response.json();

        const {name} = data;
        const {temp} = data.main;
        city.innerHTML ="City: "+name;
        weather.innerHTML = "Temp: "+temp;
    }
   

    }catch(err) {
        console.log(err);
      }
}   


 