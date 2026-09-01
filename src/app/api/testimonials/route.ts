import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { DEFAULT_TESTIMONIALS, TestimonialItem } from '@/data/defaultTestimonials';

export const runtime = 'nodejs';

export async function GET() {
  try {
    let dbTestimonials: TestimonialItem[] = [];

    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase testimonials query note:', error.message);
      } else if (data && data.length > 0) {
        dbTestimonials = data;
      }
    } catch (supaErr) {
      console.warn('Supabase client unconfigured or unavailable:', supaErr instanceof Error ? supaErr.message : supaErr);
    }

    // Combine newly submitted reviews from database with default Google Maps reviews
    const combinedTestimonials =
      dbTestimonials.length > 0
        ? [
            ...dbTestimonials,
            ...DEFAULT_TESTIMONIALS.filter(
              (def) => !dbTestimonials.some((db) => db.id === def.id)
            ),
          ]
        : DEFAULT_TESTIMONIALS;

    return NextResponse.json({
      success: true,
      testimonials: combinedTestimonials,
    });
  } catch (err: unknown) {
    console.error('Error fetching testimonials:', err);
    return NextResponse.json({
      success: true,
      testimonials: DEFAULT_TESTIMONIALS,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const name = (body.name || '').trim();
    const location = (body.location || '').trim();
    const rating = Number(body.rating) || 5;
    const trip_type = (body.trip_type || body.tripType || '').trim();
    const title = (body.title || '').trim();
    const review = (body.review || '').trim();

    if (!name) {
      return NextResponse.json(
        { error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5 stars.' },
        { status: 400 }
      );
    }

    if (!review || review.length < 5) {
      return NextResponse.json(
        { error: 'Please enter a review of at least 5 characters.' },
        { status: 400 }
      );
    }

    const newRecord: Omit<TestimonialItem, 'id'> = {
      name,
      location: location || undefined,
      rating,
      trip_type: trip_type || undefined,
      title: title || undefined,
      review,
      created_at: new Date().toISOString(),
      is_approved: true,
    };

    // If Supabase is configured, persist to database
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: newRecord.name,
            location: newRecord.location || null,
            rating: newRecord.rating,
            trip_type: newRecord.trip_type || null,
            title: newRecord.title || null,
            review: newRecord.review,
            is_approved: true,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('Supabase testimonials insert error:', error);
        return NextResponse.json(
          { error: `Database error: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Thank you for your review! It has been posted successfully.',
        testimonial: data || { ...newRecord, id: `client-${Date.now()}` },
      });
    } catch (supaErr) {
      console.warn('Supabase not configured or unreachable:', supaErr);
      // Return a generated record so the user's optimistic UI works seamlessly even during local test
      const fallbackItem: TestimonialItem = {
        ...newRecord,
        id: `local-${Date.now()}`,
      };

      return NextResponse.json({
        success: true,
        message: 'Review received! (Configuring Supabase will persist it permanently)',
        testimonial: fallbackItem,
      });
    }
  } catch (err: unknown) {
    console.error('Unexpected error in POST /api/testimonials:', err);
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
