import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'ACM_RIT';
const COLLECTION = 'members';

// GET /api/members — fetch all members
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const members = await db
      .collection(COLLECTION)
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, members });
  } catch (error) {
    console.error('GET /api/members error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}

// POST /api/members — add a new member (requires password)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { member_id, first_name, last_name, email, password } = body;

    // Password check
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword || password !== adminPassword) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized: incorrect password' },
        { status: 401 }
      );
    }

    // Validate required fields
    if (!member_id || !first_name || !email) {
      return NextResponse.json(
        { success: false, message: 'member_id, first_name, and email are required' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    // Prevent duplicate member_id or email
    const existing = await collection.findOne({
      $or: [{ member_id: member_id.trim() }, { email: email.trim().toLowerCase() }],
    });

    if (existing) {
      const isSameId = existing.member_id === member_id.trim();
      const message = isSameId
        ? `A member with ID "${member_id.trim()}" already exists`
        : `A member with email "${email.trim().toLowerCase()}" already exists`;
      return NextResponse.json(
        { success: false, message },
        { status: 409 }
      );
    }

    const newMember = {
      member_id: member_id.trim(),
      first_name: first_name.trim(),
      last_name: last_name ? last_name.trim() : '',
      email: email.trim().toLowerCase(),
      createdAt: new Date(),
    };

    await collection.insertOne(newMember);

    return NextResponse.json({ success: true, member: newMember }, { status: 201 });
  } catch (error) {
    console.error('POST /api/members error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to add member' },
      { status: 500 }
    );
  }
}
