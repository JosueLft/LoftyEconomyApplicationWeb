const proxy = [{
    context: "/records",
    target: "http://localhost:8080"
}];
module.exports = proxy;