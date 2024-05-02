<script>
    const selectUsd = () => {
        var url = "https://v6.exchangerate-api.com/v6/4edd59d4b286dbc17b2600a7/latest/USD";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('ошибка', error)
            });
    }
</script>

<button on:click={selectUsd}>USD</button>