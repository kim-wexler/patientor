import { useEffect, useState } from "react";
import { Diagnosis, Entry } from "../types";
import diagnosesService from "../services/diagnoses";

const Entries = ({ entries }: { entries: Entry[] }) => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    diagnosesService.getAll().then((res) => setDiagnoses(res));
  }, []);

  //   console.log(diagnoses);

  return (
    <div>
      <h2>Entries</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
          <strong>{entry.date}</strong> {entry.description}
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>
                {code} {diagnoses.find((d) => d.code === code)?.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Entries;
