const apiKey = "B-qa2-0-5f031cbe-0-302d021500890ef262296563accd1cb4aab790323d2fd570d30214510bcdacdaa4f03f59477eef13f2af5ad13e3044";
const xhr = new XMLHttpRequest();

function checkout() {
    paysafe.checkout.setup("apiKey", {
        "currency": "USD",
        "amount": 10000,
        "locale": "en_US",
        "customer": {
            "firstName": "John",
            "lastName": "Dee",
            "email": "johndee@paysafe.com",
            "phone": "1234567890",
            "dateOfBirth": {
                "day": 1,
                "month": 7,
                "year": 1990
            }
        },
        "billingAddress": {
            "nickName": "John Dee",
            "street": "20735 Stevens Creek Blvd",
            "street2": "Montessori",
            "city": "Cupertino",
            "zip": "95014",
            "country": "US",
            "state": "CA"
        },
        "environment": "TEST",
        "merchantRefNum": "1559900597607",
        "canEditAmount": true,
        "merchantDescriptor": {
            "dynamicDescriptor": "XYZ",
            "phone": "1234567890"
        },
        "displayPaymentMethods": ["card"],
        "paymentMethodDetails": {
            "paysafecard": {
                "consumerId": "1232323"
            },
            "paysafecash": {
                "consumerId": "123456"
            },
            "sightline": {
                "consumerId": "123456",
                "SSN": "123456789",
                "last4ssn": "6789",
                "accountId": "1009688222"
            },
            "vippreferred": {
                "consumerId": "550726575",
                "accountId": "1679688456"
            }
        }
    }, function (instance, error, result) {
        if (result && result.paymentHandleToken) {
            console.log(result.paymentHandleToken);
            // make AJAX call to Payments API
            xhr.open("POST", "https://hosted.paysafe.com/checkout/v2/paysafe.checkout.min.js", true);
        } else {
            console.error(error);
            // Handle the error
        }
    }, function (stage, expired) {
        switch (stage) {
            case "PAYMENT_HANDLE_NOT_CREATED": // Handle the scenario
            case "PAYMENT_HANDLE_CREATED": // Handle the scenario
            case "PAYMENT_HANDLE_REDIRECT": // Handle the scenario
            case "PAYMENT_HANDLE_PAYABLE": // Handle the scenario
            default: // Handle the scenario
        }
    });
}
