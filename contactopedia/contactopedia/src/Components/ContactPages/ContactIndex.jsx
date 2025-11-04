import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
import React from "react";


class ContactIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Ben Parker",
                    phone: "201-555-7858",
                    email: "ben@mail.com",
                    isFavourite: false
                },
                {
                    id: 2,
                    name: "Kathy Patrik",
                    phone: "201-555-7859",
                    email: "kathy@mail.com",
                    isFavourite: true
                },
                {
                    id: 3,
                    name: "Paul Show",
                    phone: "201-555-7860",
                    email: "paul@mail.com",
                    isFavourite: true
                }
            ]
        }
    }

    handleAddContact = (newContact) => {
        // alert("hello");
        const newFinalContact = {
            ...newContact,
            id: this.state.contactList[this.state.contactList.length-1].id + 1,
            isFavourite: false
        };
        this.setState((prevState) => {
            return{
                contactList: prevState.contactList.concat([newFinalContact])
            };
        });
    };

    render(){
        return(
            <div>
                <Header></Header>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact></AddRandomContact>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact></RemoveAllContact>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact handleAddContact = {this.handleAddContact}></AddContact>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavouriteContacts contacts = {this.state.contactList.filter((u)=>u.isFavourite==true)}></FavouriteContacts>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts contacts = {this.state.contactList.filter((u)=>u.isFavourite==false)}></GeneralContacts>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default ContactIndex;