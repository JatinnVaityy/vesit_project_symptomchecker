const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <div style="
        display: flex; 
        align-items: center; 
        gap: 25px; 
        padding: 30px; 
        background: linear-gradient(135deg, #ffffff, #f0f3f5); 
        border-radius: 18px; 
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        max-width: 750px;
        margin: auto;
        transition: transform 0.3s ease-in-out;
      " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
      
        <!-- Left Content -->
        <div style="flex: 1;">
          <h5 class="card-title" style="
            font-size: 1.9rem; 
            font-weight: bold; 
            color: #2c3e50; 
            margin-bottom: 14px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          ">
            The symptom checker made by doctors for
          </h5>
          <h6 class="card-subtitle mb-2 text-muted" style="
            font-size: 1.4rem; 
            color: #7f8c8d; 
            margin-bottom: 18px;
            font-style: italic;
          ">
            women &bull; men &bull; adults &bull; parents &bull; seniors &bull; you
          </h6>

          <div class="card-text" style="
            font-size: 1.3rem; 
            color: #444; 
            line-height: 1.7;
          ">
            <p style="
              margin: 10px 0; 
              padding-left: 14px; 
              border-left: 5px solid #3498db; 
              font-weight: 500;
              transition: all 0.3s ease-in-out;
            " onmouseover="this.style.color='#2980b9'" onmouseout="this.style.color='#444'">🩺 Analyze your symptoms</p>

            <p style="
              margin: 10px 0; 
              padding-left: 14px; 
              border-left: 5px solid #e74c3c; 
              font-weight: 500;
              transition: all 0.3s ease-in-out;
            " onmouseover="this.style.color='#c0392b'" onmouseout="this.style.color='#444'">💡 Understand your health</p>

            <p style="
              margin: 10px 0; 
              padding-left: 14px; 
              border-left: 5px solid #f39c12; 
              font-weight: 500;
              transition: all 0.3s ease-in-out;
            " onmouseover="this.style.color='#d35400'" onmouseout="this.style.color='#444'">📌 Plan your next steps</p>

            <p style="
              margin: 10px 0; 
              padding-left: 14px; 
              border-left: 5px solid #2ecc71; 
              font-weight: 500;
              transition: all 0.3s ease-in-out;
            " onmouseover="this.style.color='#27ae60'" onmouseout="this.style.color='#444'">📅 Get ready for your visit</p>
          </div>
        </div>

        <!-- Right Image -->
        <img src="https://static.vecteezy.com/system/resources/thumbnails/020/487/373/small/clipboard-with-stethoscope-medical-check-form-report-health-checkup-concept-metaphor-illustration-flat-design-eps10-simple-and-modern-style-vector.jpg" 
          alt="Medical Checkup Illustration" 
          style="
            width: 210px; 
            height: auto; 
            border-radius: 15px; 
            box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.2); 
            transition: transform 0.3s ease-in-out;
          "
          onmouseover="this.style.transform='scale(1.07)'" 
          onmouseout="this.style.transform='scale(1)'"
        >

      </div>
    `);
  });
};

export default template;
