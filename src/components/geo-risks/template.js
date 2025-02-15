import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
      <div style="background: #fff; padding: 20px; border-radius: 10px; 
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
        <h5 style="color: #007bff; font-weight: bold; margin-bottom: 15px;">
          <i class="fa fa-map-marker-alt"></i> Please select where you live or have recently traveled to.
        </h5>
        <div style="font-size: 16px; color: #444;">
          <form style="display: flex; flex-direction: column; gap: 10px;">
            ${riskHtmlMapper(risks, context.locationRiskFactors)}
          </form>
          <p class="text-muted small" style="margin-top: 15px; font-size: 14px; color: #777;">
            <i class="fa fa-info-circle" style="color: #007bff;"></i> 
            Above you see risk factors related to geographical location. 
            Selecting your recent travel locations helps in identifying potential health risks.
          </p>
        </div>
      </div>
    `;
  });
};

export default template;
