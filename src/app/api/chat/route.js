import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    console.log("✅ [DEBUG] Incoming POST request...");

    const { userMessage } = await request.json();
    console.log("📝 [DEBUG] Received user message:", userMessage);

    const apiKey = process.env.OPENAI_API_KEY;
    console.log("🔑 [DEBUG] Loaded API key:", apiKey ? "✅ Present" : "❌ Missing");

    if (!apiKey) {
      console.error("❌ [ERROR] Missing OpenAI API key in environment.");
      return NextResponse.json(
        { error: "API key is not configured. Please check your .env.local file." },
        { status: 500 }
      );
    }

    const openaiRequestPayload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert video editor assistant for FlowMotion. Help users optimize slow-motion video settings and offer creative advice.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      max_tokens: 200,
    };

    console.log("📤 [DEBUG] Sending request to OpenAI API:", JSON.stringify(openaiRequestPayload, null, 2));

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(openaiRequestPayload),
    });

    console.log("⏳ [DEBUG] Waiting for OpenAI response...");

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ [ERROR] OpenAI API returned error:", errorData);
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();
    console.log("✅ [DEBUG] OpenAI API response received:", JSON.stringify(data, null, 2));

    const reply = data.choices?.[0]?.message?.content ?? "⚠️ Sorry, no response was generated.";

    console.log("🧠 [DEBUG] AI Reply:", reply);

    return NextResponse.json({ reply });

  } catch (err) {
    console.error("❌ [FATAL ERROR] Exception in API route:", err);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
