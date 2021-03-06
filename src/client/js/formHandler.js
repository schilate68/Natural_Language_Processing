function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log(formText);

    postData('http://localhost:8081/test', { url: formText })
        .then(res => {
            document.getElementById('results').innerHTML = res
        });

    console.log("::: Form Submitted :::")
    /* fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        }) */
}

export { handleSubmit }


const postData = async (url = '', data = {}) => {
    console.log("in postData");
    console.log(JSON.stringify(data));

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        //return newData;
    } catch (error) {
        console.log("error", error);
    }
}
