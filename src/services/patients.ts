import axios from "axios";
import { Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

const getPatient = async (id: string) => {
  const result = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
  // console.log(result.data);
  return result.data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  create,
  getPatient,
};
