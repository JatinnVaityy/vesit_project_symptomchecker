import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
      <div style="background: #fff; padding: 20px; border-radius: 10px; 
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
        <h5 style="color: #007bff; font-weight: bold; margin-bottom: 15px;">
          Please check all that apply to you.
        </h5>
        <div style="font-size: 16px; color: #444;">
          <form style="display: flex; flex-direction: column; gap: 10px;">
            ${riskHtmlMapper(risks, context.commonRiskFactors)}
          </form>
          <p class="text-muted small" style="margin-top: 15px; font-size: 14px; color: #777;">
           
            Above you see the most common risk factors. Although 
            <span style="color: #28a745;">/diagnosis</span> may return questions about risk factors, 
            when implementing a symptom checker, we recommend asking the patient about common risk factors 
            before the actual interview begins. This helps to steer the interview in the right direction 
            and to reduce its length. Please read more about risk factors 
            <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#common-risk-factors"
               style="color: #007bff; text-decoration: none; font-weight: bold;">
              here
            </a>.
          </p>
        </div>
      </div>
    `;
  });
};

export default template;
