import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';


export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env file.'
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}


export async function uploadResumeToSupabase(file: File): Promise<string> {
  const supabase = getSupabaseClient();
  const bucketName = 'resumes';

  // Sanitize filename and create unique timestamped path
  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const uniqueId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
  const filePath = `applications/${Date.now()}_${uniqueId.slice(0, 8)}_${sanitizedFileName}`;

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || 'application/octet-stream',
    });

  if (uploadError) {
    throw new Error(`Failed to upload resume to storage: ${uploadError.message}`);
  }

  // Retrieve public URL for the uploaded resume
  const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(uploadData.path);

  if (!urlData || !urlData.publicUrl) {
    throw new Error('Failed to generate public URL for uploaded resume.');
  }

  return urlData.publicUrl;
}
