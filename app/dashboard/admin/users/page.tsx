"use client";
import { useEffect, useState } from "react";

interface JoinRequest {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  usn: string;
  message: string;
  submittedAt: string;
}

export default function Page() {
  const [requests, setRequests] = useState<JoinRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/joinrequest")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setRequests(data.requests);
        else setError(data.message || "Failed to load");
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center py-32">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center py-32">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Interested Members</h1>
          <p className="text-gray-500 text-sm mt-1">
            People who submitted the Join Us form ({requests.length} total)
          </p>
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-16 text-center text-gray-400">
          No submissions yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">#</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Name</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Email</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Mobile</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">USN</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Message</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {requests.map((r, idx) => (
                  <tr key={r._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 text-gray-400">{idx + 1}</td>
                    <td className="px-5 py-3 font-medium text-gray-800">{r.name}</td>
                    <td className="px-5 py-3 text-blue-600">{r.email}</td>
                    <td className="px-5 py-3 text-gray-700">{r.mobile}</td>
                    <td className="px-5 py-3 font-mono text-gray-700 uppercase">{r.usn}</td>
                    <td className="px-5 py-3 text-gray-500 max-w-xs truncate" title={r.message}>
                      {r.message || <span className="italic text-gray-300">—</span>}
                    </td>
                    <td className="px-5 py-3 text-gray-400 whitespace-nowrap">
                      {new Date(r.submittedAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
