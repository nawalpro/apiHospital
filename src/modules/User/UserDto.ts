
class UserDTO {
    
    public id;
    public firstname;
    public lastname;
    public phone;
    public email;
    public password;
    public admin;
    public practitioner;
    public patient;

    
    constructor({id, firstname,lastname, phone, email, password, admin, practitioner, patient } : {id: string, firstname: string, lastname: string, phone: number, email: string, password: string, admin: boolean, practitioner: boolean, patient: boolean }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.practitioner = practitioner;
        this.patient = patient;
    }

}

export default UserDTO;

