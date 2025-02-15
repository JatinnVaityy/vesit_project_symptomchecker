const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <div class="card" style="
            width: 600px;
            margin: auto;
            padding: 20px;
            border-radius: 15px;
            background: linear-gradient(135deg, #ffffff, #f9f9f9);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            font-family: 'Poppins', sans-serif;
            transition: transform 0.3s ease-in-out;
        " 
        onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'"
        >
          
          <!-- Title -->
          <h5 class="card-title" style="
              font-size: 1.8rem; 
              font-weight: bold; 
              text-align: center; 
              color: #333;
              margin-bottom: 20px;
          ">
            Please select your sex and age.
          </h5>
          
          <!-- Form -->
          <div class="card-text">
            <form>
              
              <!-- Sex Selection -->
              <div class="form-group row" style="margin-bottom: 20px;">
                <label for="input-sex" class="col-sm-3 col-form-label" style="
                    font-size: 1.2rem; 
                    font-weight: 600; 
                    color: #555;
                ">Sex</label>
                
                <div class="col-sm-9">      
                  <div class="custom-control custom-radio custom-control-inline" style="margin-right: 15px;">
                    <input type="radio" id="sex-radio-inline-1" 
                      name="sex-radio-inline" class="input-sex custom-control-input" value="male" checked>
                    <label class="custom-control-label" for="sex-radio-inline-1" style="
                        font-size: 1.2rem; 
                        cursor: pointer;
                        transition: color 0.3s ease-in-out;
                    " 
                    onmouseover="this.style.color='#007bff'" 
                    onmouseout="this.style.color='#444'">
                      <i class="fa fa-fw fa-male" style="font-size: 1.5rem; color: #007bff;"></i> Male
                    </label>
                  </div>

                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="sex-radio-inline-2" 
                      name="sex-radio-inline" class="input-sex custom-control-input" value="female">
                    <label class="custom-control-label" for="sex-radio-inline-2" style="
                        font-size: 1.2rem; 
                        cursor: pointer;
                        transition: color 0.3s ease-in-out;
                    " 
                    onmouseover="this.style.color='#d63384'" 
                    onmouseout="this.style.color='#444'">
                      <i class="fa fa-fw fa-female" style="font-size: 1.5rem; color: #d63384;"></i> Female
                    </label>
                  </div>
                </div>
              </div>

              <!-- Age Input -->
              <div class="form-group row" style="margin-bottom: 15px;">
                <label for="input-age" class="col-sm-3 col-form-label" style="
                    font-size: 1.2rem; 
                    font-weight: 600; 
                    color: #555;
                ">Age</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control" id="input-age" value="30" style="
                      font-size: 1.2rem; 
                      padding: 8px; 
                      border-radius: 8px; 
                      border: 1px solid #ccc; 
                      transition: border 0.3s ease-in-out;
                  " 
                  onfocus="this.style.border='1px solid #007bff'" 
                  onblur="this.style.border='1px solid #ccc'">
                </div>
              </div>

              <!-- Age Validation -->
              <p id="age-validation" class="col-sm-8 alert alert-danger" hidden="true" style="
                  font-size: 1rem; 
                  font-weight: bold;
                  text-align: center;
                  padding: 8px; 
                  border-radius: 10px;
                  margin-top: 10px;
                  background: #ffcccc;
                  color: #b30000;
                  display: none;
              ">
                Please enter an age in the range 0-130.
              </p>

            </form>
          </div>

          <!-- Info Section -->
          <p class="text-muted small" style="
              font-size: 1rem; 
              text-align: center; 
              color: #666;
              margin-top: 20px;
          ">
            <i class="fa fa-info-circle" style="color: #007bff;"></i>
            The sex and age attributes are required for every request to /diagnosis.
            Typically, this is the first question you should ask in your symptom checker. 
            Read more
            <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#sex-and-age" 
              style="color: #007bff; font-weight: bold; text-decoration: none; transition: color 0.3s ease-in-out;"
              onmouseover="this.style.color='#0056b3'" 
              onmouseout="this.style.color='#007bff'">
              here
            </a>.
          </p>

        </div>
      `);
  });
};

export default template;
