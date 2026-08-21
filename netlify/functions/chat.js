import fetch from 'node-fetch';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { messages, systemPrompt } = JSON.parse(event.body);

    if (!process.env.CLAUDE_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Claude API key not configured' })
      };
    }

    if (!messages || !systemPrompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Claude API error:', error);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Failed to get response from Claude' })
      };
    }

    const data = await response.json();
    const assistantMessage = data.content[0].text;

    return {
      statusCode: 200,
      body: JSON.stringify({
        content: assistantMessage
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
