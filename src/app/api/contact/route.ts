export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Contact form submission:', body);
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
