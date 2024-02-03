async function test() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const show = await result.json();

    console.log( show);
} 

test();