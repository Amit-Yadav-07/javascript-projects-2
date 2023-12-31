let btn = document.querySelector('.toggle');
let articles = document.querySelector('.articles');

btn.addEventListener('click', function () {

    document.documentElement.classList.toggle('Dark-theme')
})



let items = data.map((item) => {

    const { title, date, length, snippet } = item

    const formatDate = moment(date).format("MMMM Do, YYYY")

    return `<article class="post">
                <h2>${title}</h2>
                <div class="post-info">
                    <span>${formatDate}</span>
                    <span>${length}</span>
                </div>
                <p>${snippet}</p>
            </article>`

}).join("")

articles.innerHTML = items;



