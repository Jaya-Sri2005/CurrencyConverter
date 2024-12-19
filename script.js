const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;


let currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme);
themeToggleButton.textContent = currentTheme === 'dark' ? '🌙' : '🌞';


themeToggleButton.addEventListener("click", () => {
    if (currentTheme === 'dark') {
        currentTheme = 'light';
        themeToggleButton.textContent = '🌞'; 
    } else {
        currentTheme = 'dark';
        themeToggleButton.textContent = '🌙'; 
    }

   
    body.classList.toggle('dark');
    body.classList.toggle('light');

    
    localStorage.setItem('theme', currentTheme);
});



let convertbtn=document.querySelector(".convert-btn");
console.log(convertbtn);
convertbtn.onclick=async ()=>{
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    if (!amount) {
        alert("Please enter an amount.");
        return;
    }


    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const result = (amount * rate).toFixed(5);

    document.getElementById("result").innerHTML = `<text style="font-size:14px; color: grey;">${amount} ${fromCurrency} = </text><br><text style="font-size:25px;"> ${result} ${toCurrency}</text>`;

}

function swapCurrencies() {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    // Swap the selected values
    const tempCurrency = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = tempCurrency;
}

document.addEventListener("DOMContentLoaded", () => {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const currencyNames = {
        "USD": "US Dollar",
        "EUR": "Euro",
        "INR": "Indian Rupee",
        "GBP": "British Pound",
        "CAD": "Canadian Dollar",
        "AUD": "Australian Dollar",
        "JPY": "Japanese Yen",
        "NZD": "New Zealand Dollar",
        "RUB": "Russian Ruble",
        "AED": "United Arab Emirates Dirham",
        "AFN": "Afghan Afghani",
        "ALL": "Albanian Lek",
        "AMD": "Armenian Dram",
        "ANG": "Netherlands Antillean Guilder",
        "AOA": "Angolan Kwanza",
        "ARS": "Argentine Peso",
        "AWG": "Aruban Florin",
        "AZN": "Azerbaijani Manat",
        "BAM": "Bosnia-Herzegovina Convertible Mark",
        "BBD": "Barbadian Dollar",
        "BDT": "Bangladeshi Taka",
        "BGN": "Bulgarian Lev",
        "BHD": "Bahraini Dinar",
        "BIF": "Burundian Franc",
        "BMD": "Bermudian Dollar",
        "BND": "Brunei Dollar",
        "BOB": "Bolivian Boliviano",
        "BRL": "Brazilian Real",
        "BSD": "Bahamian Dollar",
        "BTN": "Bhutanese Ngultrum",
        "BWP": "Botswana Pula",
        "BYN": "Belarusian Ruble",
        "BZD": "Belize Dollar",
        "CDF": "Congolese Franc",
        "CHF": "Swiss Franc",
        "CLP": "Chilean Peso",
        "CNY": "Chinese Yuan",
        "COP": "Colombian Peso",
        "CRC": "Costa Rican Colón",
        "CUP": "Cuban Peso",
        "CVE": "Cape Verdean Escudo",
        "CZK": "Czech Koruna",
        "DJF": "Djiboutian Franc",
        "DKK": "Danish Krone",
        "DOP": "Dominican Peso",
        "DZD": "Algerian Dinar",
        "EGP": "Egyptian Pound",
        "ERN": "Eritrean Nakfa",
        "ETB": "Ethiopian Birr",
        "FJD": "Fijian Dollar",
        "FKP": "Falkland Islands Pound",
        "FOK": "Faroese Króna",
        "GEL": "Georgian Lari",
        "GGP": "Guernsey Pound",
        "GHS": "Ghanaian Cedi",
        "GIP": "Gibraltar Pound",
        "GMD": "Gambian Dalasi",
        "GNF": "Guinean Franc",
        "GTQ": "Guatemalan Quetzal",
        "GYD": "Guyanese Dollar",
        "HKD": "Hong Kong Dollar",
        "HNL": "Honduran Lempira",
        "HRK": "Croatian Kuna",
        "HTG": "Haitian Gourde",
        "HUF": "Hungarian Forint",
        "IDR": "Indonesian Rupiah",
        "ILS": "Israeli New Shekel",
        "IMP": "Isle of Man Pound",
        "IQD": "Iraqi Dinar",
        "IRR": "Iranian Rial",
        "ISK": "Icelandic Króna",
        "JEP": "Jersey Pound",
        "JMD": "Jamaican Dollar",
        "JOD": "Jordanian Dinar",
        "KES": "Kenyan Shilling",
        "KGS": "Kyrgyzstani Som",
        "KHR": "Cambodian Riel",
        "KID": "Kiribati Dollar",
        "KMF": "Comorian Franc",
        "KRW": "South Korean Won",
        "KWD": "Kuwaiti Dinar",
        "KYD": "Cayman Islands Dollar",
        "KZT": "Kazakhstani Tenge",
        "LAK": "Lao Kip",
        "LBP": "Lebanese Pound",
        "LKR": "Sri Lankan Rupee",
        "LRD": "Liberian Dollar",
        "LSL": "Lesotho Loti",
        "LYD": "Libyan Dinar",
        "MAD": "Moroccan Dirham",
        "MDL": "Moldovan Leu",
        "MGA": "Malagasy Ariary",
        "MKD": "Macedonian Denar",
        "MMK": "Myanmar Kyat",
        "MNT": "Mongolian Tögrög",
        "MOP": "Macanese Pataca",
        "MRU": "Mauritanian Ouguiya",
        "MUR": "Mauritian Rupee",
        "MVR": "Maldivian Rufiyaa",
        "MWK": "Malawian Kwacha",
        "MXN": "Mexican Peso",
        "MYR": "Malaysian Ringgit",
        "MZN": "Mozambican Metical",
        "NAD": "Namibian Dollar",
        "NGN": "Nigerian Naira",
        "NIO": "Nicaraguan Córdoba",
        "NOK": "Norwegian Krone",
        "NPR": "Nepalese Rupee",
        "OMR": "Omani Rial",
        "PAB": "Panamanian Balboa",
        "PEN": "Peruvian Sol",
        "PGK": "Papua New Guinean Kina",
        "PHP": "Philippine Peso",
        "PKR": "Pakistani Rupee",
        "PLN": "Polish Złoty",
        "PYG": "Paraguayan Guaraní",
        "QAR": "Qatari Riyal",
        "RON": "Romanian Leu",
        "RSD": "Serbian Dinar",
        "SAR": "Saudi Riyal",
        "SBD": "Solomon Islands Dollar",
        "SCR": "Seychellois Rupee",
        "SDG": "Sudanese Pound",
        "SGD": "Singapore Dollar",
        "SHP": "Saint Helena Pound",
        "SLL": "Sierra Leonean Leone",
        "SOS": "Somali Shilling",
        "SRD": "Surinamese Dollar",
        "SSP": "South Sudanese Pound",
        "STN": "São Tomé and Príncipe Dobra",
        "SYP": "Syrian Pound",
        "SZL": "Eswatini Lilangeni",
        "THB": "Thai Baht",
        "TJS": "Tajikistani Somoni",
        "TMT": "Turkmenistani Manat",
        "TND": "Tunisian Dinar",
        "TOP": "Tongan Paʻanga",
        "TRY": "Turkish Lira",
        "TTD": "Trinidad and Tobago Dollar",
        "TVD": "Tuvaluan Dollar",
        "TZS": "Tanzanian Shilling",
        "UAH": "Ukrainian Hryvnia",
        "UGX": "Ugandan Shilling",
        "UYU": "Uruguayan Peso",
        "UZS": "Uzbekistani Soʻm",
        "VES": "Venezuelan Bolívar",
        "VND": "Vietnamese Đồng",
        "VUV": "Vanuatu Vatu",
        "WST": "Samoan Tālā",
        "XAF": "Central African CFA Franc",
        "XCD": "East Caribbean Dollar",
        "XOF": "West African CFA Franc",
        "XPF": "CFP Franc",
        "YER": "Yemeni Rial",
        "ZAR": "South African Rand",
        "ZMW": "Zambian Kwacha",
        "ZWL": "Zimbabwean Dollar"
    };
    
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);

            currencies.forEach(currency => {
                const currencyName = currencyNames[currency] || currency; 

                const optionFrom = document.createElement("option");
                optionFrom.value = currency;
                optionFrom.textContent = `${currency} - ${currencyName}`;
                fromCurrencySelect.appendChild(optionFrom);

                const optionTo = document.createElement("option");
                optionTo.value = currency;
                optionTo.textContent = `${currency} - ${currencyName}`;
                toCurrencySelect.appendChild(optionTo);
            });
        })
        .catch(error => console.error("Error fetching currency data:", error));
});






document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function () {
        const answer = item.nextElementSibling;

        // Check if the answer is already visible, if so, hide it
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block"; // Show the answer
        } else {
            answer.style.display = "none"; // Hide the answer
        }
    });
});
