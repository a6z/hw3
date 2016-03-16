function greet(B) {
    console.log('Hello!');
    var data = {
        name: 'DTD NAME'
    };
    
    B(data);
}

greet(data => {
    console.log('The callback was invoked!');
    console.log(data);
});

greet(data => {
    console.log('A different callback was invoked!');
    console.log(data.name);
});