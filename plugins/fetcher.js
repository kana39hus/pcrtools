
export default ({ app }, inject) => {
    const fetcher = {
        name: 'fetcher',
        get(api) {
            //console.log(api);
        },
        async post(api, request) {
            try {
                var response = await fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(request),
                });

                var data = await response.json()
                if (response.status == 404) {
                    return { status: response.status, response: response, data: undefined };
                }
                return { status: response.status, response: response, data: data };
            } catch (err) {
                console.log(api);
                console.log(err)
            }

        }

    }
    inject('fetcher', fetcher)
}
