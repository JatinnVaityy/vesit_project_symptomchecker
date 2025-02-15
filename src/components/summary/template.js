import html from '../../templates/helpers';

const conditionsHtmlMapper = (conditions) => {
  return conditions.map((condition) => `
    <div class="summary-item row" 
         style="border-bottom: 1px solid #ddd; padding: 10px 0; display: flex; align-items: center;">
      <div class="col-8" style="font-weight: bold; color: #333;">
        ${condition.name}
        ${condition.probability >= 0.2
    ? `<i class="fa fa-fw fa-eye" style="color: #007bff; margin-left: 5px;"></i>
             <a href="#" data-id="${condition.id}" class="explain" style="text-decoration: none; color: #007bff;">
               explain
             </a>`
    : ''}
      </div>
      <div class="col-4">
        <div class="progress" style="height: 12px; background: #e9ecef; border-radius: 6px; overflow: hidden;">
          <div class="progress-bar bg-info" role="progressbar" 
               style="width: ${Math.floor(condition.probability * 100)}%; font-size: 12px; text-align: center; 
                      line-height: 12px; border-radius: 6px;">
            ${Math.floor(condition.probability * 100)}%
          </div>
        </div>
      </div>
      <div class="explanation col-12" style="margin-top: 5px; color: #666; font-size: 14px;"></div>
    </div>          
  `).join('');
};

const template = (context) => {
  return context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
    return html`
      <div style="background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
        <h5 style="color: #007bff; font-weight: bold; margin-bottom: 15px;">
          <i class="fa fa-stethoscope"></i> Summary
        </h5>
        <div style="font-size: 16px; color: #444;">
          <p>Based on the interview, you could suffer from:</p>
          ${conditionsHtmlMapper(data.conditions)}
        </div>
      </div>
    `;
  });
};

export default template;
