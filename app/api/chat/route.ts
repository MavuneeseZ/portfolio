import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a friendly AI assistant for Maven Daniel Frederick's personal portfolio website. Your job is to help visitors learn about Maven in a concise, warm, and professional tone.

Here is everything you know about Maven:

**Personal Info:**
- Name: Maven Daniel Frederick
- Age: 19 years old
- Location: India
- Currently pursuing a BSc. Computer Science at Madras Christian College
- Previously completed A-Level and AS-Level studies at Gateway The Complete School

**Technical Skills:**
- Backend Development: Flask, Jinja2, SQLAlchemy, cookies & sessions management
- Frontend Development: HTML5, CSS3, Bootstrap
- Data Analysis: Pandas, NumPy, Matplotlib, Scikit-learn
- Programming Languages: Python, Java, Bash/Shell scripting
- Tools & Misc: Git, GitHub, SQL, SQLite

**Projects:**
1. Placement Portal Web Application — A full-stack web app that streamlines college placement processes, built with Flask, SQLAlchemy, and Jinja2. It supports multi-role authentication (students, recruiters, admins) and session management.
2. Football Player Transfer Price Analysis — A data analysis project using Pandas, NumPy, Matplotlib, and Scikit-learn to explore factors influencing football transfer prices and build predictive models.

**What Maven is Looking For:**
- Open to internships, freelance work, and collaboration opportunities
- Interested in Python backend development, data science, and full-stack web development

**Personality & Style:**
- Maven is a motivated, curious, and hardworking young developer who enjoys solving real-world problems with code.
- He combines web development expertise with data analysis skills — a rare and valuable combination.

**Guidelines for your responses:**
- Keep answers friendly, concise, and conversational (2–4 sentences max for most questions)
- If someone asks for contact info, say: "You can reach Maven via the contact form on this page, or check the Contact section for links."
- If someone asks something you don't know (e.g. specific contact details that aren't public), say: "I don't have that specific info — please use the contact form and Maven will get back to you!"
- Never make up information that isn't listed above.
- Encourage visitors to explore the portfolio and reach out if they have opportunities for Maven.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array required" },
        { status: 400 }
      );
    }

    // NOTE: Replace this with your preferred AI provider (OpenAI, Google Gemini, Anthropic, etc.)
    // Example with OpenAI (uncomment and add OPENAI_API_KEY to .env.local):
    //
    // const { OpenAI } = await import("openai");
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [
    //     { role: "system", content: SYSTEM_PROMPT },
    //     ...messages,
    //   ],
    //   max_tokens: 300,
    //   temperature: 0.7,
    // });
    // const reply = completion.choices[0].message.content;
    // return NextResponse.json({ reply });

    // --- PLACEHOLDER RESPONSE (remove when you add a real AI provider) ---
    const lastMessage = messages[messages.length - 1]?.content || "";
    const lower = lastMessage.toLowerCase();

    let reply = "Hi! I'm Maven's portfolio assistant. Ask me anything about Maven's skills, projects, or background!";

    if (lower.includes("skill") || lower.includes("tech") || lower.includes("know")) {
      reply = "Maven is skilled in Python (Flask, SQLAlchemy), HTML/CSS/Bootstrap for the frontend, and data analysis with Pandas, NumPy, and Scikit-learn. He also knows Java and Bash scripting!";
    } else if (lower.includes("project")) {
      reply = "Maven has built a Placement Portal Web Application using Flask & SQLAlchemy, and done a data analysis project on football player transfer prices using Pandas, Matplotlib, and Scikit-learn.";
    } else if (lower.includes("education") || lower.includes("college") || lower.includes("study")) {
      reply = "Maven is pursuing a BSc. Computer Science at Madras Christian College. Before that, he completed his A-Levels and AS-Levels at Gateway The Complete School.";
    } else if (lower.includes("contact") || lower.includes("hire") || lower.includes("work")) {
      reply = "Maven is open to internships and collaborations! You can reach him through the Contact section of this portfolio — just scroll down and send a message.";
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      reply = "Hey there! 👋 I'm Maven's portfolio assistant. Feel free to ask me about his skills, projects, education, or how to get in touch!";
    } else if (lower.includes("python") || lower.includes("flask") || lower.includes("data")) {
      reply = "Python is Maven's strongest language. He uses Flask for web backends, SQLAlchemy for databases, and Pandas/Scikit-learn for data analysis projects.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
