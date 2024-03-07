
// Instantiating new EasyHTTP class 
const http = new EasyHTTP; 
// User Data 
const data = { 
    name: 'Hakuna Matata', 
    username: 'Simba', 
    email: 'simba@gmail.com'
  } 
  
// Update Post 
http.put('http://85.215.154.152:8080/submit', data) 
  
// Resolving promise for response data 
.then(data => console.log(data)) 
  
// Resolving promise for error 
.catch(err => console.log(err));
