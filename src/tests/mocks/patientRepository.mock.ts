import { Patient } from "../../modules/User/UserEntity";
import { IPatientRepository  } from "../../modules/User/UserRepository";

const patients: Patient[] = [];

class PatientRepositoryMock implements IPatientRepository {

	async findAll() {
		return patients;
	}

	async addNew(patientEntity: Patient) {

		let patient = new Patient();
		patient.firstname = patientEntity.firstname;
		patient.lastname = patientEntity.lastname;
		patient.phone = patientEntity.phone;
		patient.email = patientEntity.email;
		patient.password = patientEntity.password;

        patients.push(patient);
        return patients[patients.length - 1];
    }

	async findByEmail(email: string) {
		const results = patients.filter((patient) => patient);
		return results[0];
	}
 
    async compareHash(password: string, hash: string) :  Promise<boolean> {
		return true;
    }
}
export default PatientRepositoryMock;
