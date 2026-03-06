'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Member {
  _id: string;
  member_id: string;
  first_name: string;
  last_name: string;
  email: string;
  createdAt: string;
}

const emptyForm = {
  member_id: '',
  first_name: '',
  last_name: '',
  email: '',
};

const SESSION_KEY = 'acm_admin_auth';

export default function UpdateMembersPage() {
  const [authed, setAuthed] = useState(false);
  const [gatePassword, setGatePassword] = useState('');
  const [storedPassword, setStoredPassword] = useState('');
  const [gateError, setGateError] = useState('');
  const [gateLoading, setGateLoading] = useState(false);

  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      setStoredPassword(saved);
      setAuthed(true);
    }
  }, []);

  async function handleGateSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGateError('');
    setGateLoading(true);
    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: gatePassword }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem(SESSION_KEY, gatePassword);
        setStoredPassword(gatePassword);
        setAuthed(true);
      } else {
        setGateError(data.message || 'Incorrect password');
      }
    } catch {
      setGateError('Network error, please try again');
    } finally {
      setGateLoading(false);
    }
  }

  async function fetchMembers() {
    setLoading(true);
    setFetchError('');
    try {
      const res = await fetch('/api/members');
      const data = await res.json();
      if (data.success) {
        setMembers(data.members);
      } else {
        setFetchError(data.message || 'Failed to load members');
      }
    } catch {
      setFetchError('Network error while fetching members');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (authed) fetchMembers();
  }, [authed]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, password: storedPassword }),
      });
      const data = await res.json();

      if (data.success) {
        setFormSuccess('Member added successfully!');
        setForm(emptyForm);
        setShowForm(false);
        await fetchMembers();
      } else {
        setFormError(data.message || 'Failed to add member');
      }
    } catch {
      setFormError('Network error, please try again');
    } finally {
      setSubmitting(false);
    }
  }

  /* ── Password Gate ── */
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 w-full max-w-sm p-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🔒</div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Access</h1>
            <p className="text-gray-500 text-sm mt-1">Enter the admin password to continue</p>
          </div>
          <form onSubmit={handleGateSubmit} className="space-y-4">
            <input
              type="password"
              required
              autoFocus
              value={gatePassword}
              onChange={e => setGatePassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {gateError && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {gateError}
              </p>
            )}
            <button
              type="submit"
              disabled={gateLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-semibold py-3 rounded-lg text-sm"
            >
              {gateLoading ? 'Verifying…' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Main Admin Page ── */
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">ACM RIT — Members</h1>
            <p className="text-gray-500 text-sm mt-0.5">
              {loading ? 'Loading…' : `${members.length} member${members.length !== 1 ? 's' : ''} registered`}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 font-semibold px-5 py-2.5 rounded-lg text-sm border border-gray-300"
            >
              ← Home
            </Link>
            <button
              onClick={() => { setShowForm(true); setFormError(''); setFormSuccess(''); }}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow"
            >
              + Add Member
            </button>
          </div>
        </div>

        {/* Success banner */}
        {formSuccess && (
          <div className="mb-6 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
            ✅ {formSuccess}
          </div>
        )}

        {/* Add Member Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-8">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Add New Member</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                    Member ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.member_id}
                    onChange={e => setForm(f => ({ ...f, member_id: e.target.value }))}
                    placeholder=""
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.first_name}
                      onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))}
                      placeholder="First"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={form.last_name}
                      onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))}
                      placeholder="Last (optional)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="member@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {formError && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {formError}
                  </p>
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-semibold py-2.5 rounded-lg text-sm"
                  >
                    {submitting ? 'Adding…' : 'Add Member'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowForm(false); setForm(emptyForm); setFormError(''); }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 font-semibold py-2.5 rounded-lg text-sm border border-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Members Table */}
        {loading ? (
          <div className="flex justify-center py-32 text-gray-400">Loading members…</div>
        ) : fetchError ? (
          <div className="text-center py-32 text-red-500">{fetchError}</div>
        ) : members.length === 0 ? (
          <div className="text-center py-32 text-gray-400">No members yet. Click <strong>+ Add Member</strong> to add the first one!</div>
        ) : (
          <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-5 py-4 text-left">Member ID</th>
                  <th className="px-5 py-4 text-left">Name</th>
                  <th className="px-5 py-4 text-left">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {members.map(m => (
                  <tr key={m._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-mono text-blue-600 font-medium">{m.member_id}</td>
                    <td className="px-5 py-4 text-gray-800 font-medium">
                      {m.first_name} {m.last_name}
                    </td>
                    <td className="px-5 py-4 text-gray-600 break-all">{m.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
