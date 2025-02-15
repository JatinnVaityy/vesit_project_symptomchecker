/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    resolve(html`
      <div style="background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
        <h5 style="color: #007bff; font-weight: bold; margin-bottom: 15px;">
          Tell us how you feel
        </h5>
        <div>
          <form>
            <div style="margin-bottom: 15px;">
              <label for="input-feel" style="font-weight: bold; color: #333;">
               Describe your symptoms:
              </label>
              <textarea 
                placeholder="e.g. I have a headache and feel dizzy..." 
                id="input-feel" 
                rows="4"
                style="width: 100%; padding: 10px; border: 2px solid #007bff; border-radius: 8px; resize: none; font-size: 14px; color: #333;"
              ></textarea>
            </div>
          </form>

          <p style="font-weight: bold; color: #333; margin-top: 15px;">
        Identified observations:
          </p>
          <ul id="observations" style="list-style: none; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9; min-height: 40px;">
            <li style="color: #777;">No symptoms identified yet.</li>
          </ul>

          <p style="color: #666; font-size: 14px; margin-top: 15px;">
           
            You can proceed <span style="background: #007bff; color: #fff; padding: 4px 8px; border-radius: 5px;">Next</span> 
            only if there are <span style="color: green;">present 
           </span> identified observations.
          </p>

          <p style="color: #666; font-size: 14px;">
          
            This screen uses our NLP engine to detect symptoms in written text. 
            Read more 
           
          </p>
        </div>
      </div>
    `);
  });
};

export default template;
