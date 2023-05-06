import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import { useEffect, useState } from "react";
import { Patient } from "../types";
import Entries from "./Entries";

const PatientPage = () => {
  const id = useParams().id;
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (id) {
      patientService.getPatient(id).then((p) => {
        setPatient(p);
      });
    }
  }, [id]);

  if (patient) {
    // console.log(patient.entries);
    return (
      <div>
        <h1>{patient.name}</h1>
        ssn: {patient.ssn}
        <br />
        occupation: {patient.occupation}
        <Entries entries={patient.entries} />
      </div>
    );
  }
  return null;
};

export default PatientPage;
