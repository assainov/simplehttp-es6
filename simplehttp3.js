//SIMPLE HTTP LIBRARY FOR FETCH API USING ES6 STANDARDS

class SimpleHTTP {
    //GET Request
    async get(url) {
        const response = await fetch(url);

        const responseData = await response.json();

        return responseData;
    }

    //POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData;

    }

    //PUT Request
    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData;
    }

    //DELETE Request
    async delete(url) {
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        
        const responseData = await response.json();

        return 'Resource has been deleted';
    }
}