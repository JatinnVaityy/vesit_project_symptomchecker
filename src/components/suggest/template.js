import _ from 'lodash';
import html from '../../templates/helpers';

const symptomHtmlMapper = (suggestedSymptoms) => {
  return _.take(suggestedSymptoms, 5).map((symptom) => {
    return html`
      <div class="custom-control custom-checkbox" 
           style="margin-bottom: 10px; padding: 5px; display: flex; align-items: center;">
        <input id="${symptom.id}" type="checkbox" class="input-symptom custom-control-input" 
               style="margin-right: 10px; transform: scale(1.2); cursor: pointer;">
        <label for="${symptom.id}" class="custom-control-label" 
               style="font-size: 16px; color: #333; cursor: pointer;">
          ${symptom.name}
        </label>
      </div>
    `;
  }).join('');
};

const template = (context) => {
  return context.api.getSuggestedSymptoms(context.data).then((suggestedSymptoms) => {
    if (!suggestedSymptoms.length) {
      document.getElementById('next-step').click();
      return html`
        <p style="display: flex; align-items: center; font-size: 16px; color: #555;">
          <i class="fa fa-circle-o-notch fa-spin" style="margin-right: 8px; color: #007bff;"></i> 
          I am thinking...
        </p>
      `;
    }
    return html`
      <div style="background: #fff; padding: 20px; border-radius: 10px; 
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
        <h5 style="color: #007bff; font-weight: bold; margin-bottom: 15px;">
          <i class="fa fa-user-md"></i> Do you have any of the following symptoms?
        </h5>
        <div style="font-size: 16px; color: #444;">
          <form>
            ${symptomHtmlMapper(suggestedSymptoms)}
          </form>
          <p class="text-muted small" style="margin-top: 15px; font-size: 14px; color: #777;">
            <i class="fa fa-info-circle" style="color: #007bff;"></i> 
            This is a list of symptoms suggested by our AI, based on the information gathered so far during the interview.
          </p>
        </div>
      </div>
    `;
  });
};

export default template;
