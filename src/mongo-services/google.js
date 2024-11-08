import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import 'dotenv/config';

const CLIENT_ID = process.env.GG_CLIENT_ID;
const CLIENT_SECRET = process.env.GG_CLIENT_SECRET;
const REDIRECT_URI = process.env.GG_REDIRECT_URI;

export const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
export const drive = google.drive({ version: 'v3', auth: oauth2Client });
