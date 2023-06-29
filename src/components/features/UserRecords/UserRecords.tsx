import { useEffect, useState } from "react";
import { getUserRecords } from "../../../services/user-records.service";

export default function UserRecords() {
  const [error, setError] = useState(null as any);
  const [records, setRecords] = useState(null as unknown as any[]);

  useEffect(() => {
    setError(null);
    getUserRecords()
      .then((data) => {
        setRecords(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error?.toString());
      });
  }, []);

  return (
    <div className="col-sm-12 col-md-10 col-lg-8">
      <div className="card bg-body-secondary">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>User</th>
                <th>Operation</th>
                <th>Amount</th>
                <th>Operation Response</th>
                <th>Balance</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {records?.map((record, index) => (
                <tr key={index}>
                <th>{record.id}</th>
                <td>{record.user?.username}</td>
                <td><p className="text-capitalize">{record.operation?.replace('_',' ').toLowerCase()}</p></td>
                <td>{record.amount}</td>
                <td>{record.operationResponse}</td>
                <td>{record.userBalance}</td>
                <td>{new Date(record.date).toUTCString()}</td>
              </tr>
              ))}
            </tbody>
          </table>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
