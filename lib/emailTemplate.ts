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
      }
      body {
        margin: 0;
        padding: 0;
        background-color: var(--bg);
        color: var(--text);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Standard safe fonts */
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
        /* Subtle shadow for depth without being heavy */
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      
      /* Header / Logo */
      .header {
        padding: 24px 32px;
        border-bottom: 1px solid var(--border);
        background: #ffffff;
        text-align: left;
      }
      .logo {
        height: 24px;
        width: auto;
        display: block;
        color: #1a1a1a; /* Dark text for logo against white */
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;
        font-size: 18px;
      }
      .logo span {
        color: var(--accent); /* Olive dot or accent in logo */
      }

      .content {
        padding: 32px;
      }

      /* Status Pill */
      .pill {
        display: inline-block;
        padding: 4px 10px;
        background-color: #f0f5e5; /* Very pale olive */
        color: #5c6e21; /* Darker olive for text contrast */
        border-radius: 4px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 16px;
      }

      .headline {
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 12px;
        color: #111111;
        line-height: 1.3;
      }
      .subhead {
        margin: 0 0 24px;
        color: var(--muted);
        font-size: 15px;
        line-height: 1.5;
      }

      /* Data Table */
      .info-block {
        background: #fafafa;
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 20px;
      }
      .label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--muted);
        font-weight: 700;
        margin: 0 0 6px;
      }
      .value {
        font-size: 14px;
        color: var(--text);
        margin: 0 0 16px;
        font-weight: 500;
      }
      .message-body {
        font-size: 14px;
        line-height: 1.6;
        color: var(--text);
        white-space: pre-line;
        border-left: 3px solid var(--accent);
        padding-left: 12px;
        margin-top: 4px;
      }

      .footer {
        padding: 24px;
        background-color: #fafafa;
        border-top: 1px solid var(--border);
        font-size: 12px;
        color: #999999;
        text-align: center;
      }
      a {
        color: var(--accent);
        text-decoration: underline;
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
            <a href="#" class="logo">JANZENGO<span>.</span></a>
          {{/if}}
        </div>

        <div class="content">
          {{#if pill}}<div class="pill">{{pill}}</div>{{/if}}
          <h1 class="headline">{{headline}}</h1>
          <p class="subhead">{{subhead}}</p>
          
          <div class="info-block">
            <div class="label">Sender</div>
            <div class="value">{{fromName}} &lt;{{fromEmail}}&gt;</div>
            
            <div class="label">Message</div>
            <div class="message-body">{{{messageHtml}}}</div>
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
  pill?: string;
  headline: string;
  subhead: string;
  fromName: string;
  fromEmail: string;

  messageHtml: string;
  footer: string;
};

export function renderAdminEmail(data: TemplateInput) {
  return template(data);
}