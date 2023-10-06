const url = "ws://www.felix-schultz.dk:8080/socket.php";
const protocols = [8080];
const webSocket = new WebSocket(url, protocols);

/* Websocket connection */
webSocket.addEventListener("open", (event) => {
    console.log("Connection established");
    
})

webSocket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
});