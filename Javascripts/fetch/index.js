let data_one;

const d_one = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => result.json())
    .then( (data) => {
        data_one =  data.filter( d => d.id === 2)
        return data_one;
    })


console.log(d_one);
