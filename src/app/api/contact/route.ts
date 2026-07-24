export async function POST(request: Request) {
  try {
    const body = await request.json();

        // Forward to Zapier webhook for lead tracking
        try {
                await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                                      ...body,
                                      website: 'Plano Concrete Solutions',
                                      submittedAt: new Date().toISOString(),
                          }),
                });
        } catch (zapierError) {
                console.error('[Zapier Webhook Error]', zapierError);
        }
    console.log('Contact form submission:', body);
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
