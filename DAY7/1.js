function fun() {
    console.log("hello");
    console.log("hello");
    // Without function it will call once 
    setInterval(
        console.log("there")
        , 1000)

    // with function call after 1000 ms
    setInterval(function () {
        console.log("here");
    }
        , 1000)
    console.log("hello");
    console.log("hello");
}
