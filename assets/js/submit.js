var form = document.getElementById("contactform");



form.addEventListener("submit",(e)=>{
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  const postData = {
    name: name,
    email: email,
    content: message,
  };
  
  // Create the request headers
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${firebaseConfig.apiKey}`, // Include if authentication is required
  };

  fetch(`${databaseURL}/your-database-node.json`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(postData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data posted successfully:', data);
    })
    .catch(error => {
      console.error('Error posting data:', error);
    });

})