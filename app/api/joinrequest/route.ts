import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'ACM_RIT';
const COLLECTION = 'join_requests';

// GET /api/joinrequest — fetch all join requests
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const requests = await db
      .collection(COLLECTION)
      .find({})
      .sort({ submittedAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, requests });
  } catch (error) {
    console.error('GET /api/joinrequest error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch requests' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, usn, message } = body;

    if (!name || !email || !mobile || !usn) {
      return NextResponse.json(
        { success: false, message: 'Name, email, mobile, and USN are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    await db.collection(COLLECTION).insertOne({
      name,
      email,
      mobile,
      usn,
      message: message || '',
      submittedAt: new Date(),
    });

    return NextResponse.json({ success: true, message: 'Request submitted successfully' });
  } catch (error) {
    console.error('POST /api/joinrequest error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
