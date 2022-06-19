import PatientService from "../../modules/User/UserService";
import PatientRepositoryMock from "../mocks/patientRepository.mock";
import { IMailerService } from "./../../libs/mailer";
import { IPatientRepository  } from "../../modules/User/UserRepository";
import { Patient } from "../../modules/User/UserEntity";
import { mailerService } from "../../libs";
import { Any } from "typeorm";


const patientService = new PatientService( new PatientRepositoryMock(), mailerService);

describe("Patient service USE-CASE : ", () => {
  
  describe("add patient use case : ", () => {
   
    it("Should throw an error if patientData is empty or null", async () => {
      try {
        await patientService.register({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          phone: 12345632112
        });
      } catch (e:any) {
        
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Missing required fields");
      }
    })

    // it('Should throw an error if patientdata is empty or null', async () => {
    // 	const patient = await patientService.add({ firstname: "Brigitte", lastname: "Lolekunda", email: "Lolekunda", password: "klkdeljf23"});

    // 	expect(patient.firstname).toBe("Brigitte");
    // 	expect(patient.lastname).toBe("Lolenkunda");
    // 	expect(patient.email).toBe("Brigitte");
    // 	expect(patient.password).toBe("klkdeljf23");

    // 	expect(patient instanceof Patient).toBe(true);

    // })

    // it('Should return an array of Patient instance', async () => {

    // 	const patients = await patientService.getAll();

    // 	expect(patients[0] instanceof Patient).toBe(true);

    // 	expect(patients[0].firstname).toBe("Brigitte")
    // 	expect(patients[0].lastname).toBe("Lolekunda")
    // 	expect(patients[0].email).toBe("bLol@gmail.com")
    // 	expect(patients[0].password).toBe("klkdeljf23")
    // })
  })
})
