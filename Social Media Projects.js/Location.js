// console.log("Hello")
// console.log(navigator)

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords
        let long = position.coords

        console.log(lat)
        console.log(long)
    })
} else {
    alert("Your co-ords are not correct")
}
