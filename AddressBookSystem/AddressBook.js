class Contact{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    //getters and setters
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Incorrect First Name: "+firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Incorrect Last Name: "+lastName;
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addressRegex = RegExp("^.{4,}$");
        if(addressRegex.test(address))
            this._address = address;
        else throw "Invalid Address: "+address;
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp("^[a-zA-Z]{4,}$");
        if(cityRegex.test(city))
            this._city = city;
        else throw "Invalid City: "+city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
        if(stateRegex.test(state))
            this._state = state;
        else throw "Invalid State: "+state;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw "Invalid Zip: "+zip;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        let phoneRegex = RegExp("^[0-9-]{1,}[ ][1-9]{1}[0-9]{9}$");
        if(phoneRegex.test(phone))
            this._phone = phone;
        else throw "Invalid Phone: "+phone;
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");
        if(emailRegex.test(email))
            this._email = email;
        else throw "Invalid Email: "+email;
    }

    toString(){
        return "\nFirst Name: "+this.firstName+", Last Name: "+this.lastName + ", Address: "+this.address+", City: "+this.city+", State: "
                +this.state+", Zip: "+this.zip+", Phone: "+this.phone+", Email: "+this.email;
    }
}

let contact = new Contact("Rachit","Shukla","Street 190","Bhopal","Madhya Pradesh","432109","91 9182736450","rachit@email.com");
console.log(contact.toString());

//Failure cases:
{
    //incorrect first name:
    try{
        let contact2 = new Contact("aAAA","Shukla","Street 190","Bhopal","Madhya Pradesh","432109","91 9182736450","rachit@email.com");
    }catch(e){
        console.error(e);
    }
    //incorrect address: 
    try{
        let contact2 = new Contact("Rachit","Shukla","Str","Bhopal","Madhya Pradesh","432109","91 9182736450","rachit@email.com");
    }catch(e){
        console.error(e);
    }
    //incorrect city: 
    try{
        let contact2 = new Contact("Rachit","Shukla","Street 190","Bh","Madhya Pradesh","432109","91 9182736450","rachit@email.com");
    }catch(e){
        console.error(e);
    }
    //incorrect phone 
    try{
        let contact2 = new Contact("Rachit","Shukla","Street 190","Bhopal","Madhya Pradesh","432109","9182736450","rachit@email.com");
    }catch(e){
        console.error(e);
    }
    //incorrect zip 
    try{
        let contact2 = new Contact("Rachit","Shukla","Street 190","Bhopal","Madhya Pradesh","412109B","91 9182736450","rachit@email.com");
    }catch(e){
        console.error(e);
    }
    //incorrect email
    try{
        let contact2 = new Contact("Rachit","Shukla","Street 190","Bhopal","Madhya Pradesh","412109","91 9182736450","rachitemail.com");
    }catch(e){
        console.error(e);
    }
}

let addressBookArray = new Array();
addressBookArray.push(contact);
addressBookArray.push(new Contact("Mark","Zuckerberg","Street 191","NewYork","New York","732106","11 6182755450","mark@email.com"));
addressBookArray.push(new Contact("Bill","Gates","Street 250","Medina","Washington","723091","11 6817263541","bill@email.com"));
addressBookArray.push(new Contact("Jeff","Bezos","Street 200","CityABC","Washington","772109","11 6385755850","jeff@email.com"));
console.log(addressBookArray.toString());


