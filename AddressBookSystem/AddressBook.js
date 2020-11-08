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

    //getter and setter
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    get address(){
        return this._address;
    }
    set address(address){
        this._address = address;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        this._phone = phone;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }

    toString(){
        return "First Name: "+this.firstName+", Last Name: "+this.lastName + ", Address: "+this.address+", City: "+this.city+", State: "
                +this.state+", Zip: "+this.zip+", Phone: "+this.phone+", Email: "+this.email;
    }
}

let contact = new Contact("Rachit","Shukla","Street 190","Bhopal","MP","432109","9182736450","rachit@email.com");
console.log(contact.toString());