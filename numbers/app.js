let items = [...document.querySelectorAll('.number')];


const updateCount = (element) => {
    let value = parseInt(element.dataset.value);
    //console.log(value);
    let increment = Math.ceil(value / 1000);
    // console.log(increment);
    let initialValue = 0;

    let incrementCount = setInterval(() => {

        initialValue += incrementCount

        if (initialValue > value) {
            element.textContent = `${value}+`
            clearInterval(incrementCount);
            return
        }
        element.textContent = `${initialValue}+`
    }, 1)
}

items.forEach(item => {

    updateCount(item)
})
