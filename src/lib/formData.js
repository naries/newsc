const columns = [
    {title: "id"},
    {title: "title"},
    {title: "product"},
    {title: "image"},
    {title: "fields"},
    {title: "submit"},
    {title: "bump"},
    {title: "upsale"},
    {title: "store"},
    {title: "responder"},
    {title: "paymentMethods"}
]
  
  
const create = (x) => {
let r = new Object
columns.map((col, i) => r[col["title"]] = x[i] || "no values")
return r
}

const rows = [
create([1, "Form Name", "Spy Eye glasses", "", [
    {label:"nameLabel", title: "Name", required: true}, 
    {label: "phoneLabel", title: "Phone number", required: false}, 
    {label: "whatsappLabel", title:"Whatsapp number", required: false}, 
    {label: "emailLabel", title: "Email address", required: false}, 
    {label: "addressLabel", title: "Address", required: false}, 
    {label: "stateLabel", title: "State", required: false}], 
    {background: 'royalblue', textColor: '#fff', text: 'Buy Now'}, 
    {pretext: "This is the pretext", benefit: "what's", product: 'Eye glasses', img: ''},
    {product: "New Eye Glass", URL: ""},
    [{title: "Store number", value: "08031855132"}, {title: "Whatsapp Response Message", value: 'Hi! Welcome to our store'}],
    {name: 'mailChimp'}, [{name: 'Bank Transfer'}, {name: 'Paypal'}]]),
create([1, "Form Name", "Spy Eye glasses", "", [
    {label:"nameLabel", title: "Name", required: true}, 
    {label: "phoneLabel", title: "Phone number", required: false}, 
    {label: "whatsappLabel", title:"Whatsapp number", required: false}, 
    {label: "emailLabel", title: "Email address", required: false}, 
    {label: "addressLabel", title: "Address", required: false}, 
    {label: "stateLabel", title: "State", required: false}], 
    {background: 'royalblue', textColor: '#fff', text: 'Buy Now'}, 
    {pretext: "This is the pretext", benefit: "what's", product: 'Eye glasses', img: ''},
    {product: "New Eye Glass", URL: ""},
    [{title: "Store number", value: "08031855132"}, {title: "Whatsapp Response Message", value: 'Hi! Welcome to our store'}],
    {name: 'mailChimp'}, [{name: 'Bank Transfer'}, {name: 'Paypal'}]]),
create([1, "Form Name", "Spy Eye glasses", "", [
    {label:"nameLabel", title: "Name", required: true}, 
    {label: "phoneLabel", title: "Phone number", required: false}, 
    {label: "whatsappLabel", title:"Whatsapp number", required: false}, 
    {label: "emailLabel", title: "Email address", required: false}, 
    {label: "addressLabel", title: "Address", required: false}, 
    {label: "stateLabel", title: "State", required: false}], 
    {background: 'royalblue', textColor: '#fff', text: 'Buy Now'}, 
    {pretext: "This is the pretext", benefit: "what's", product: 'Eye glasses', img: ''},
    {product: "New Eye Glass", URL: ""},
    [{title: "Store number", value: "08031855132"}, {title: "Whatsapp Response Message", value: 'Hi! Welcome to our store'}],
    {name: 'mailChimp'}, [{name: 'Bank Transfer'}, {name: 'Paypal'}]]),
create([1, "Form Name", "Spy Eye glasses", "", [
    {label:"nameLabel", title: "Name", required: true}, 
    {label: "phoneLabel", title: "Phone number", required: false}, 
    {label: "whatsappLabel", title:"Whatsapp number", required: false}, 
    {label: "emailLabel", title: "Email address", required: false}, 
    {label: "addressLabel", title: "Address", required: false}, 
    {label: "stateLabel", title: "State", required: false}], 
    {background: 'royalblue', textColor: '#fff', text: 'Buy Now'}, 
    {pretext: "This is the pretext", benefit: "what's", product: 'Eye glasses', img: ''},
    {product: "New Eye Glass", URL: ""},
    [{title: "Store number", value: "08031855132"}, {title: "Whatsapp Response Message", value: 'Hi! Welcome to our store'}],
    {name: 'mailChimp'}, [{name: 'Bank Transfer'}, {name: 'Paypal'}]]),
create([1, "Form Name", "Spy Eye glasses", "", [
    {label:"nameLabel", title: "Name", required: true}, 
    {label: "phoneLabel", title: "Phone number", required: false}, 
    {label: "whatsappLabel", title:"Whatsapp number", required: false}, 
    {label: "emailLabel", title: "Email address", required: false}, 
    {label: "addressLabel", title: "Address", required: false}, 
    {label: "stateLabel", title: "State", required: false}], 
    {background: 'royalblue', textColor: '#fff', text: 'Buy Now'}, 
    {pretext: "This is the pretext", benefit: "what's", product: 'Eye glasses', img: ''},
    {product: "New Eye Glass", URL: ""},
    [{title: "Store number", value: "08031855132"}, {title: "Whatsapp Response Message", value: 'Hi! Welcome to our store'}],
    {name: 'mailChimp'}, [{name: 'Bank Transfer'}, {name: 'Paypal'}]]),
]

const row = [create([1, "Form Name", "Choose Product", "", [
    {label:"nameLabel", title: "Name", required: true}, 
    {label: "phoneLabel", title: "Phone number", required: false}, 
    {label: "whatsappLabel", title:"Whatsapp number", required: false}, 
    {label: "emailLabel", title: "Email address", required: false}, 
    {label: "addressLabel", title: "Address", required: false}, 
    {label: "stateLabel", title: "State", required: false}], 
    {background: 'royalblue', textColor: '#fff', text: 'Buy Now'}, 
    {pretext: "Pretext...", benefit: "Bump product benefit", product: 'Choose a product', img: ''},
    {product: "Choose a product", URL: ""},
    [{title: "Store number", value: "Enter Whatsapp number"}, {title: "Whatsapp Response Message", value: 'Message that gets sent to the user whatsapp'}],
    {name: 'mailChimp'}, [{name: 'Bank Transfer'}, {name: 'Paypal'}]])]
export {columns, rows, row}
