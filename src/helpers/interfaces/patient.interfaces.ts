import { Patient } from "../../modules/User/UserEntity";
import { patient } from "../types/patient.types";

export interface IBookService {
    getAll(): Promise<Patient[]>
    add(patientData: patient): Promise<Patient>
}

export interface IPatientRepository {
    findAll(): Promise<Patient[]>
    addNew(patient: patient): Promise<Patient>
    findByEmail(email: string): Promise<Patient | undefined>
}