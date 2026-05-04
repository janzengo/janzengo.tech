import Handlebars from 'handlebars';

const baseTemplate = `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{headline}}</title>

    <style>
      /* Janzengo Clean Light Theme */
      :root {
        --bg: #f6f6f6;           /* Very light gray background */
        --card: #ffffff;         /* White Card */
        --text: #333333;         /* Dark gray for main text */
        --muted: #737373;        /* Medium gray for secondary text */
        --accent: #8ea832;       /* Janzengo Olive Green */
        --border: #e5e5e5;       /* Light border */
        --button-text: #ffffff;  /* White text on button */
      }
      body {
        margin: 0;
        padding: 0;
        background-color: var(--bg);
        color: var(--text);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      .wrapper {
        padding: 40px 16px;
        width: 100%;
        box-sizing: border-box;
      }
      .card {
        max-width: 600px;
        margin: 0 auto;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      .header {
        padding: 32px 32px 0;
        text-align: center;
      }
      .logo {
        color: #1a1a1a;
        font-weight: 800;
        font-size: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration: none;
      }
      .logo span {
        color: var(--accent);
      }
      .content {
        padding: 32px;
        text-align: center;
      }
      .icon {
        color: var(--accent);
        font-size: 48px;
        margin-bottom: 24px;
        display: block;
        line-height: 1;
      }
      .headline {
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 16px;
        color: #111111;
      }
      .body-text {
        font-size: 16px;
        line-height: 1.6;
        color: var(--muted);
        margin-bottom: 32px;
      }
      .button {
        display: inline-block;
        background-color: var(--accent);
        color: var(--button-text); 
        font-weight: 700;
        text-decoration: none;
        padding: 12px 28px;
        border-radius: 6px;
        font-size: 14px;
        transition: opacity 0.2s;
      }
      .button:hover {
        opacity: 0.9;
      }
      .footer {
        padding: 24px;
        background-color: #fafafa;
        border-top: 1px solid var(--border);
        font-size: 12px;
        color: #999999;
        text-align: center;
      }
      
      /* Quote of their message */
      .quote-box {
        text-align: left;
        background: #fafafa;
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 20px;
        margin-top: 32px;
        font-size: 14px;
        color: var(--muted);
        font-style: italic;
        position: relative;
      }
      .quote-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--accent);
        font-weight: 700;
        margin-bottom: 8px;
        font-style: normal;
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="card">
        <div class="header">
          {{#if logoUrl}}
            <img src="{{logoUrl}}" alt="Logo" class="logo" style="height:24px;width:auto;object-fit:contain;" />
          {{else}}
            <a href="https://janzen.is-a.dev" class="logo">JANZENGO<span>.</span></a>
          {{/if}}
        </div>

        <div class="content">
          <!-- Simple Checkmark Icon -->
          <span class="icon">&#10003;</span>
          
          <h1 class="headline">{{headline}}</h1>
          
          <p class="body-text">{{subhead}}</p>

          <a href="https://janzen.is-a.dev" class="button">Visit Website</a>

          <!-- Optional: Show them what they sent so they have a record -->
          <div class="quote-box">
            <span class="quote-label">You wrote:</span>
            {{{messageHtml}}}
          </div>
        </div>

        <div class="footer">
          {{footer}}
        </div>
      </div>
    </div>

  </body>
</html>
`;

const template = Handlebars.compile(baseTemplate);

type TemplateInput = {
  logoUrl?: string; // Optional: Provide full URL (https://...) or relative
  headline: string;
  subhead: string;
  messageHtml: string;
  footer: string;
};

export function renderEmail(data: TemplateInput) {
  return template(data);
}