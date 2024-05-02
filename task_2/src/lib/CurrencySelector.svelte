<script lang="ts">    
    var selected_first = true
    var value1 = 0; 
    var value2 = 0;
    var rate = 0.001;

    var currency1 = "";
    var currency2 = "";
    var url = "https://v6.exchangerate-api.com/v6/4edd59d4b286dbc17b2600a7/latest/ALL";
    var currencies: string[] = [];
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
            currencies = Object.keys(data.conversion_rates);
        })
        .catch(error => {
            console.error('ошибка', error)
        });

    function findRate() {
        const url = `https://v6.exchangerate-api.com/v6/4edd59d4b286dbc17b2600a7/latest/${currency1}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                rate = data.conversion_rates[currency2];
            })
            .catch(error => {
                console.error('ошибка', error)
            });
    }

    function handleFocusFirst(){
        selected_first = true;
    }

    function handleSecondFirst(){
        selected_first = false;
    }
</script>


<span id="more-size">
    {#if selected_first}
        <select id="currency1" bind:value={currency1} on:input={findRate}>
            <option value="">Выберите валюту</option>
            {#each currencies as currency}
                <option value="{currency}">{currency}</option>
            {/each}
        </select>
        <input type="text" placeholder="0" bind:value={value1} on:focus={handleFocusFirst}>
        <select id="currency2" bind:value={currency2} on:input={findRate}>
            <option value="">Выберите валюту</option>
            {#each currencies as currency}
                <option value="{currency}">{currency}</option>
            {/each}
        </select>
        <input type="text" placeholder="0" value={value2 = value1 * rate} on:focus={handleSecondFirst}>
    {:else}
        <select id="currency1" bind:value={currency1} on:input={findRate}>
            <option value="">Выберите валюту</option>
            {#each currencies as currency}
                <option value="{currency}">{currency}</option>
            {/each}
        </select>
        <input type="text" placeholder="0" value={value1 = value2 / rate} on:focus={handleFocusFirst}>
        <select id="currency2" bind:value={currency2} on:input={findRate}>
            <option value="">Выберите валюту</option>
            {#each currencies as currency}
                <option value="{currency}">{currency}</option>
            {/each}
        </select>
        <input type="text" placeholder="0" bind:value={value2} on:focus={handleSecondFirst}>
    {/if}

    <datalist id="currency-list">
        {#each currencies as currency}
            <option value="{currency}"></option>
        {/each}
    </datalist>
</span>

{#if currency1 != "" && currency2 != ""}
    <div>Курс {currency1} к {currency2}: {rate}</div>
{/if}


<style>
    #more-size{
        height: 2fr;
    }

    input, select, option {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    input:hover, select:hover, option:hover {
    border-color: #646cff;
    }

    input:focus, select:focus, option:focus,
    input:focus-visible, select:focus-visible, option:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
</style>
